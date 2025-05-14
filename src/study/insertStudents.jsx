import React, { useState } from 'react';
import useStudentStore from '../store/studentStore';
import '../style/AddStudentForm.css';

const AddStudentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    studentId: '',
    email: '',
    contactNumber: '',
    enrollmentDate: '',
  });

  const [message, setMessage] = useState('');
  const addStudent = useStudentStore(state => state.addStudent);
  const error = useStudentStore(state => state.error);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStudent(formData);
    if (error) {
      setMessage(` Error: ${error}`);
    } else {
      setMessage(' Student added successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        studentId: '',
        email: '',
        contactNumber: '',
        enrollmentDate: '',
      });
    }
  };

  return (
    <div className="form-container">
      <h2>Register New Student</h2>
      {message && <p className="message">{message}</p>}
      <form className="student-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <input type="date" name="dateOfBirth" placeholder="Date of Birth" value={formData.dateOfBirth} onChange={handleChange} required />
          <input type="text" name="studentId" placeholder="Student ID" value={formData.studentId} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="text" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <input type="date" name="enrollmentDate" placeholder="Enrollment Date" value={formData.enrollmentDate} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddStudentForm;
