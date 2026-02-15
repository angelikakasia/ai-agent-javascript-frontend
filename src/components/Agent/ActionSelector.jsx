const ActionSelector = ({ actions = [], selectedActions = [], onToggle }) => {
  return (
    <div>
      <h3>Allowed Actions</h3>
      {actions.map((action) => (
        <label key={action} style={{ display: "block", marginBottom: "8px" }}>
          <input
            type="checkbox"
            checked={selectedActions.includes(action)}
            onChange={() => onToggle(action)}
          />
          {action}
        </label>
      ))}
    </div>
  );
};

export default ActionSelector;
