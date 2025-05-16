import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentList from "./pages/StudentList";
import "./App.css";
import UpdateDiv from "./pages/UpdateDiv";
import { HomePage } from "./pages/Home/Home";
import { Form } from "./InsertNewStudent/Insert";
import Footer from "./components/responsiveness/Footer";
import { createContext, useState } from "react";

export const Context = createContext()

const App = () => {
  const [displayAddStudent,setDisplayAddStudent] = useState(false)
  return (<>
    <Context value={{displayAddStudent,setDisplayAddStudent}}>
      <Router>
        <div className="app-container">
          {<Navbar />}
          <main className="main-content">
            
            <Routes>
              <Route path="/UpdateDiv/:id/details" element={<UpdateDiv />} />
              <Route path="/studentsList" element={<StudentList />} /> 
              <Route index element={<HomePage />} />

              {/* <Route path="/newStudent" element={<Form />} /> */}
              <Route index element={<HomePage />} />
            </Routes>
            <Form />
          </main>
      
    </div>
      
      </Router>
      <Footer />
    </Context>
    </>
  );
};

export default App;
