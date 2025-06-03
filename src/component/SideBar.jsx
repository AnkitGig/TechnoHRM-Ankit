import React from 'react';
import Logo from "../../src/images/logo.png";
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose, currentPage, setCurrentPage }) => {
  const navigate = useNavigate();

  const routeMap = {
    dashboard: "/dashboard",
    profile: "/profile",
    logout: "/"
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    onClose();
    navigate(routeMap[page] || "/");
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <img src={Logo} alt="Technorizen Logo" className="sidebar-logo" />
        <button className="sidebar-close-btn" onClick={onClose}>X</button>
      </div>

      <nav className="sidebar-nav">
        <ul className="sidebar-nav-list">
          {[
            { id: "dashboard", label: "Dashboard" },
            { id: "profile", label: "My Profile" },
          ].map(({ id, label }) => (
            <li
              key={id}
              className={`sidebar-nav-item ${currentPage === id ? "active" : ""}`}
            >
              <button type="button" onClick={() => handleNavClick(id)}>
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <ul className="sidebar-nav-list">
          <li className="sidebar-nav-item">
            <button type="button" onClick={() => handleNavClick("logout")}>
              Contact Support
            </button>
            <button type="button" onClick={() => handleNavClick("logout")}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
