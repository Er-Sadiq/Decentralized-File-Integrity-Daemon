import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, } from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";


function App() {
  
  const [loggedIn, setLoggedIn] = useState(false);



  const handleLogin = () => {
    setLoggedIn(true);

  };

  const handleLogout = () => {
    setLoggedIn(false);

  };
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route  path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
  );
}

export default App;
