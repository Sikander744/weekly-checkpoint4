import { useState } from "react";
import axios from "axios";

const API = "http://localhost:3000/register";

function Register({ goToLogin }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [gender, setGender] = useState("Male");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function registerStudent() {
    if (!name || !email || !contactNumber || !password) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }

    await axios.post(API, {
      name,
      email,
      contactNumber,
      gender,
      password
    });

    alert("Registration Successful");
    goToLogin();
  }

  return (
    <div>
      <h2>Student Registration</h2>

      <p>Name:</p>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <p>Email Address:</p>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />

      <p>Contact Number:</p>
      <input value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />

      <p>Gender:</p>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <p>Password:</p>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <p>Confirm Password:</p>
      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

      <br /><br />
      <button onClick={registerStudent}>Register</button>
      <button onClick={goToLogin}>Login Page</button>
    </div>
  );
}

export default Register;
