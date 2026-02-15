import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getAgent,
  getActions,
  assignAction,
  removeAction
} from "../../services/agentService";

const AgentDetail = () => {
  const { id } = useParams();

  const [agentData, setAgentData] = useState(null);
  const [allActions, setAllActions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load agent + actions
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const agent = await getAgent(id);
        const actions = await getActions();
        setAgentData(agent);
        setAllActions(actions);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  const handleAssign = async (actionId) => {
    try {
      await assignAction(id, actionId);
      const updatedAgent = await getAgent(id);
      setAgentData(updatedAgent);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRemove = async (actionId) => {
    try {
      await removeAction(id, actionId);
      const updatedAgent = await getAgent(id);
      setAgentData(updatedAgent);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!agentData) return <p>Agent not found.</p>;

  const assignedIds = agentData.actions.map((a) => a.id);

  return (
    <main className="dashboard">
      <div className="dashboard-container">

        <h1>{agentData.agent.name}</h1>
        <p>{agentData.agent.description}</p>

        <h2>Impact Summary</h2>
        <ul>
          <li>Low: {agentData.impact_summary.low}</li>
          <li>Medium: {agentData.impact_summary.medium}</li>
          <li>High: {agentData.impact_summary.high}</li>
          <li>Irreversible: {agentData.impact_summary.irreversible}</li>
        </ul>

        <h2>Assigned Actions</h2>
        <ul>
          {agentData.actions.map((action) => (
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
          {allActions
            .filter((action) => !assignedIds.includes(action.id))
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
