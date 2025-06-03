const HolidaysList = () => {
  const holidays = [
    {
      name: "Raksha Bandhan",
      date: "9 August, 2025",
      day: "Saturday",
      icon: "🪔",
    },
    {
      name: "Independence day",
      date: "15 August, 2025",
      day: "Friday",
      icon: "🇮🇳",
    },
    {
      name: "Parsi New Year",
      date: "16 August, 2025",
      day: "Saturday",
      icon: "🎆",
    },
    {
      name: "Janmashtami",
      date: "18 August, 2025",
      day: "Monday",
      icon: "🪔",
    },
    {
      name: "Ganesh Chaturthi",
      date: "27 August, 2025",
      day: "Wednesday",
      icon: "🪔",
    },
  ]

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Holidays</h3>
        <span className="card-subtitle">August</span>
      </div>

      <div className="holidays-list">
        {holidays.map((holiday, index) => (
          <div key={index} className="holiday-item">
            <div className="holiday-icon">
              <span className="holiday-icon-symbol">{holiday.icon}</span>
            </div>
            <div className="holiday-details">
              <p className="holiday-name">{holiday.name}</p>
              <p className="holiday-day">{holiday.day}</p>
            </div>
            <div className="holiday-date">{holiday.date}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HolidaysList
