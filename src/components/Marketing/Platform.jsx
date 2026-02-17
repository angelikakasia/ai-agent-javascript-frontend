import "./Marketing.css";

const Platform = () => {
  return (
    <main className="marketing-page">
      <div className="marketing-container">

        <h1>Platform</h1>

        <p>
          Suzana is a design-time authority modeling platform for AI agents.
          It enables organizations to create secure agents using explicit
          permission assignment, least privilege principles, and impact
          visibility before execution.
        </p>

        <h2>How It Works</h2>
        <ul>
          <li>Create agents with clearly defined identity and purpose</li>
          <li>Assign only predefined controlled actions</li>
          <li>Automatically calculate impact levels</li>
          <li>Preview authority scope before execution</li>
          <li>Prevent hidden or implicit permissions</li>
        </ul>

        <h2>Security Principles</h2>
        <ul>
          <li>Least privilege by default</li>
          <li>Explicit permission assignment</li>
          <li>Design-time impact visibility</li>
          <li>No hidden privilege escalation</li>
          <li>Audit-ready authority modeling</li>
        </ul>

        <h2>Why It Matters</h2>
        <p>
          AI agents operate through permissions. If authority is unclear,
          risk becomes invisible. Suzana makes authority measurable before
          deployment, helping teams reduce blast radius and enforce secure design.
        </p>

      </div>
    </main>
  );
};

export default Platform;
