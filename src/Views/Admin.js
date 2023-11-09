import React, { useState } from "react";
import { Authentication } from "../components/Authentication";
import { AdminAccess } from "../components/AdminAccess";

export const Admin = () => {
  const [authenticated, setAuthenticated] = useState(true);
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState(null);

  const handleOAuth = (e) => {
    e.preventDefault();
    const hashedPassword = window.btoa(password);

    setAuthenticated(hashedPassword === "RGV4dGVyLjg1MTAw" ? true : false);
    setFeedback(hashedPassword !== "RGV4dGVyLjg1MTAw" && "Password Incorrect");
  };

  if (!authenticated) {
    return (
      <Authentication
        password={{ get: password, set: setPassword }}
        feedback={{ get: feedback, set: setFeedback }}
        handleOAuth={handleOAuth}
      />
    );
  }

  return <AdminAccess />;
};
