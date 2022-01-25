import "./styles.css";
import { Routes, Route } from "react-router-dom";

// components
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

// pages
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import GetHelp from "./Pages/GetHelp";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="mainContent">
          <Routes>
            <Route path="/" element={<Home title="Home" />} />
            <Route
              path="/contact"
              element={<Contact title="Contact" date="14-01-2022" />}
            />
            <Route path="/get-help" element={<GetHelp title="Get Help" />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
