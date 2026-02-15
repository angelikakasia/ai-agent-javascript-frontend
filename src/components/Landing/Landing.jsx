import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <main className="marketing-page">
      
      <section className="marketing-hero">
        <div className="hero-left">
          <h1>
            Create your own secure agent.
            <br />
            Understand its authority before execution.
          </h1>

          <p>
            Suzana – Agent Authority Manager – allows developers to
            create AI agents, assign actions, and automatically see
            the impact of those permissions before deployment.
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

        <div className="hero-right">
          <img src="/suzana.png" alt="Suzana preview" />
        </div>
      </section>

      <section className="preview-section">
        <h2>What This App Does</h2>
        <ul>
          <li>Create AI agents</li>
          <li>Assign predefined actions</li>
          <li>Automatically calculate impact level</li>
          <li>View authority summary before execution</li>
        </ul>
      </section>

      <section className="preview-section">
        <h2>Built For Design-Time Security</h2>
        <p>
          This project demonstrates a permission-based authority model
          where agents only act through explicitly assigned actions.
          Impact is grouped by severity: Low, Medium, High, and Irreversible.
        </p>
      </section>

    </main>
  );
};

export default Landing;
