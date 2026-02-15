import { useContext } from "react";
import { Routes, Route } from "react-router";

import NavBar from "./components/NavBar/NavBar";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import SignInForm from "./components/SignInForm/SignInForm";
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import AgentDetail from "./components/Agent/AgentDetail";

import { UserContext } from "./contexts/UserContext";
import Platform from "./components/Marketing/Platform.jsx";
import CustomerStories from "./components/Marketing/CustomerStories.jsx";
import Solutions from "./components/Marketing/Solutions.jsx";
import Company from "./components/Marketing/Company.jsx";

import "./App.css";
const App = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="app">
      <NavBar />

      <div className="page">
        <Routes>
          <Route path="/" element={user ? <Dashboard /> : <Landing />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/agents/:id" element={<AgentDetail />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/customer-stories" element={<CustomerStories />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/company" element={<Company />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
