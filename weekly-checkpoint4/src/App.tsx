import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import { removeToken } from "./Auth.js";

function App() {
  const [page, setPage] = useState("register");
  const [student, setStudent] = useState<any>(null);

  function logoutStudent() {
    removeToken();
    setStudent(null);
    setPage("login");
  }

  return (
    <div style={{ padding: 30, textAlign: "center" }}>
      <h1>School Students Registration</h1>

      {page === "register" && (
        <Register goToLogin={() => setPage("login")} />
      )}

      {page === "login" && (
        <Login
          onLogin={(data: any) => {
            setStudent(data);
            setPage("home");
          }}
          goToRegister={() => setPage("register")}
        />
      )}

      {page === "home" && student && (
        <div>
          <h2>Welcome {student.name}</h2>
          <p>Email Address: {student.email}</p>
          <p>Contact Number: {student.contactNumber}</p>
          <p>Gender: {student.gender}</p>
          <button onClick={logoutStudent}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;
