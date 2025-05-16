import "../style/UpdateStudent.css";
import { useEffect, useState } from "react";
import man from "../assets/man.png";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmailIcon from "@mui/icons-material/Email";
import FlipCameraIosIcon from "@mui/icons-material/FlipCameraIos";
import { useParams } from "react-router-dom";
import { studentService } from "../lib/api";

const UpdateDiv = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({});

  useEffect(() => {
    if (id) {
      studentService.getStudentById(id).then((response) => {
        console.log(response);
        setStudent(response.data);
      });
    }
  }, [id]);
  console.log(id);

  const [updatedData, setUpdatedData] = useState({
    firstName: student?.firstName || "",
    lastName: student?.lastName || "",
    studentId: student?.studentId || "",
    email: student?.email || "",
    dateOfBirth: student?.dateOfBirth || "",
    enrollmentDate: student?.enrollmentDate || "",
    contactNumber: student?.contactNumber || "",
  });

  useEffect(() => {
    // If a student is passed in, update the form fields
    if (student) {
      setUpdatedData({
        firstName: student.firstName,
        lastName: student.lastName,
        studentId: student.studentId,
        email: student.email,
        dateOfBirth: student.dateOfBirth,
        enrollmentDate: student.enrollmentDate,
        contactNumber: student.contactNumber,
      });
    }
  }, [student]);

  // handleChange function to update the state when input fields change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // onUpdate(updatedData); // Pass the updated data to the parent
    await studentService.updateStudent(id, updatedData);
  };

  return (
    <>
      <div className="Container-edit">
        <form onSubmit={handleSubmit}>
          <div className="Details">
            <div className="avatar">
              <div>
                <img className="image" src={man} />
                <FlipCameraIosIcon className="Camera" />
              </div>
              <div className="students-profile-name">
                <p className="email">{student.email}</p>
              </div>
            </div>

            <div>
              <button className="edit-btn" type="submit">
                Edit
              </button>
            </div>
          </div>
          <div className="Form">
            <div className="allInput">
              <div className="right">
                <label>First Name</label> <br />
                <input
                  type="text"
                  name="firstName"
                  value={updatedData.firstName}
                  onChange={handleChange}
                  placeholder="  First Name"
                />
                <br />
                <label>Student id</label>
                <br />
                <input
                  type="text"
                  value={updatedData.studentId}
                  onChange={handleChange}
                  placeholder="   Student id"
                />
                <br />
                <label>Date of Birth</label> <br />
                <input
                  type="date"
                  value={updatedData.dateOfBirth}
                  onChange={handleChange}
                  placeholder="   Date of birth"
                />
                <br />
                <label>Enrollment Date</label>
                <br />
                <input
                  type="date"
                  name="enrollmentDate"
                  value={updatedData.enrollmentDate}
                  onChange={handleChange}
                  placeholder="   Enrollment Date"
                />
              </div>

              <div className="left">
                <label>Last Name</label> <br />
                <input
                  type="text"
                  name="lastName"
                  value={updatedData.lastName}
                  onChange={handleChange}
                  placeholder="   Last Name"
                />
                <br />
                <label>Email</label>
                <br />
                <input
                  type="Email"
                  value={updatedData.email}
                  onChange={handleChange}
                  placeholder="   Email"
                />
                <br />
                <label>Contact Number</label>
                <br />
                <input
                  type="text"
                  value={updatedData.contactNumber}
                  onChange={handleChange}
                  placeholder="    +250 784 439 432"
                />
              </div>
            </div>
          </div>

          <div className="lastItems">
            <div className="avatar">
              <div className="ovalEmail">
                <EmailIcon className="EmailCloro" />
              </div>
              <div>
                <p>
                  <b> {student.email}</b>
                </p>
                <p className="#">1 month ago</p>
              </div>
            </div>
            <button className="lastButton">
              <ArrowBackIcon /> Go back
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateDiv;
