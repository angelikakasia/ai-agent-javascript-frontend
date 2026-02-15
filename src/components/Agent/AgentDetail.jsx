import { useEffect, useState } from "react";
import { useParams } from "react-router";

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

  // Load agent
  const loadAgent = async () => {
    try {
      const data = await getAgent(id);
      setAgentData(data);
    } catch (err) {
      console.log(err);
    }
  };

  // Load all possible actions
  const loadActions = async () => {
    try {
      const data = await getActions();
      setAllActions(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadAgent();
    loadActions();
  }, [id]);

  const handleAssign = async (actionId) => {
    await assignAction(id, actionId);
    loadAgent(); // refresh
  };

  const handleRemove = async (actionId) => {
    await removeAction(id, actionId);
    loadAgent(); // refresh
  };

  if (!agentData) return <p>Loading...</p>;

  return (
    <main>
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
        {allActions.map((action) => (
          <li key={action.id}>
            {action.name} ({action.impact_level})
            <button onClick={() => handleAssign(action.id)}>
              Assign
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default AgentDetail;
