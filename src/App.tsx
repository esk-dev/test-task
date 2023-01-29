import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Layout />
    </div>
  );
}

export default App;
