import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImpactSummary from "./ImpactSummary";

import {
  getAgent,
  getActions,
  assignAction,
  removeAction
} from "../../services/agentService";

const AgentDetail = () => {
  const { id } = useParams();

  const [agent, setAgent] = useState(null);
  const [actions, setActions] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ------------------ Load Data ------------------ */

  const loadAgent = async () => {
    const data = await getAgent(id);
    setAgent(data);
  };

  const loadActions = async () => {
    const data = await getActions();
    setActions(data);
  };

  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true);
        await loadAgent();
        await loadActions();
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, [id]);

  /* ------------------ Assign / Remove ------------------ */

  const handleAssign = async (actionId) => {
    await assignAction(id, actionId);
    await loadAgent();
  };

  const handleRemove = async (actionId) => {
    await removeAction(id, actionId);
    await loadAgent();
  };

  /* ------------------ UI States ------------------ */

  if (loading) return <p>Loading...</p>;
  if (!agent) return <p>Agent not found.</p>;

  const assignedIds = agent.actions.map((a) => a.id);

  return (
    <main className="dashboard">
      <div className="dashboard-container">

        <h1>{agent.agent.name}</h1>
        <p>{agent.agent.description}</p>

        <ImpactSummary impactSummary={agent.impact_summary} />

        <h2>Assigned Actions</h2>
        <ul>
          {agent.actions.map((action) => (
            <li key={action.id}>
              {action.name} ({action.impact_level})
              <button onClick={() => handleRemove(action.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>

        <h2>Available Actions</h2>
        <ul>
          {actions
            .filter((a) => !assignedIds.includes(a.id))
            .map((action) => (
              <li key={action.id}>
                {action.name} ({action.impact_level})
                <button onClick={() => handleAssign(action.id)}>
                  Assign
                </button>
              </li>
            ))}
        </ul>

      </div>
    </main>
  );
};

export default AgentDetail;
