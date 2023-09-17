import { MdSpaceDashboard } from "react-icons/md";
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dataAdmin = ["admin@mail.com", "adminadmin"];
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Custom validation logic here
    const { email, password } = formData;
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      newErrors.email = "Invalid email format (e.g., yourname@example.com)";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (
      Object.keys(newErrors).length === 0 &&
      email == dataAdmin[0] &&
      password == dataAdmin[1]
    ) {
      navigate("/admin-panel/dashboard");
    } else {
      setFormData({ email: "", password: "" });
      newErrors.invalidAuth = "The email and password is wrong!!!";
      setErrors(newErrors);
    }
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    return /.+@.+\..+/.test(email);
  };

  return (
    <div className="login">
      <div className="box">
        <div className="icon-wrapper">
          <div className="icon">
            <MdSpaceDashboard />
          </div>
          <div className="text">Dashboard Kit</div>
        </div>
        <div className="login-title">Log In to Dashboard Kit</div>
        <div className="login-subtitle">Enter your email and password below</div>

        <div className="form">
          <form method="post" onSubmit={handleSubmit}>
            <label htmlFor="email">EMAIL</label>
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <label className="forgot-password-wrapper" htmlFor="password">
              PASSWORD <div className="forgot-password">Forgot password?</div>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
            <button type="submit">Login</button>
            {errors.invalidAuth && (
              <span className="error">{errors.invalidAuth}</span>
            )}
          </form>
        </div>

        <div className="sign-up-options">
          {`Don't have an account?`} <span>Sign up</span>
        </div>
      </div>
    </div>
  );
}
