import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentList from "./pages/StudentList";
import "./App.css";
import { HomePage } from "./pages/Home/Home";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <HomePage />
        {/* <main className="main-content">
          <Routes>
            <Route path="/" element={<StudentList />} />
          </Routes>
        </main> */}
      </div>
    </Router>
  );
};

export default App;
