
import React from 'react';
import { use, useEffect } from "react";

 import useStudentStore from "../store/studentStore";
import '../style/StudentPage.css';



  const StudentList = () => {
  // eslint-disable-next-line no-unused-vars

  const { students, fetchStudents, loading, error } = useStudentStore();

  useEffect(() => {
    fetchStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
 console.log()
  return (<>
    <div className="page-wrapper">


      {/* Main Section */}
      <main className="main-content">
        <div className="header-section">
          <h1>All students</h1>
          <button className="add-button">+ Add student</button>
        </div>

        <input type="text" className="search-input" placeholder="Search" />

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
            {Array(7).fill().map((_, i) => (
              <tr key={i}>
                <td className="student-name">
                  <img src="https://via.placeholder.com/32" alt="avatar" className="avatar" />
                  Clark Gill
                </td>
                <td>1287654</td>
                <td>July 12, 2022</td>
                <td className="status">Enrolled</td>
                <td><button className="delete-button">🗑</button></td>
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

    {/* Footer */}
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
