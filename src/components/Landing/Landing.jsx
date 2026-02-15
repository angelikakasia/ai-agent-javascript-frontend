import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing">

      <section className="hero">
        <div className="hero-content">
          <h1>
            Create your own secure agent.
            Understand its authority before execution.
          </h1>

          <p>
            Suzana is a design-time authority modeling platform.
            Create AI agents, assign actions, and visualize impact
            before deployment.
          </p>

          <div className="hero-buttons">
            <Link to="/sign-up" className="btn-primary">
              Get Started
            </Link>
            <Link to="/sign-in" className="btn-secondary">
              Sign In
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <h2>What This App Does</h2>
          <ul>
            <li>Create AI agents</li>
            <li>Assign predefined actions</li>
            <li>Automatically calculate impact levels</li>
            <li>Preview authority before execution</li>
          </ul>
        </div>
      </section>

      <section className="section light">
        <div className="section-content">
          <h2>Built for Design-Time Security</h2>
          <p>
            Agents operate only through explicitly assigned permissions.
            Impact is grouped by severity: Low, Medium, High, Irreversible.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Landing;
