import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <main className="landing">

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">

          <div className="hero-text">
            <h1>
              Create your own secure agent.
              <br />
              Understand its authority before execution.
            </h1>

            <p>
              Suzana is a design-time authority modeling platform.
              Create AI agents, assign actions, and visualize their
              full impact before deployment.
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

          <div className="hero-image">
            <img src="/suzana.png" alt="Suzana preview" />
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="section">
        <div className="container">

          <h2>What This App Does</h2>

          <ul className="feature-list">
            <li>Create AI agents</li>
            <li>Assign predefined actions</li>
            <li>Automatically calculate impact levels</li>
            <li>Preview authority before execution</li>
          </ul>

        </div>
      </section>

      {/* SECURITY SECTION */}
      <section className="section light">
        <div className="container">

          <h2>Built For Design-Time Security</h2>

          <p>
            Suzana models authority before runtime. Agents operate only
            through explicitly assigned permissions. Impact is grouped
            by severity: Low, Medium, High, and Irreversible.
          </p>

        </div>
      </section>

    </main>
  );
};

export default Landing;
