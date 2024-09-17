import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Page/Home";
import TypesList from "./Page/TypesList";
import ConnectorForm from "./Page/ConnectorForm";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create_connector" element={<TypesList />} />
          <Route path="/create_connector/:connectorType" element={<ConnectorForm />} />
        </Routes>
    </div>
  );
}

export default App;
