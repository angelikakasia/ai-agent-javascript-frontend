import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAgent } from "../../services/agentService";

const AgentForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name.trim() || !formData.description.trim()) {
      setError("All fields are required.");
      return;
    }

    try {
      setLoading(true);
      await createAgent(formData);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Failed to create agent.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">

        <div className="dashboard-card">
          <h1>Create Agent</h1>

          {error && <p className="error-text">{error}</p>}

          <form onSubmit={handleSubmit} className="agent-form-vertical">

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="primary-btn"
            >
              {loading ? "Creating..." : "Create Agent"}
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default AgentForm;
