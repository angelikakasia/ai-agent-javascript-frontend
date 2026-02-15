const Company = () => {
  return (
    <main className="marketing-page">
      <section className="marketing-hero">
        <h1>About Suzana</h1>
        <p>
          Suzana – Agent Authority Manager – is a design-time security project
          focused on understanding what an AI agent is allowed to do
          before it executes any action.
        </p>
      </section>

      <section className="company-section">
        <h2>Founder</h2>
        <p>
          Suzana was created by Angelika,
          a cybersecurity student and engineer passionate about
          secure system design and permission control.
        </p>
        <p>
          While studying authentication systems, role-based access control,
          and database design, Angelika wanted to build a practical tool
          that demonstrates how authority and impact can be modeled clearly
          at the application level.
        </p>
      </section>

      <section className="company-section">
        <h2>Why Suzana Was Built</h2>
        <p>
          Modern software systems often grant permissions without clear visibility
          into their combined impact.
        </p>
        <p>
          Suzana was built to demonstrate how:
        </p>
        <ul>
          <li>Agents can be assigned predefined actions</li>
          <li>Permissions can be controlled and removed</li>
          <li>Impact levels can be categorized</li>
          <li>Authority can be summarized automatically</li>
        </ul>
        <p>
          The goal is clarity before execution.
        </p>
      </section>

      <section className="company-section">
        <h2>Core Principles</h2>
        <ul>
          <li>Least privilege access control</li>
          <li>Explicit permission assignment</li>
          <li>Impact-based classification</li>
          <li>Owner-only modification rights</li>
          <li>Secure authentication with JWT</li>
        </ul>
      </section>

      <section className="company-section">
        <h2>Project Scope</h2>
        <p>
          Suzana is a full-stack web application built with
          Flask, PostgreSQL, and React.
        </p>
        <p>
          It allows authenticated users to:
        </p>
        <ul>
          <li>Create agents</li>
          <li>Edit and delete agents</li>
          <li>Assign and remove actions</li>
          <li>Automatically calculate impact summaries</li>
          <li>View full authority details per agent</li>
        </ul>
        <p>
          Guest users cannot modify any data.
        </p>
      </section>
    </main>
  );
};

export default Company;
