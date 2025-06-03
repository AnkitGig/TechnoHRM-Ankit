import { useState } from "react";
import img1 from '../images/image (1).png'
import logo from '../images/logo.png'
import { Link } from "react-router-dom";
export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profileName: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === "signup" && formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log(activeTab === "login" ? "Logging in" : "Signing up", formData);
  };

  return (


    <>

     <div className="white-header">
        <div className="header-logo-container">
           <img src={`${logo}`}/>
          {/* <div className="header-logo-text">
            <div className="header-logo-title">TECHNORIZEN</div>
            <div className="header-logo-subtitle">SOFTWARE SOLUTIONS PVT LTD</div>
            <div className="header-logo-tagline">Quality & Technology</div>
          </div> */}
        </div>
      </div>
    <div className="login-container">
      {/* Background Image */}
      <img src={`${img1}`} alt="Office background" fill className="background-image" priority />
      <div className="background-overlay"></div>



      {/* Form Container */}
      <div className="form-container">
        <div className="login-form">
          {/* Welcome Text */}
          <div className="welcome-text">
            <h1 className="welcome-title">Welcome to</h1>
            <h2 className="welcome-subtitle">HRMS</h2>
          </div>

          {/* Tab Buttons */}
          <div className="tab-buttons">
            <button
              onClick={() => setActiveTab("login")}
              className={`tab-button ${activeTab === "login" ? "active" : "inactive"}`}
            >
              Log In
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={`tab-button ${activeTab === "signup" ? "active" : "inactive"}`}
            >
              Sign Up
            </button>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit}>
            {activeTab === "signup" && (
              <>
                {/* Name Field */}
                <div className="form-group">
                  <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <input
                    type="text"
                    name="name"
                    className="form-control-custom"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Profile Name Field */}
                <div className="form-group">
                  <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <input
                    type="text"
                    name="profileName"
                    className="form-control-custom"
                    placeholder="Enter Profile Name"
                    value={formData.profileName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}

            {/* Email Field */}
            <div className="form-group">
              <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <input
                type="email"
                name="email"
                className="form-control-custom"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-group">
              <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="form-control-custom"
                placeholder={activeTab === "login" ? "Password" : "Create Password"}
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button 
                type="button" 
                className="password-toggle" 
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                  </svg>
                ) : (
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Confirm Password Field (only for signup) */}
            {activeTab === "signup" && (
              <div className="form-group">
                <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  className="form-control-custom"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            {/* Recover Password Link (only for login) */}
            {activeTab === "login" && (
              <div className="recover-password">
                <a href="#">Recover Password</a>
              </div>
            )}

            {/* Submit Button */}
            <button type="submit" className="btn-login">
              {activeTab === "login" ? "Log In" : "Sign Up"}
            </button>

            {/* Toggle Link */}
            <div className="signup-link">
              <span>
                {activeTab === "login" 
                  ? "Don't have an account? " 
                  : "Already have an account? "}
              </span>
              <Link 
                type="button" 
                className="toggle-link" 
                onClick={() => setActiveTab(activeTab === "login" ? "signup" : "login")}
              >
                {activeTab === "login" ? "Sign Up" : "Log In"}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}