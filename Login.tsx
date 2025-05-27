import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }
    console.log("Logging in with:", formData);
    setError("");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Sign in</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.divider}>Sign in with email</div>

          {error && <p style={styles.error}>{error}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />

          <div style={styles.showRow}>
            <label>
              Show
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
            </label>
          </div>

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />

          <button type="submit" style={styles.signInBtn}>Sign in</button>
        </form>

        <button style={styles.googleBtn}>
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
            style={styles.googleIcon}
          />
          <span>Continue with Google</span>
        </button>

        <div style={styles.footer}>
          <Link to="/register" style={styles.link}>Create here</Link>
          <a href="#" style={styles.link}>Forgot password?</a>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    background: "#f5f5f5",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    background: "#ffffff",
    padding: "32px",
    borderRadius: "12px",
    maxWidth: "400px",
    width: "100%",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  divider: {
    fontSize: "14px",
    fontWeight: 500,
    color: "#555",
    marginBottom: "6px",
  },
  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    background: "#f8f9fa",
  },
  showRow: {
    fontSize: "13px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  signInBtn: {
    padding: "12px",
    backgroundColor: "#fd7e14",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  googleBtn: {
    background: "#f9f4dc",
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "14px",
    gap: "10px",
    marginTop: "18px",
    cursor: "pointer",
    width: "100%",
  },
  googleIcon: {
    width: "18px",
    height: "18px",
  },
  error: {
    color: "red",
    fontSize: "13px",
  },
  footer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "13px",
  },
  link: {
    textDecoration: "underline",
    color: "#007bff",
    fontWeight: 500,
  },
};

export default Login;
