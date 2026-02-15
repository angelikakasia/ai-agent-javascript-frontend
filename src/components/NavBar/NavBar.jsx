import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import "./NavBar.css";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <header className="navbar">

      {/* LEFT */}
      <div className="navbar-left">
        <Link to="/" className="logo">
          SUZANA
        </Link>

        <nav className="nav-links">
          <Link to="/platform">Platform</Link>
          <Link to="/customer-stories">Use Cases</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/company">Company</Link>
        </nav>
      </div>

      {/* RIGHT */}
      <div className="navbar-right">
        {user ? (
          <>
            <span className="user-email">{user.email}</span>
            <Link to="/" className="dashboard-link">
              Dashboard
            </Link>
            <button onClick={handleSignOut} className="signout-btn">
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/sign-in" className="nav-link">
              Sign In
            </Link>
            <Link to="/sign-up" className="signup-btn">
              Sign Up
            </Link>
          </>
        )}
      </div>

    </header>
  );
};

export default NavBar;
