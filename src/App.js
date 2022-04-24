import "./App.css";
import Machine from "./Machine/Machine";
import Chips from "./Product/Chips";
import Sardines from "./Product/Sardines";
import Soda from "./Product/Soda";
import Navbar from "./Navbar/Navbar";
import { Route, Switch } from "react-router-dom";

function App() {
  return <div className="App">
    <Machine />
  </div>;
}

export default App;
