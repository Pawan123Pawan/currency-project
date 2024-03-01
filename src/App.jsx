import React, { PureComponent } from "react";
import Dashboard from "./component/Dashboard";
import "./App.css";
import { ContextApi } from "./component/ContextApi";

function App() {
  return (
    <ContextApi>
      <div className="main-container">
        <div className="container">
          <Dashboard />
        </div>
      </div>
    </ContextApi>
  );
}

export default App;
