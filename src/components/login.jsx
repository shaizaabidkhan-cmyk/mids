import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!email.includes("@")) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!password.trim()) {
      newErrors.password = "Please enter your password.";
    } else if (password.length < 6) {
      newErrors.password = "Password should be at least 6 characters.";
    }

    setErrors(newErrors);
    setSuccess("");

    if (Object.keys(newErrors).length === 0) {
      setSuccess("You're logged in. Good to see you!");
    }
  };

  return (
    <div className="login-card">

      <div className="login-header">
        <p className="welcome-text">Welcome back</p>

        <h1>Good to see you!</h1>

        <p className="subtitle">
          Enter your details below to get back into your account.
        </p>
      </div>

      <form onSubmit={handleSubmit}>

        {/* Email */}
        <div className="input-group">
          <label htmlFor="email">
            Email
            <span>*</span>
          </label>

          <div
            className={`input-wrapper ${
              errors.email ? "input-error" : ""
            }`}
          >
            <span className="input-icon">✉</span>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  email: ""
                }));
                setSuccess("");
              }}
            />
          </div>

          {errors.email && (
            <p className="error-message">
              {errors.email}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="input-group">

          <div className="password-top">
            <label htmlFor="password">
              Password
              <span>*</span>
            </label>

            <button
              type="button"
              className="forgot-button"
            >
              Forgot password?
            </button>
          </div>

          <div
            className={`input-wrapper ${
              errors.password ? "input-error" : ""
            }`}
          >
            <span className="input-icon">●</span>

            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  password: ""
                }));
                setSuccess("");
              }}
            />

            <button
              type="button"
              className="show-button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {errors.password && (
            <p className="error-message">
              {errors.password}
            </p>
          )}
        </div>

        {/* Remember */}
        <label className="remember">
          <input type="checkbox" />
          <span>Remember me</span>
        </label>

        {/* Login */}
        <button
          type="submit"
          className="login-button"
        >
          <span>Log in</span>
          <span className="arrow">→</span>
        </button>

        {success && (
          <p className="success-message">
            ✓ {success}
          </p>
        )}
      </form>

      <div className="signup-text">
        New here?
        <button type="button">
          Create an account
        </button>
      </div>

    </div>
  );
}

export default Login;