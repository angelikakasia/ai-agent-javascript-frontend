const Solutions = () => {
  return (
    <main className="marketing-page">

      <section className="marketing-hero">
        <h1>Solutions</h1>
        <p>
          Suzana – Agent Authority Manager – provides a structured way to
          model AI agent permissions before execution.
        </p>
      </section>

      <section className="solution-section">
        <h2>Structured Agent Creation</h2>
        <p>
          Users can create AI agents with defined names and descriptions.
          Each agent belongs to a specific authenticated user and cannot
          be modified by others.
        </p>
        <p>
          This enforces ownership boundaries and prevents unauthorized edits.
        </p>
      </section>

      <section className="solution-section">
        <h2>Predefined Action Library</h2>
        <p>
          Actions are seeded in advance and categorized by impact level:
          Low, Medium, High, and Irreversible.
        </p>

        <ul>
          <li>Read database</li>
          <li>Modify records</li>
          <li>External API call</li>
          <li>Deploy model</li>
          <li>Delete files</li>
        </ul>

        <p>
          This ensures consistent classification of risk across all agents.
        </p>
      </section>

      <section className="solution-section">
        <h2>Permission-Based Authority Model</h2>
        <p>
          Agents do not have built-in power. Authority is granted explicitly
          through permission assignments.
        </p>
        <p>
          Users can assign or remove actions from an agent at any time,
          creating a controlled many-to-many relationship between agents and actions.
        </p>
      </section>

      <section className="solution-section">
        <h2>Automatic Impact Aggregation</h2>
        <p>
          When actions are assigned, the system automatically calculates
          the agent’s impact summary.
        </p>

        <p>
          Impact is grouped by severity level:
        </p>

        <ul>
          <li>Low impact actions</li>
          <li>Medium impact actions</li>
          <li>High impact actions</li>
          <li>Irreversible impact actions</li>
        </ul>

        <p>
          This provides immediate visibility into potential authority exposure.
        </p>
      </section>

      <section className="solution-section">
        <h2>Secure Access Control</h2>
        <ul>
          <li>JWT-based authentication</li>
          <li>Owner-only edit and delete permissions</li>
          <li>No guest write access</li>
          <li>Protected API endpoints</li>
        </ul>

        <p>
          Only authenticated users can create, modify, or delete agents.
          Guest users can view marketing pages but cannot change any data.
        </p>
      </section>

      <section className="solution-section">
        <h2>Design-Time Security Demonstration</h2>
        <p>
          This project demonstrates how authority modeling can be applied
          before execution.
        </p>
        <p>
          Instead of reacting to incidents, the system focuses on
          understanding permissions and impact during development.
        </p>
      </section>

    </main>
  );
};

export default Solutions;
