import { useEffect, useState } from "react";
import {
  getAgents,
  createAgent,
  deleteAgent
} from "../../services/agentService";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [agents, setAgents] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  const loadAgents = async () => {
    try {
      const data = await getAgents();
      setAgents(data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAgents();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) return;

    try {
      await createAgent({ name, description });
      setName("");
      setDescription("");
      loadAgents();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteAgent(id);
      loadAgents();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">

        <div className="dashboard-header">
          <h1>Your Agents</h1>
          <p>Design-time authority modeling and blast radius visibility</p>
        </div>

        <div className="dashboard-layout">

          {/* CREATE AGENT CARD */}
          <div className="dashboard-card create-card">
            <h2>Create New Agent</h2>

            <form onSubmit={handleCreate} className="agent-form">
              <input
                type="text"
                placeholder="Agent Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <textarea
                placeholder="Describe what this agent can access or modify"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <button type="submit">Create Agent</button>
            </form>
          </div>

          {/* AGENTS LIST CARD */}
          <div className="dashboard-card">
            <h2>Existing Agents</h2>

            {loading ? (
              <p className="muted">Loading agents...</p>
            ) : agents.length === 0 ? (
              <p className="muted">No agents created yet.</p>
            ) : (
              <div className="agent-grid">
                {agents.map((agent) => {
                  const id = agent._id || agent.id;

                  return (
                    <div key={id} className="agent-tile">
                      <div className="agent-content">
                        <Link to={`/agents/${id}`} className="agent-name">
                          {agent.name}
                        </Link>
                        <p className="agent-desc">{agent.description}</p>
                      </div>

                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(id)}
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
