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

    try {
      setLoading(true);
      await createAgent(formData);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Failed to create agent.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="dashboard">
      <div className="dashboard-container">

        <h1>Create Agent</h1>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleSubmit}>

          <div style={{ marginBottom: "20px" }}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "10px", marginTop: "8px" }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "10px", marginTop: "8px" }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              background: "#f3d45a",
              color: "#000",
              padding: "12px 24px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer"
            }}
          >
            {loading ? "Creating..." : "Create"}
          </button>

        </form>

      </div>
    </main>
  );
};

export default AgentForm;
