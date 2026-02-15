const ActionSelector = ({
  actions = [],
  selectedActions = [],
  onToggle
}) => {
  return (
    <div className="agent-card">
      <h2>Allowed Actions</h2>

      {actions.length === 0 ? (
        <p className="muted">No actions available.</p>
      ) : (
        <ul className="action-list">
          {actions.map((action) => (
            <li key={action} className="action-item">
              <label className="action-label">
                <input
                  type="checkbox"
                  checked={selectedActions.includes(action)}
                  onChange={() => onToggle(action)}
                />
                <span>{action}</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ActionSelector;
