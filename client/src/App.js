import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Page/Home";
import ConnectorForm from "./Page/ConnectorForm";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create_connector/:connectorType/:connectorName" element={<ConnectorForm />} />
        </Routes>
    </div>
  );
}

export default App;
