const AttendanceSummary = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Attendance Summary</h3>
        <span className="card-subtitle">August</span>
      </div>

      <div className="attendance-stats">
        <div className="stat-item">
          <span className="stat-indicator present"></span>
          <span className="stat-text">Present - 26</span>
        </div>
        <div className="stat-item">
          <span className="stat-indicator half-day"></span>
          <span className="stat-text">Half Day - 1</span>
        </div>
        <div className="stat-item">
          <span className="stat-indicator leave"></span>
          <span className="stat-text">Leave - 3</span>
        </div>
      </div>

      <div className="chart-container">
        <div className="chart">
          {/* This is a simplified version of the circular chart */}
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#e6e6e6" strokeWidth="12" />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#22c55e"
              strokeWidth="12"
              strokeDasharray="226 251"
              strokeDashoffset="0"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="chart-center">
            <div className="chart-label">
              <div className="chart-label-title">Total Days</div>
              <div className="chart-label-value">30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttendanceSummary
