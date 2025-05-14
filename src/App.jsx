import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentList from "./pages/StudentList";
import Appp from "./pages/mobile.jsx"

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<StudentList />} />
          </Routes>
          <Appp/>
        </main>
      </div>
      
    </Router>
  );
};

export default Appp;
