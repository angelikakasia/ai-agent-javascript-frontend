import "./Marketing.css";

const Solutions = () => {
  return (
    <main className="marketing-page">
      <div className="marketing-container">

        <h1>Solutions</h1>

        <p>
          Suzana provides a structured way to model AI agent permissions
          before execution.
        </p>

        <h2>Structured Agent Creation</h2>
        <p>
          Agents belong to authenticated users and cannot be modified by others.
        </p>

        <h2>Predefined Action Library</h2>
        <ul>
          <li>Read Data</li>
          <li>Modify Records</li>
          <li>External API Call</li>
          <li>Deploy Model</li>
          <li>Delete Files</li>
        </ul>

        <h2>Permission-Based Authority</h2>
        <p>
          Authority is granted explicitly through permission assignments.
        </p>

        <h2>Automatic Impact Aggregation</h2>
        <p>
          Impact is grouped into Low, Medium, High, and Irreversible.
        </p>

        <h2>Secure Access Control</h2>
        <ul>
          <li>JWT authentication</li>
          <li>Owner-only modification</li>
          <li>Protected API endpoints</li>
        </ul>

      </div>
    </main>
  );
};

export default Solutions;
