# IA730001 - Advanced Application Development Concepts
## Assessment - Weekly Checkpoint 4

- **Study block:** Study Block 4 - 2026
- **Date issued:** 09/11/2026
- **Due date:** 16/11/2026 - 23:59 PM
- **Weighting:** 5% (Marks out of 100)
- **Student Name:** [Enter Your Name]
- **Student ID No:** [Enter Your Student ID]
- **Lecturer:** Mr Udara Samaratunge
- **GitHub URL:** [Paste GitHub URL Here]

---

## 1. Source Code Screenshots

- **backend/index.js:** [Paste Screenshot Here]
- **src/Auth.js:** [Paste Screenshot Here]
- **src/service-worker.js and src/main.tsx:** [Paste Screenshot Here]
- **src/Register.tsx:** [Paste Screenshot Here]
- **src/Login.tsx:** [Paste Screenshot Here]
- **src/App.tsx:** [Paste Screenshot Here]

---

## 2. Working Outputs Screenshots

- **Backend Terminal (`node index.js`) & MongoDB Compass:** [Paste Screenshot Here]
- **Frontend Registration Page:** [Paste Screenshot Here]
- **Frontend Login Page & Logged In Output:** [Paste Screenshot Here]

---

## 3. Reflection (Challenges Faced in Implementation and Testing)

While building and testing this checkpoint, I faced a few challenges:
- First, when connecting the React frontend on port 5173 to the backend on port 3000, the browser blocked the request because of CORS. I fixed this by installing and adding `cors()` in `backend/index.js`.
- Second, because the project was created with React and TypeScript, importing the `Auth.js` file gave an error at first. I solved this by enabling `allowJs` inside `tsconfig.app.json`.
- Third, when connecting to MongoDB locally on Windows, `localhost` did not connect right away, so I used `127.0.0.1:27017/studentsDB` and checked MongoDB Compass to verify that registered students were saved properly.
