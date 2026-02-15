import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import SignInForm from "./components/SignInForm/SignInForm";
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import AgentDetail from "./components/Agent/AgentDetail";

import Platform from "./components/Marketing/Platform";
import CustomerStories from "./components/Marketing/CustomerStories";
import Solutions from "./components/Marketing/Solutions";
import Company from "./components/Marketing/Company";

import { UserContext } from "./contexts/UserContext";

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
