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
    await studentService.updateStudent(id, updatedData).then(res=>alert(res.message)).catch(err=>alert(err.message));
  };

  return (
    <>
     
      <div className="Container-edit">
        <div className="box-update-green"></div>
        <center> <div className="update-profile-account"><img src={man}  /><FlipCameraIosIcon className="FlipCameraIosIcon" /></div></center>
        <form onSubmit={handleSubmit}>
        
          <div className="Form">
            <div className="details">
                  <button className="edit-btn" type="submit">
                    Edit
                   </button>
          

              </div>
            <div className="allInput">

                     <div className="right">
                              <label>First Name</label> <br />
                              <input
                                type="text"
                                name="firstName"
                                value={updatedData.firstName}
                                onChange={handleChange}
                                placeholder="  First Name" />
                                             
                                <br />
                                <label>Student id</label>
                                <br />
                                <input
                                type="text"
                                value={updatedData.studentId}
                                onChange={handleChange}
                                placeholder="   Student id" />
                
                                 <br />
                                 <label>Date of Birth</label> <br />

                                <input
                                type="date"
                                value={updatedData.dateOfBirth}
                                onChange={handleChange}
                                placeholder="   Date of birth"  />
               
                                 <br />
                                 <label>Enrollment Date</label>
                                 <br />
                                 <input
                                 type="date"
                                 name="enrollmentDate"
                                 value={updatedData.enrollmentDate}
                                 onChange={handleChange}
                                 placeholder="   Enrollment Date" />
                
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
                    {/* all the button details information */}
             
  
         
          </div>
          
         </form>
         <div className="detail-update-emails">
            <h1>My email address</h1> <br />
              <div className="detail-update-email-icon">
              <EmailIcon className="em-icon" />
                <p>{updatedData.email}</p>
                
              
                 </div>
                 <button className="update-go-back"><ArrowBackIcon className="arrow" />go back</button> <br />
            </div>
          </div>
      
      
    </>
  );
};

export default UpdateDiv;
