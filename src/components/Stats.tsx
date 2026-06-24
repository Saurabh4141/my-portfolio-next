import "./styles/Stats.css";
import { config } from "../config";

const Stats = () => {
  return (
    <div className="stats-section">
      <div className="stats-band">
        {config.stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <h3 className="stat-value">{stat.value}</h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
