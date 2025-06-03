import backgroundImage from "../../src/images/banner.png";
import profile from "../../src/images/profile.jpg";

const WelcomeBanner = () => {
  return (
    <div
      className="welcome-banner"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative", // for overlay positioning
        color: "#fff",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "#00000099",
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div
        className="welcome-banner-content"
        style={{
          position: "relative", // keep content above overlay
          zIndex: 2,
          padding: "2rem", // optional padding
        }}
      >
        <div className="welcome-message">
          <h2 className="welcome-title">Welcome, Kakashi!</h2>
          <p className="welcome-text">
            Our dashboard is your hub for all things work - stay connected, stay informed, and get things done.
          </p>
        </div>

        <div className="profile-container">
          <div className="profile-image">
            <img src={profile} alt="Kakashi Hatake" />
          </div>
          <div className="profile-info">
            <h3 className="profile-name">Kakashi Hatake</h3>
            <p className="profile-role">UI/UX Designer</p>
            <button className="check-in-btn">Check In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
