import "./Marketing.css";

const CustomerStories = () => {
  return (
    <main className="marketing-page">
      <div className="marketing-container">

        <h1>Customer Stories & Use Cases</h1>

        <p>
          Organizations use Suzana to understand agent authority before deployment.
          Instead of discovering risk in production, they model exposure at design time.
        </p>

        <h2>Why Teams Use Suzana</h2>

        <p>
          Security teams, AI engineers, and automation developers adopt Suzana
          when building systems that perform sensitive operations.
        </p>

        <ul>
          <li>Enforce least privilege from the start</li>
          <li>Prevent confused deputy scenarios</li>
          <li>Visualize cumulative authority exposure</li>
          <li>Justify access decisions during reviews</li>
          <li>Simulate permission combinations safely</li>
        </ul>

        <h2>What Actions Teams Assign — and Why</h2>

        <p>
          Each action represents a discrete authority capability. Teams assign
          only what an agent strictly requires to perform its function.
        </p>

        <ul>
          <li>Read Data — for analytics and reporting agents</li>
          <li>Modify Records — for workflow automation</li>
          <li>Deploy Model — for ML pipeline execution</li>
          <li>Delete Files — for lifecycle management</li>
          <li>Call External API — for third-party integrations</li>
        </ul>

        <p>
          By assigning only necessary actions, teams reduce blast radius
          and maintain tight operational boundaries.
        </p>

        <h2>How Risk Score Is Calculated</h2>

        <p>
          Every action is categorized by impact level. Each level has a fixed weight:
        </p>

        <ul>
          <li>Low → 1 point</li>
          <li>Medium → 3 points</li>
          <li>High → 6 points</li>
          <li>Irreversible → 10 points</li>
        </ul>

        <p>
          The Risk Score is calculated by multiplying the number of assigned
          actions in each category by its weight and summing the results.
        </p>

        <p>
          Example:
          <br />
          2 Low (2 × 1 = 2)  
          + 1 High (1 × 6 = 6)  
          = Risk Score of 8
        </p>

        <p>
          As higher-impact or irreversible permissions accumulate,
          total authority exposure increases proportionally.
        </p>

      </div>
    </main>
  );
};

export default CustomerStories;
