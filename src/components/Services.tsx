import "./styles/Services.css";
import { config } from "../config";

const Services = () => {
  return (
    <div className="services-section" id="services">
      <div className="services-container">
        <span className="services-eyebrow">SERVICES</span>
        <h2 className="services-title">
          What I <span>Offer</span>
        </h2>
        <p className="services-subtitle">
          End-to-end solutions to bring your ideas to life — from concept to
          production.
        </p>
        <div className="services-grid">
          {config.services.map((service, index) => (
            <div className="service-card" key={index} data-cursor="disable">
              <span className="service-number">
                0{index + 1}
              </span>
              <div className="service-icon" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="service-name">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
