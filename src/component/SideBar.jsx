import Logo from "../../src/images/logo.png";
import { useNavigate } from 'react-router-dom';
import dashboardIcon from "../../src/images/dashBo.png"
import profileIcon from "../../src/images/profile1.png";
import AttendanceIcon from "../../src/images/attendance.png";
import leaveIcon from "../../src/images/leave.png"; // Assuming you have a leave icon
import PayrollIcon from "../../src/images/payroll.png"; // Assuming you have a payroll icon
import CompnayPolicy from "../../src/images/company.png";

const Sidebar = ({ isOpen, onClose, currentPage, setCurrentPage }) => {
  const navigate = useNavigate();

  const routeMap = {
    dashboard: "/dashboard",
    profile: "/profile",
    attendance: "/attendance",
    leave: "/leave",
    payroll: "/payroll",
    companyPolicy: "/company-policy",
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
            { id: "dashboard", label: "Dashboard", icon: dashboardIcon },
            { id: "profile", label: "My Profile", icon: profileIcon },
            { id: "attendance", label: "Attendance", icon: AttendanceIcon },
            { id: "leave", label: "Leave", icon: leaveIcon },
            { id: "payroll", label: "Payroll", icon: PayrollIcon },
            { id: "companyPolicy", label: "Company Policy", icon: CompnayPolicy }
          ].map(({ id, label, icon }) => (
            <li
              key={id}
              className={`sidebar-nav-item ${currentPage === id ? "active" : ""}`}
            >
              <button type="button" onClick={() => handleNavClick(id)}>
                <img
                  src={icon}
                  alt={`${label} icon`}
                  className={`sidebar-nav-icon ${currentPage === id ? "icon-active" : "icon-inactive"}`}
                />
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
