import { useState } from "react";
import axios from "axios";
import { saveToken } from "./Auth.js";

const API = "http://localhost:3000/login";

function Login({ onLogin, goToRegister }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginStudent() {
    if (!email || !password) {
      alert("Enter email and password");
      return;
    }

    try {
      const res = await axios.post(API, { email, password });
      saveToken(res.data.token);
      alert("Login Successful");
      onLogin(res.data.student);
    } catch {
      alert("Invalid email or password");
    }
  }

  return (
    <div>
      <h2>Student Login</h2>

      <p>Email Address:</p>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />

      <p>Password:</p>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <br /><br />
      <button onClick={loginStudent}>Login</button>
      <button onClick={goToRegister}>Back to Register</button>
    </div>
  );
}

export default Login;
