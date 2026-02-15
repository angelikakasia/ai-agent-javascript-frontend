import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../services/authService";
import { UserContext } from "../../contexts/UserContext";
import "./Auth.css";

const SignInForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await signIn(formData);
      setUser(user);
      navigate("/");
    } catch {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Sign In</h1>

        {error && <p className="auth-error">{error}</p>}

        <form onSubmit={handleSubmit} autoComplete="off">

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="auth-btn">
            Sign In
          </button>

        </form>
      </div>
    </div>
  );
};

export default SignInForm;
