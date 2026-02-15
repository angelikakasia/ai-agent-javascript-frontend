import { useContext } from "react";
import { Link, useNavigate } from "react-router";
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
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          SUZANA
        </Link>
      </div>

      <div className="navbar-center">
        {!user && (
          <>
            <Link to="/platform">Platform</Link>
            <Link to="/customer-stories">Customer Stories</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/company">Company</Link>
          </>
        )}
      </div>

      <div className="navbar-right">
        {user ? (
          <>
            <span className="welcome">Welcome, {user.email}</span>
            <Link to="/">Dashboard</Link>
            <button className="signout-btn" onClick={handleSignOut}>
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/sign-in">Sign In</Link>
            <Link to="/sign-up" className="signup-btn">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
