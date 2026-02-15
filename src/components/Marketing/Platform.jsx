const Platform = () => {
  return (
    <main className="page">
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "80px 8%" }}>

        <h1>Platform</h1>

        <p style={{ marginTop: "20px", fontSize: "18px", color: "#555" }}>
          Suzana is a design-time authority modeling platform for AI agents.
          It helps organizations create secure agents based on explicit permissions,
          least privilege principles, and impact visibility before execution.
        </p>

        <section style={{ marginTop: "60px" }}>
          <h2>How It Works</h2>
          <ul style={{ marginTop: "20px", lineHeight: "1.8", color: "#555" }}>
            <li>Create AI agents with clearly defined identity and purpose.</li>
            <li>Assign only predefined, controlled actions.</li>
            <li>Automatically calculate impact levels (Low, Medium, High, Irreversible).</li>
            <li>Preview authority scope before any execution occurs.</li>
            <li>Prevent implicit or hidden permissions.</li>
          </ul>
        </section>

        <section style={{ marginTop: "60px" }}>
          <h2>Security Principles</h2>
          <ul style={{ marginTop: "20px", lineHeight: "1.8", color: "#555" }}>
            <li>Least privilege by default.</li>
            <li>Explicit permission assignment.</li>
            <li>Design-time impact visibility.</li>
            <li>Audit-ready authority configuration.</li>
            <li>No hidden privilege escalation.</li>
          </ul>
        </section>

        <section style={{ marginTop: "60px" }}>
          <h2>Why It Matters</h2>
          <p style={{ marginTop: "20px", color: "#555", lineHeight: "1.8" }}>
            AI agents operate through permissions. If authority is not clearly defined,
            risk becomes invisible. Suzana makes authority visible before deployment,
            helping teams reduce blast radius, enforce compliance policies, and build
            secure agent systems from the start.
          </p>
        </section>

      </div>
    </main>
  );
};

export default Platform;
