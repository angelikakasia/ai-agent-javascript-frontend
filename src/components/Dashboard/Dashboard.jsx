import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";

import { UserContext } from "../../contexts/UserContext";
import { getAgents } from "../../services/agentService";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [agents, setAgents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const data = await getAgents();

        console.log("AGENTS RESPONSE:", data); // 👈 LOG HERE

        // handle both possible backend shapes
        if (Array.isArray(data)) {
          setAgents(data);
        } else if (data.agents) {
          setAgents(data.agents);
        } else {
          setAgents([]);
        }

      } catch (err) {
        console.log(err);
      }
    };

    if (user) fetchAgents();
  }, [user]);

  return (
    <main>
      <h1>Welcome, {user?.email}</h1>

      <h2>Your Agents</h2>

      {agents.length === 0 && <p>No agents yet.</p>}

      <ul>
        {agents.map(agent => (
          <li key={agent.id}>
            <button onClick={() => navigate(`/agents/${agent.id}`)}>
              {agent.name}
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Dashboard;
