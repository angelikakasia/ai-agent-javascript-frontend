import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAgents, deleteAgent } from "../../services/agentService";

const AgentList = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadAgents = async () => {
    try {
      const data = await getAgents();
      setAgents(data);
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

  if (loading) return <p>Loading agents...</p>;

  return (
    <main className="dashboard">
      <div className="dashboard-container">

        <h1>Your Agents</h1>

        <Link
          to="/agents/new"
          style={{
            display: "inline-block",
            marginBottom: "20px",
            background: "#f3d45a",
            color: "#000",
            padding: "10px 20px",
            borderRadius: "8px",
            textDecoration: "none"
          }}
        >
          + Create Agent
        </Link>

        {agents.length === 0 ? (
          <p>No agents created yet.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {agents.map((agent) => (
              <li
                key={agent.id}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  padding: "20px",
                  marginBottom: "15px",
                  borderRadius: "12px"
                }}
              >
                <h3>{agent.name}</h3>
                <p>{agent.description}</p>

                <div style={{ marginTop: "10px" }}>
                  <Link
                    to={`/agents/${agent.id}`}
                    style={{ marginRight: "15px" }}
                  >
                    View
                  </Link>

                  <button
                    onClick={() => handleDelete(agent.id)}
                    style={{
                      background: "#990000",
                      color: "white",
                      border: "none",
                      padding: "8px 16px",
                      borderRadius: "6px",
                      cursor: "pointer"
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

      </div>
    </main>
  );
};

export default AgentList;
