const CustomerStories = () => {
  return (
    <main className="marketing-page">
      <section className="marketing-hero">
        <h1>Use Case Scenarios</h1>
        <p>
          Suzana demonstrates how permission modeling and impact analysis
          can help teams understand authority before execution.
        </p>
      </section>

      <section className="story-card">
        <h2>Academic AI Research Project</h2>
        <p>
          A university research team needed to simulate how AI agents
          could interact with predefined system actions.
        </p>
        <p>
          Using Suzana, they created agents, assigned actions,
          and observed how impact levels changed automatically
          as permissions were added or removed.
        </p>
      </section>

      <section className="story-card">
        <h2>Internal Security Training Demo</h2>
        <p>
          A security training group used Suzana to explain
          least-privilege principles and many-to-many relationships
          between agents and actions.
        </p>
        <p>
          The automatic impact summary helped visualize how
          combining low-impact permissions can still increase
          overall authority exposure.
        </p>
      </section>

      <section className="story-card">
        <h2>Prototype Access Control System</h2>
        <p>
          A development team explored how to structure
          authentication, authorization, and permission management
          in a full-stack application.
        </p>
        <p>
          Suzana provided a working example of:
        </p>
        <ul>
          <li>JWT-based authentication</li>
          <li>Owner-only resource modification</li>
          <li>Action assignment through a permissions table</li>
          <li>Automatic impact aggregation</li>
        </ul>
      </section>
    </main>
  );
};

export default CustomerStories;
