import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, username, password } = formData;
    if (!email || !username || !password) {
      setError("Please fill in all fields.");
      return;
    }
    console.log("Registering:", formData);
    setError("");
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.contentArea}>
        <div style={styles.card}>
          <h2 style={styles.title}>Create account</h2>

          <form onSubmit={handleSubmit} style={styles.form}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />

            <label style={styles.label}>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              style={styles.input}
            />

            <label style={styles.label}>Password</label>
            <div style={styles.showRow}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                style={styles.input}
              />
              <label style={styles.checkboxLabel}>
                Show{" "}
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
              </label>
            </div>

            {error && <p style={styles.error}>{error}</p>}

            <button type="submit" style={styles.signUpBtn}>
              Create Account
            </button>
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
            <span style={{ fontSize: "13px" }}>
              Already have an account?{" "}
              <Link to="/" style={styles.link}>Sign in</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    background: "#f5f5f5",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    backgroundColor: "#fff",
    padding: "16px",
    fontSize: "22px",
    fontWeight: "bold",
    color: "#d52b1e",
    textAlign: "center",
    borderBottom: "2px solid #eee",
    width: "100%",
  },
  contentArea: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px",
    backgroundColor: "#e5e7eb",
  },
  card: {
    background: "#fff",
    padding: "32px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "420px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  label: {
    fontSize: "14px",
    fontWeight: 600,
    textAlign: "left",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    background: "#fefefe",
  },
  showRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
  },
  checkboxLabel: {
    fontSize: "14px",
  },
  signUpBtn: {
    marginTop: "8px",
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#fd7e14",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  googleBtn: {
    marginTop: "18px",
    background: "#f9f4dc",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "14px",
    gap: "10px",
    width: "100%",
    cursor: "pointer",
    boxShadow: "0 4px 0rgb(48, 40, 10)",
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
    marginTop: "24px",
    textAlign: "center",
  },
  link: {
    textDecoration: "underline",
    color: "#007bff",
    fontWeight: 500,
  },
};

export default Register;
