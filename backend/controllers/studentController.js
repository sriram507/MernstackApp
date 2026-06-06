import Student from "../models/userModel.js";

// 👉 Create a new student
export const createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json({ message: "Student added successfully!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 👉 Get all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
