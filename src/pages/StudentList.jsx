import React, { useEffect, useState } from "react";
import profilePicture from '../images/students12.jpg';
import useStudentStore from "../store/studentStore";
import '../style/StudentPage.css';
import DeleteIcon from '@mui/icons-material/Delete';

const StudentList = () => {
  const { students, fetchStudents, loading, error } = useStudentStore();
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="page-wrapper">
        <main className="main-content">
          <div className="header-section">
            <h1>All students</h1>
            <button className="add-button">+ Add student</button>
          </div>

          <input type="search" className="search-input" onChange={(e) => setSearch(e.target.value)} placeholder="Search" />

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
              {students.filter((item) => {
                return search.toLowerCase() === '' ? item:item.firstName.toLowerCase().includes(search) ||
                search.toUpperCase() === '' ? item:item.firstName.toUpperCase().includes(search);
              }).map(user => (
                <tr key={user.id}>
                  <td className="student-name">
                    <img src={profilePicture} alt="avatar" className="avatar" />
                    {user.firstName || user.id}
                  </td>
                  <td>{user.studentId || '—'}</td>
                  <td>{user.enrollmentDate || '—'}</td>
                  <td className="status">Enrolled</td>
                  <td><button className="delete-button">  <DeleteIcon /></button></td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            {[1, 2, 3, 4, 5].map((n) => (
              <button key={n} className={`page-button ${n === 1 ? 'active' : ''}`}>{n}</button>
            ))}
          </div>
        </main>
      </div>

      <footer className="footer">
        <div className="footer-left">
          <h3>STUDENTSYNC MANAGEMENT APP</h3>
          <p>Student management platform</p>
          <p>Gasabo District, Kigali, Rwanda</p>
          <p>Working Hours: Mon - Fri (08:00 - 17:00)</p>
        </div>
        <div className="footer-right">
          <p>Contact: info@akaperception.rw</p>
          <p>Phone: 0788-322-223</p>
          <div className="social-icons"></div>
        </div>
      </footer>
    </>
  );
};

export default StudentList;
