import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentList from "./pages/StudentList";
import "./App.css";
import UpdateDiv from "./pages/UpdateDiv";
import { HomePage } from "./pages/Home/Home";
import { Form } from "./InsertNewStudent/Insert";
import Footer from "./components/responsiveness/Footer";


const App = () => {
  return (
    <Router>
      <div className="app-container">
        {<Navbar />}
        <main className="main-content">
          
          <Routes>
             <Route path="/UpdateDiv/:id/details" element={<UpdateDiv />} />
            <Route path="/studentsList" element={<StudentList />} /> 
            <Route index element={<HomePage />} />

            <Route path="/newStudent" element={<Form />} />
            <Route index element={<HomePage />} />
          </Routes>
          <Footer />
        </main>
     
  </div>
    
    </Router>
  );
};

export default App;
