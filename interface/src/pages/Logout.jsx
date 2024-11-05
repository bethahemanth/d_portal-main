import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Logout = () => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    logout(); // Clear user context data
    navigate("/login"); // Redirect to login page
  }, [logout, navigate]);

  return null; // This component doesn't render anything visible
};

export default Logout;
