import React, { useContext, useEffect, useState } from "react";
import useStudentStore from "../store/studentStore";
import UpdateDiv from "../pages/UpdateDiv"; // Import UpdateDiv to display the form
import { Link } from "react-router-dom";
import "../style/StudentPage.css";
import "../index.css";
import { Context } from "../App";
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import VisionSection from "../components/responsiveness/VisionSection";
import GallerySection from "../components/responsiveness/GallerySection";
import BannerSection from "../components/responsiveness/BannerSection"
import student4 from '../images/student4.jpg'


const StudentList = () => {

  let {displayAddStudent,setDisplayAddStudent} = useContext(Context)

  const { students, fetchStudents,deleteStudent, loading,updateStudent, error } = useStudentStore();

  const [search, setSearch] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);
 
   const handleDelete = async (id) => {
    const confirm = window.confirm('Are you sure you want to delete this student?');
    if (!confirm) return;

    const result = await deleteStudent(id);
    if (!result.success) {
      alert(result.message);
    }
  };

  const handleUpdate = async (updatedData) => {
    const result = await updateStudent(selectedStudent.studentId, updatedData);
    if (result.success) {
      setIsEditing(false);
      setSelectedStudent(null);
    } else {
      alert(result.message);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setSelectedStudent(null);
  };

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="page-wrapper">
        <main className="main-content">
          <div className="header-section">
            <h1>All students</h1>
           {/* <Link to = "/newStudent"> <button className="add-button" onClick={()=>setDisplayAddStudent(!displayAddStudent)}>+ Add student</button></Link> */}
           <button className="add-button" onClick={()=>{
            setDisplayAddStudent(!displayAddStudent);console.log(displayAddStudent)}}>+ Add student</button>
          </div>

          <input
            type="search"
            className="search-input"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
          />

          <table className="student-table">
            <thead>
              <tr>
                <th>User name</th>
                <th>Student ID</th>
                <th>Enrollment date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.firstName.toLowerCase().includes(search) ||
                        item.firstName.toUpperCase().includes(search);
                })
                .map((user) => (
                  <tr key={user.id}>
                    <td className="student-name">
                      <img src={student4}  />
                      {user.firstName || user.id}
                    </td>
                    <td>{user.studentId || "—"}</td>
                    <td>{user.enrollmentDate || "—"}</td>
                    <td className="status">Enrolled</td>
                    <td>
                      <button
                        className="delete-button"
                        onClick={() => handleDelete(user.studentId)}
                      >
                        <DeleteIcon />
                      </button>
                      <Link to={`/UpdateDiv/${user.id}/details`}>
                        {" "}
                        <button
                          className="update-button"
                          onClick={() => {
                            setIsEditing(true);
                            setSelectedStudent(user); // Set the student to edit
                          }}
                        >
                          <DriveFileRenameOutlineIcon />
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <div className="pagination">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                className={`page-button ${n === 1 ? "active" : ""}`}
              >
                {n}
              </button>
            ))}
          </div>
        </main>
      </div>

      {/* Render UpdateDiv when isEditing is true */}
      {isEditing && selectedStudent && (
        <UpdateDiv
          student={selectedStudent} // Pass selected student data
          onUpdate={handleUpdate} // Pass the update function
          onCancel={handleCancelEdit} // Pass cancel function
        />
      )}
      <br />
      <VisionSection />
      <GallerySection />
      <BannerSection />

    </>
  );
};

export default StudentList;
