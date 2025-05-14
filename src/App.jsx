import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentList from "./pages/StudentList";
import "./App.css";
import { HomePage } from "./pages/Home/Home";
import { HomePage } from "./pages/Home/Home";
import { Form } from "./InsertNewStudent/Insert";

const App = () => {
  
  return (
    <Router>
      <div className="app-container">
      {  <Navbar />}
        <main className="main-content">
          
            
            <Routes>
            <Route path="/studentsListstudentsList" element={<StudentList />} />
            <Route index element={ <HomePage />} />
           
            <Route path="/studentsList" element={<Form />} />
            <Route index element={ <HomePage />} />
           
          </Routes>
          
        </main> 
      </div>
    </Router>
    
  );
};

export default App;
