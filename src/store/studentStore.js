/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { studentService } from "../lib/api";

const useStudentStore = create((set, get) => ({
  students: [],
  student: {},
  loading: false,
  error: null,

  // Fetch all students
  fetchStudents: async () => {
    set({ loading: true, error: null });
    try {
      const response = await studentService.getAllStudents();
      console.log(response);
      if (response.success) {
        set({ students: response.data, loading: false });
      } else {
        set({ error: response.message, loading: false });
      }
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Get single student
  getStudent: async (id) => {
    set({ loading: true, error: null });
    // implementation goes here
  },

  // Add student
  addStudent: async (studentData) => {
    set({ loading: true, error: null });
    // implementation goes here
    try {
      const response = await studentService.createStudent(studentData);
      if (response.success) {
        // Add new student to state
        const InsertedStudents = [...get().students, response.data];
        set({ students: InsertedStudents, loading: false });
      } else {
        set({ error: response.message, loading: false });
      }
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  updateStudent: async (id, updatedData) => {
    set({ loading: true, error: null });

    try {
      const result = await studentService.updateStudent(id, updatedData);
      if (result.success) {
        set((state) => ({
          students: state.students.map((s) =>
            s.studentId === id ? { ...s, ...updatedData } : s,
          ),
          student: { ...state.student, ...updatedData }, // Update the local student data
          loading: false,
        }));
      } else {
        set({ error: result.message, loading: false });
      }
      return result; // Return result to the component
    } catch (error) {
      set({ error: error.message, loading: false });
      return { success: false, message: error.message };
    }
  },

  // Delete student
   deleteStudent: async (id) => {
    set({ loading: true, error: null });

    const result = await studentService.deleteStudent(id);
    if (result.success) {
      set((state) => ({
        students: state.students.filter((s) => s.studentId !== id),
        loading: false,
      }));
    } else {
      set({ error: result.message, loading: false });
    }

    return result; // Optional: useful in components
  },
  

  searchStudents: async (query) => {
    set({ loading: true, error: null });
    // Implementation goes here
  },
}));

export default useStudentStore;
