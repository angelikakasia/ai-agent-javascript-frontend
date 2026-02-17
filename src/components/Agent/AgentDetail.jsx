import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getAgent,
  updateAgent,
  assignAction,
  removeAction,
  getActions,
  deleteAgent
} from "../../services/agentService";

const AgentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [agentData, setAgentData] = useState(null);
  const [allActions, setAllActions] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const loadData = async () => {
    try {
      const agent = await getAgent(id);
      const actions = await getActions();

      setAgentData(agent);
      setAllActions(actions);
      setName(agent.agent.name);
      setDescription(agent.agent.description);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadData();
  }, [id]);

  const handleUpdate = async () => {
    await updateAgent(id, { name, description });
    setEditMode(false);
    loadData();
  };

  const handleDelete = async () => {
    try {
      await deleteAgent(id);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  if (!agentData) {
    return (
      <div className="dashboard-page">
        <div className="dashboard-container">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">

        {/* AGENT HEADER */}
        <div className="agent-card">
          {editMode ? (
            <>
              <input
                className="agent-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="agent-input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button className="primary-btn" onClick={handleUpdate}>
                Save
              </button>
            </>
          ) : (
            <>
              <h1>{agentData.agent.name}</h1>
              <p className="muted">{agentData.agent.description}</p>

              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  className="primary-btn"
                  onClick={() => setEditMode(true)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>

        {/* IMPACT */}
        <div className="agent-card">
          <h2>Impact Summary</h2>
          <ul className="impact-list">
            <li>Low: {agentData.impact_summary.low}</li>
            <li>Medium: {agentData.impact_summary.medium}</li>
            <li>High: {agentData.impact_summary.high}</li>
            <li>Irreversible: {agentData.impact_summary.irreversible}</li>
          </ul>

          <h3>Risk Score</h3>
          <p className="risk-score">{agentData.risk_score}</p>
        </div>

        {/* ASSIGNED ACTIONS */}
        <div className="agent-card">
          <h2>Assigned Actions</h2>

          {agentData.actions.length === 0 ? (
            <p className="muted">No actions assigned.</p>
          ) : (
            <ul className="agent-list">
              {agentData.actions.map((action) => (
                <li key={action.id}>
                  {action.name}
                  <button
                    className="delete-btn"
                    onClick={() =>
                      removeAction(id, action.id).then(loadData)
                    }
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* AVAILABLE ACTIONS */}
        <div className="agent-card">
          <h2>Available Actions</h2>

          <ul className="agent-list">
            {allActions
              .filter(
                (a) => !agentData.actions.some((x) => x.id === a.id)
              )
              .map((action) => (
                <li key={action.id}>
                  {action.name}
                  <button
                    className="primary-btn"
                    onClick={() =>
                      assignAction(id, action.id).then(loadData)
                    }
                  >
                    Assign
                  </button>
                </li>
              ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default AgentDetail;
