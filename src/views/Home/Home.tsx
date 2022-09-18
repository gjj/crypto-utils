import React from "react";
import { Link } from "react-router-dom";
import Package from "../../../package.json";
import logo from "../Landing/logo.svg";

export const HomePage: React.FunctionComponent = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/views/Home/Home.tsx</code> and save to reload, or try out a <Link to="/">route</Link>
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
