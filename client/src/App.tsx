import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let count = 0;
  let inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsSasdasdkasdjkDx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
