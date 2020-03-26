import React from "react";
import "./App.css";
import Presenter from "./components/presenter";
import "rsuite/lib/styles/index.less";
import { useSelector } from "react-redux";
import { Loader } from "rsuite";

function App() {
  const isBusy = useSelector(state => state.isBusy);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Alibaba prodcut viewer</h1>
        <Presenter />
      </header>
      <Loader
        className={isBusy ? "show" : "hide"}
        backdrop
        size="md"
        vertical
        inverse
        center
        content="Fetching data..."
      />
    </div>
  );
}

export default App;
