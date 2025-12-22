"use client";

import { useState } from "react";

export default function LoginPage() {
  const [mode, setMode] = useState("login");

  return (
    <div className="page">
      <div className="page-header">
        <p className="page-kicker">Access</p>
        <h1 className="page-title">
          {mode === "login" ? "Welcome back" : "Create your Art‑hur account"}
        </h1>
      </div>

      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Auth will connect to backend.");
        }}
      >
        <div className="form-row">
          <label className="form-label">Email</label>
          <input className="form-input" type="email" required />
        </div>

        <div className="form-row">
          <label className="form-label">Password</label>
          <input className="form-input" type="password" required />
        </div>

        <button className="btn-primary" type="submit">
          {mode === "login" ? "Log in" : "Sign up"}
        </button>

        <p
          style={{ marginTop: "1rem", cursor: "pointer", color: "#93c5fd" }}
          onClick={() => setMode(mode === "login" ? "signup" : "login")}
        >
          {mode === "login"
            ? "Need an account? Sign up"
            : "Already have an account? Log in"}
        </p>
      </form>
    </div>
  );
}
