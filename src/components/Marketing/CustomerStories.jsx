const CustomerStories = () => {
  return (
    <main className="marketing-page">
      <section className="marketing-hero">
        <h1>Customer Stories & Use Cases</h1>
        <p>
          Organizations use Suzana to understand agent authority before deployment.
          Instead of discovering risk in production, they model it at design time.
        </p>
      </section>

      <section className="story-card">
        <h2>Why Customers Use Suzana</h2>
        <p>
          Teams adopt Suzana when building AI agents, automation systems,
          or internal tools that perform sensitive actions.
        </p>
        <ul>
          <li>To enforce least privilege from the start</li>
          <li>To prevent confused deputy scenarios</li>
          <li>To visualize cumulative authority exposure</li>
          <li>To justify access decisions during security reviews</li>
          <li>To simulate “what if” permission combinations safely</li>
        </ul>
      </section>

      <section className="story-card">
        <h2>What Actions Teams Assign — and Why</h2>
        <p>
          Each action represents a discrete authority capability.
          Teams assign only what an agent strictly needs.
        </p>
        <ul>
          <li>Read Data — for analytics or reporting agents</li>
          <li>Modify Records — for workflow automation</li>
          <li>Deploy Model — for ML pipeline execution</li>
          <li>Delete Files — for lifecycle management</li>
          <li>Call External API — for third-party integrations</li>
        </ul>
        <p>
          By assigning only required actions, teams maintain strict
          control over operational scope and reduce blast radius.
        </p>
      </section>

      <section className="story-card">
        <h2>How Risk Is Calculated</h2>
        <p>
          Every action has an impact level. Each level has a fixed weight.
        </p>

        <ul>
          <li>Low → 1 point</li>
          <li>Medium → 3 points</li>
          <li>High → 6 points</li>
          <li>Irreversible → 10 points</li>
        </ul>

        <p>
          The Risk Score is calculated by multiplying the number of actions
          in each category by its weight and adding them together.
        </p>

        <p>
          Example:  
          2 Low (2 × 1 = 2) + 1 High (1 × 6 = 6)  
          Final Risk Score = 8
        </p>

        <p>
          As more high-impact or irreversible permissions are assigned,
          total authority exposure increases proportionally.
        </p>
      </section>
    </main>
  );
};

export default CustomerStories;
