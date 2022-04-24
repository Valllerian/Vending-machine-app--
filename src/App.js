import "./App.css";
import Machine from "./Machine/Machine";
import Chips from "./Product/Chips";
import Sardines from "./Product/Sardines";
import Soda from "./Product/Soda";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Machine />} />
          <Route exact path="/soda" element={<Soda />} />
          <Route exact path="/sardines" element={<Sardines />} />
          <Route exact path="/chips" element={<Chips />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
