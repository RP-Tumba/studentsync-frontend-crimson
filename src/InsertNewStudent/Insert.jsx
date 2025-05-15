import { useState } from "react";
import { studentService } from "../lib/api";
import "./Insert.css";
import akalogo from "../assets/akalogo.png";
export const Form = () => {
  const [student, setStudent] = useState({
    first_name: "",
    last_name: "",
    student_id: "",
    email: "",
    date_of_birth: "",
    contact_number: "",
    enrollment_date: "",
  });
  const [mesg, setMessage] = useState("");

  const handleInput = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const insert = await studentService.createStudent(student);
      if (insert.success) {
        setMessage(insert.message);
        setStudent({
          first_name: "",
          last_name: "",
          student_id: "",
          email: "",
          date_of_birth: "",
          contact_number: "",
          enrollment_date: "",
        });
      } else {
        setMessage(insert.message);
      }
    } catch (error) {
      setMessage(`Something went wrong while inserting student `);
      console.error(`This is error`, error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="newStudentForm">
          <div className="logotitle">
            <div className="photh3">
              <img src={akalogo} alt="this is logo" />
              <h3>STUDENTSYNC</h3>
            </div>
            <div className="title">Add New Student</div>
          </div>

          <div className="allinput">
            <div className="firstfour ">
              <div className="Fname">
                {" "}
                <p>First Name</p>
                <input
                  type="text"
                  name="first_name"
                  value={student.first_name}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="Fname">
                {" "}
                <p>Last Name</p>
                <input
                  type="text"
                  name="last_name"
                  value={student.last_name}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="dateofbirth">
                <p>Date of birth</p>
                <input
                  type="date"
                  name="date_of_birth"
                  value={student.date_of_birth}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="studentId">
                <p>Student Id</p>
                <input
                  type="text"
                  name="student_id"
                  value={student.student_id}
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
            <div className="last3">
              <div className="email">
                <p>Email</p>{" "}
                <input
                  type="email"
                  name="email"
                  value={student.email}
                  onChange={handleInput}
                  required
                />
              </div>
              <p></p>
              <div className="contactNumber">
                {" "}
                <p>Contact Number</p>
                <input
                  type="number"
                  name="contact_number"
                  value={student.contact_number}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="enrollmentDate">
                {" "}
                <p>Enrollment Date</p>{" "}
                <input
                  type="date"
                  name="enrollment_date"
                  value={student.enrollment_date}
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
            <br />
            <div className="allbut">
              <button type="submit" className="but1">
                {" "}
                Add
              </button>
              &nbsp;&nbsp;&nbsp;
              <button type="reset" className="but2">
                {" "}
                cancel
              </button>
            </div>
          </div>
          {mesg && <p>{mesg}</p>}
        </div>
      </form>
    </>
  );
};
