import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Home.css";

export const See = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <h1 className="title" onClick={() => navigate("/")}>
        Hotel Epic
      </h1>
      <h2 className="subtitle">See</h2>

      <p>A gallery of past events will be here.</p>
    </React.Fragment>
  );
};
