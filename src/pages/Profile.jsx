// src/pages/Dashboard.js
import React, { useState } from "react";
import Sidebar from "../component/SideBar";
import MyProfile from "../../src/images/Profile.png";
import profileBackground from "../../src/images/profileBackground.png";
import Profile1 from "../../src/images/profile.jpg";

const Profile = ({ currentPage, setCurrentPage }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [personalInfoOpen, setPersonalInfoOpen] = useState(true);
  const [accountSettingsOpen, setAccountSettingsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Profile data state
  const [profileData, setProfileData] = useState({
    name: "Kailash Hatake",
    role: "Developer",
    email: "kailash@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, City, State 12345",
    website: "www.kailash.dev",
    avatar: "/placeholder.svg?height=120&width=120",
  });

  // Form data state
  const [personalFormData, setPersonalFormData] = useState({
    fullName: "Kailash Hatake",
    email: "kailash@example.com",
    phone: "+1 (555) 123-4567",
    website: "www.kailash.dev",
    address: "123 Main St, City, State 12345",
  });

  const [accountFormData, setAccountFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    role: "Developer",
  });

  const togglePersonalInfo = () => {
    setPersonalInfoOpen(!personalInfoOpen);
  };

  const toggleAccountSettings = () => {
    setAccountSettingsOpen(!accountSettingsOpen);
  };

  const handlePersonalInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAccountInputChange = (e) => {
    const { name, value } = e.target;
    setAccountFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (
      accountFormData.newPassword &&
      accountFormData.newPassword !== accountFormData.confirmPassword
    ) {
      alert("Passwords do not match!");
      return false;
    }
    return true;
  };

  const handleSave = () => {
    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Personal Info:", personalFormData);
      console.log("Account Settings:", accountFormData);

      // Update profile data
      setProfileData((prev) => ({
        ...prev,
        name: personalFormData.fullName,
        email: personalFormData.email,
        phone: personalFormData.phone,
        website: personalFormData.website,
        address: personalFormData.address,
        role: accountFormData.role,
      }));

      setIsLoading(false);
      alert("Profile updated successfully!");
    }, 1500);
  };
  return (
    <div className="app-container">
      <div
        className={`sidebar-overlay ${sidebarOpen ? "visible" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <div className="content-container">
        <div className="content-container">
          <header className="header">
            <div className="header-left">
              <button
                className="menu-button"
                onClick={() => setSidebarOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
            <div className="header-actions">
              <button className="header-action-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </button>
              <button className="header-action-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </button>
              <button className="header-action-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </button>
            </div>
          </header>
          {/* <MyProfile /> */}
        </div>
        <main className="main-content">
          {/* Header */}
          <div className="dashboard-header">
            <div
              className="dashboard-title-wrapper"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <img
                src={MyProfile}
                alt="Dashboard Icon"
                style={{ width: "35px", height: "35px" }}
              />
              <div>
                <h1 className="dashboard-title">My Profile</h1>
                <p className="dashboard-subtitle">
                  Obsessed with ideas, driven by growth, and always trying to
                  leave things better than I found them.
                </p>
              </div>
            </div>
            <button className="date-picker">
              <span className="date-picker-text">1 Jan 2025 - 31 Jan 2025</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>

          {/* Dashboard cards */}
          <div className="main-content-area">
            {/* Profile Content */}
            <div className="profile-content">
              {/* Left Side - Profile Info */}
              <div className="profile-left">
                <div className="profile-image-section">
                  <img
                    src={profileBackground}
                    alt="Profile Dashboard"
                    className="dashboard-image"
                  />
                </div>

                <div className="profile-info-card">
                  <div className="profile-avatar-section">
                    <img
                      src={Profile1 || "/placeholder.svg"}
                      alt="Profile"
                      className="profile-avatar"
                    />
                    <div className="profile-details">
                      <h2 className="profile-name">{profileData.name}</h2>
                      <p className="profile-title">{profileData.role}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Forms */}
              <div className="profile-right">
                <div className="profile-card">
                  <div className="card-avatar">
                    <img
                      src={profileData.avatar || "/placeholder.svg"}
                      alt="Profile"
                      className="card-avatar-img"
                    />
                    <button className="edit-btn">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Personal Information Card */}
                <div className="form-card">
                  <div className="card-header" onClick={togglePersonalInfo}>
                    <h3 className="card-title">Personal Information</h3>
                    <svg
                      className={`chevron-icon ${personalInfoOpen ? "rotated" : ""
                        }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                  <div
                    className={`card-content ${!personalInfoOpen ? "collapsed" : ""
                      }`}
                  >
                    <div className="form-grid">
                      <div className="form-group">
                        <label htmlFor="fullName" className="form-label">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          className="form-input"
                          value={personalFormData.fullName}
                          onChange={handlePersonalInputChange}
                        
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-input"
                          value={personalFormData.email}
                          onChange={handlePersonalInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone" className="form-label">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="form-input"
                          value={personalFormData.phone}
                          onChange={handlePersonalInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Account Settings Card */}
                <div className="form-card">
                  <div className="card-header" onClick={toggleAccountSettings}>
                    <h3 className="card-title">Account Setting</h3>
                    <svg
                      className={`chevron-icon ${accountSettingsOpen ? "rotated" : ""
                        }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                  <div
                    className={`card-content ${!accountSettingsOpen ? "collapsed" : ""
                      }`}
                  >
                    <div className="form-grid">
                      <div className="form-group">
                        <label htmlFor="currentPassword" className="form-label">
                          Current Password
                        </label>
                        <input
                          type="password"
                          id="currentPassword"
                          name="currentPassword"
                          className="form-input"
                          placeholder="Enter current password"
                          value={accountFormData.currentPassword}
                          onChange={handleAccountInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="newPassword" className="form-label">
                          New Password
                        </label>
                        <input
                          type="password"
                          id="newPassword"
                          name="newPassword"
                          className="form-input"
                          placeholder="Enter new password"
                          value={accountFormData.newPassword}
                          onChange={handleAccountInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Save Button */}
                <div className="save-section">
                  <button
                    className="save-btn"
                    onClick={handleSave}
                    disabled={isLoading}
                  >
                    {isLoading ? "Saving..." : "Save"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
