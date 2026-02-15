import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAgents, deleteAgent } from "../../services/agentService";

const AgentList = () => {
  const [agents, setAgents] = useState([]);
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

        <div className="dashboard-card">
          <h1>Your Agents</h1>

          <Link to="/agents/new" className="primary-btn create-btn">
            + Create Agent
          </Link>
        </div>

        <div className="dashboard-card">

          {loading ? (
            <p className="muted">Loading agents...</p>
          ) : agents.length === 0 ? (
            <p className="muted">No agents created yet.</p>
          ) : (
            <ul className="agent-list">
              {agents.map((agent) => {
                const id = agent._id || agent.id;

                return (
                  <li key={id}>
                    <div>
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
                  </li>
                );
              })}
            </ul>
          )}

        </div>

      </div>
    </div>
  );
};

export default AgentList;
