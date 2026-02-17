import "./Marketing.css";

const Company = () => {
  return (
    <main className="marketing-page">
      <div className="marketing-container">

        <h1>About Suzana</h1>

        <p>
          Suzana – Agent Authority Manager – is a design-time security
          project focused on understanding what an AI agent is allowed
          to do before execution.
        </p>

        <p>
          It was created to demonstrate how authority and impact can
          be modeled clearly at the application level.
        </p>

        <h2>Why Suzana Was Built</h2>
        <ul>
          <li>To make permissions explicit</li>
          <li>To visualize cumulative authority</li>
          <li>To demonstrate least privilege in practice</li>
          <li>To show impact aggregation clearly</li>
        </ul>

        <h2>Core Principles</h2>
        <ul>
          <li>Least privilege access control</li>
          <li>Explicit permission assignment</li>
          <li>Impact-based classification</li>
          <li>Owner-only modification rights</li>
          <li>JWT-secured authentication</li>
        </ul>

        <h2>Technology Stack</h2>
        <ul>
          <li>Flask API</li>
          <li>PostgreSQL database</li>
          <li>React frontend</li>
          <li>JWT authentication</li>
        </ul>

      </div>
    </main>
  );
};

export default Company;
