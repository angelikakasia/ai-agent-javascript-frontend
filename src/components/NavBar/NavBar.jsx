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
    <nav className="navbar">
      {/* LEFT SIDE */}
      <div className="nav-left">
        <Link to="/" className="logo">
          SUZANA
        </Link>

        {!user && (
          <div className="nav-links">
            <Link to="/platform">Platform</Link>
            <Link to="/customer-stories">Customer Stories</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/company">Company</Link>
          </div>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="nav-right">
        {user ? (
          <>
            <span className="welcome">{user.email}</span>
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
