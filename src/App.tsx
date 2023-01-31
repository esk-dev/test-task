import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import FolderViewProvider from "./store/FolderViewProvider";

function App() {
  return (
    <FolderViewProvider>
      {
        <div className="App">
          <Layout />
        </div>
      }
    </FolderViewProvider>
  );
}

export default App;
