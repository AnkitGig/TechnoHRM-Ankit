import Salary from "../../src/images/salary.png";
import Payment from "../../src/images/payment.png";
import Rs from "../../src/images/Rs.png";
const EarningsSummary = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Earnings</h3>
        <span className="card-subtitle">August</span>
      </div>

      <div className="earnings-list">
        <div className="earnings-item">
          <div className="earnings-icon">
          <img src={Salary} alt="Earnings Icon" className="earnings-icon-symbol" />
          </div>
          <div className="earnings-details">
            <p className="earnings-label">Total Salary :</p>
            <p className="earnings-value">30,000 Rs</p>
          </div>
        </div>

        <div className="earnings-item">
          <div className="earnings-icon">
            <img src={Payment} alt="Earnings Icon" className="earnings-icon-symbol" />
          </div>
          <div className="earnings-details">
            <p className="earnings-label">Basic Salary :</p>
            <p className="earnings-value">27,000 Rs</p>
          </div>
        </div>

        <div className="earnings-item">
          <div className="earnings-icon">
             <img src={Rs} alt="Earnings Icon" className="earnings-icon-symbol" />
          </div>
          <div className="earnings-details">
            <p className="earnings-label">Deduction :</p>
            <p className="earnings-value">3,000 Rs</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EarningsSummary
