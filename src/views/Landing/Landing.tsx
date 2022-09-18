import React from "react";
import { Link } from "react-router-dom";
import Package from "../../../package.json";
import logo from "./logo.svg";

export const LandingPage: React.FunctionComponent = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/views/Landing/Landing.tsx</code> and save to reload, or try out a{" "}
            <Link to="/home">route</Link>
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <p style={{ fontSize: "10pt" }}>
            Build v{Package.version}-{process.env.REACT_APP_COMMIT_REF}
          </p>
        </header>
      </div>
    </>
  );
};
