import "./Marketing.css";

const CustomerStories = () => {
  return (
    <main className="marketing-page">
      <div className="marketing-container">

        <h1>Customer Stories & Use Cases</h1>

        <p>
          Teams use Suzana to model agent authority before deployment.
          Instead of discovering permission risk in production,
          they quantify exposure at design time.
        </p>

        <h2>Why Teams Adopt Suzana</h2>

        <p>
          Security engineers, AI developers, and automation teams rely on Suzana
          when building systems that execute sensitive actions.
        </p>

        <ul>
          <li>Enforce least privilege from the beginning</li>
          <li>Prevent confused deputy scenarios</li>
          <li>Make authority visible before execution</li>
          <li>Quantify cumulative blast radius</li>
          <li>Test “what-if” permission combinations safely</li>
        </ul>

        <h2>What Actions Are Assigned — and Why</h2>

        <p>
          Every action represents a discrete capability. Agents receive only the
          permissions strictly required for their intended role.
        </p>

        <ul>
          <li>Read Data — analytics, monitoring, reporting</li>
          <li>Modify Records — workflow automation or updates</li>
          <li>Deploy Model — ML deployment pipelines</li>
          <li>Delete Files — lifecycle or cleanup operations</li>
          <li>Call External API — third-party integrations</li>
        </ul>

        <p>
          By restricting agents to explicit capabilities, teams maintain
          controlled operational boundaries and reduce unnecessary authority.
        </p>

        <h2>How Risk Score Is Calculated</h2>

        <p>
          Each action is classified by impact level. Every level has a fixed weight:
        </p>

        <ul>
          <li>Low → 1 point</li>
          <li>Medium → 3 points</li>
          <li>High → 6 points</li>
          <li>Irreversible → 10 points</li>
        </ul>

        <p>
          The Risk Score equals the sum of:
        </p>

        <p>
          (Low × 1) + (Medium × 3) + (High × 6) + (Irreversible × 10)
        </p>

        <p>
          As higher-impact permissions accumulate, the overall authority exposure
          increases proportionally. This provides immediate visibility into the
          blast radius of a given agent configuration.
        </p>

      </div>
    </main>
  );
};

export default CustomerStories;
