const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = "mysecretkey";

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/studentsDB")
  .then(() => console.log("MongoDB Connected"));

// Create Student schema
const StudentSchema = new mongoose.Schema({
  name: String,
  email: String,
  contactNumber: String,
  gender: String,
  password: String
});

// Create Student model
const Student = mongoose.model("Student", StudentSchema);

// REGISTER
app.post("/register", async (req, res) => {
  const student = new Student({
    name: req.body.name,
    email: req.body.email,
    contactNumber: req.body.contactNumber,
    gender: req.body.gender,
    password: req.body.password
  });
  await student.save();
  res.json(student);
});

// LOGIN
app.post("/login", async (req, res) => {
  const student = await Student.findOne({
    email: req.body.email,
    password: req.body.password
  });

  if (!student) {
    return res.status(401).json({ message: "Invalid login" });
  }

  const token = jwt.sign({ id: student._id, email: student.email }, SECRET);
  res.json({ token, student });
});

// READ
app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// Start server
app.listen(3000, () => console.log("Server running on port 3000"));
