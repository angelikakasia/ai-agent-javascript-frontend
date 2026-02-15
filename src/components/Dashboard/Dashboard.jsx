import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import { getAgents } from "../../services/agentService";
import "./Dashboard.css"
const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [agents, setAgents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const data = await getAgents();
        console.log("Agents response:", data);
        setAgents(data || []);
      } catch (err) {
        console.log("FETCH AGENTS ERROR:", err);
      }
    };

    if (user) fetchAgents();
  }, [user]);

  return (
    <main className="dashboard">
      <div className="dashboard-container">
        <h1>Dashboard</h1>
        <p className="subtitle">Signed in as {user?.email}</p>

        <h2>Your Agents</h2>

        {agents.length === 0 ? (
          <p className="empty">No agents created yet.</p>
        ) : (
          <ul className="agent-list">
            {agents.map((agent) => (
              <li key={agent.id}>
                <button
                  className="agent-button"
                  onClick={() => navigate(`/agents/${agent.id}`)}
                >
                  {agent.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

export default Dashboard;
