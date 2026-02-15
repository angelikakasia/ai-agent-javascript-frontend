const ImpactSummary = ({ impactSummary }) => {
  if (!impactSummary) return null;

  return (
    <div
      style={{
        marginTop: "30px",
        background: "rgba(255,255,255,0.08)",
        padding: "25px",
        borderRadius: "12px"
      }}
    >
      <h2>Impact Summary</h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", marginTop: "15px" }}>
        <ImpactCard label="Low" value={impactSummary.low} color="#4caf50" />
        <ImpactCard label="Medium" value={impactSummary.medium} color="#ff9800" />
        <ImpactCard label="High" value={impactSummary.high} color="#f44336" />
        <ImpactCard label="Irreversible" value={impactSummary.irreversible} color="#b71c1c" />
      </div>
    </div>
  );
};

const ImpactCard = ({ label, value, color }) => {
  return (
    <div
      style={{
        background: "rgba(0,0,0,0.3)",
        padding: "15px",
        borderRadius: "8px",
        borderLeft: `5px solid ${color}`
      }}
    >
      <strong>{label}</strong>
      <p style={{ margin: "8px 0 0 0", fontSize: "20px" }}>{value}</p>
    </div>
  );
};

export default ImpactSummary;
