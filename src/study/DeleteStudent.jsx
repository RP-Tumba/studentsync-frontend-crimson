
import React, { useEffect } from 'react';
import  useStudentStore  from '../store/studentStore';

const DeleteStudent = () => {
  const {
    students,
    loading,
    error,
    fetchStudents,
    deleteStudent,
  } = useStudentStore();

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  const handleDelete = async (id) => {
    const confirm = window.confirm('Are you sure you want to delete this student?');
    if (!confirm) return;

    const result = await deleteStudent(id);
    if (!result.success) {
      alert(result.message);
    }
  };

  return (
    <div>
      <h1>Student List</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {students.map((student) => (
          <li key={student.studentId}>
            {student.name}
            <button
              onClick={() => handleDelete(student.studentId)}
              style={{ marginLeft: '10px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteStudent;
