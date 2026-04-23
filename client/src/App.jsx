import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const token = localStorage.getItem("token");

  const [page, setPage] = useState("login");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [apps, setApps] = useState([]);

  const jobs = [
    { title: "Frontend Developer", type: "React.js | Remote" },
    { title: "MERN Stack Intern", type: "Node.js | MongoDB" },
    { title: "Software Engineer", type: "Full Time | Onsite" },
    { title: "Backend Developer", type: "Express.js | Hybrid" },
  ];

  const signup = async () => {
    const res = await axios.post("http://localhost:5000/signup", {
      name,
      email,
      password,
    });
    alert(res.data.msg);
    setPage("login");
  };

  const login = async () => {
    const res = await axios.post("http://localhost:5000/login", {
      email,
      password,
    });

    alert(res.data.msg);

    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      window.location.reload();
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const applyJob = (job) => {
    setApps([...apps, job]);
    alert("Applied Successfully");
  };

  if (token) {
    return (
      <div className="main">
        <nav className="nav">
          <h2>JobHunt Pro</h2>
          <button onClick={logout}>Logout</button>
        </nav>

        <section className="hero2">
          <h1>Welcome to Dashboard 🎉</h1>
          <p>Apply for top opportunities below</p>
        </section>

        <div className="jobs">
          {jobs.map((job, i) => (
            <div className="card" key={i}>
              <h2>{job.title}</h2>
              <p>{job.type}</p>
              <button onClick={() => applyJob(job.title)}>Apply</button>
            </div>
          ))}
        </div>

        <div className="apps">
          <h2>My Applications</h2>
          {apps.length === 0 ? (
            <p>No applications yet</p>
          ) : (
            apps.map((a, i) => <p key={i}>✅ {a}</p>)
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="main">
      <nav className="nav">
        <h2>JobHunt Pro</h2>
        <div>
          <button onClick={() => setPage("login")}>Login</button>
          <button onClick={() => setPage("signup")}>Signup</button>
        </div>
      </nav>

      <section className="hero">
        <h1>Find Your Dream Job Today</h1>
        <p>Apply to top companies with one click.</p>
      </section>

      <div className="box">
        {page === "signup" ? (
          <>
            <h1>Signup</h1>

            <input
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={signup}>Create Account</button>
          </>
        ) : (
          <>
            <h1>Login</h1>

            <input
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={login}>Login</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;