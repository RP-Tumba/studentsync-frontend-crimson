import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentList from "./pages/StudentList";
import "./App.css";
import { Form } from "./InsertNewStudent/Insert";


const App = () => {
  return (
    <Router>
      {/* <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/" element={<></>} />
          </Routes>
        </main>
      </div> */}
      <Form/>
    
    </Router>

  );
};

export default App;
