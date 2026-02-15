const ImpactSummary = ({ impactSummary }) => {
  if (!impactSummary) return null;

  return (
    <div className="agent-card">
      <h2>Impact Summary</h2>

      <div className="impact-grid">
        <ImpactCard label="Low" value={impactSummary.low} variant="low" />
        <ImpactCard label="Medium" value={impactSummary.medium} variant="medium" />
        <ImpactCard label="High" value={impactSummary.high} variant="high" />
        <ImpactCard label="Irreversible" value={impactSummary.irreversible} variant="critical" />
      </div>
    </div>
  );
};

const ImpactCard = ({ label, value, variant }) => {
  return (
    <div className={`impact-card ${variant}`}>
      <span className="impact-label">{label}</span>
      <span className="impact-value">{value}</span>
    </div>
  );
};

export default ImpactSummary;
