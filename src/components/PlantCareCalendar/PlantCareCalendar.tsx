import "./PlantCareCalendar.css";
import { seasons } from "./calendar.data";

const hangingPlant = `${import.meta.env.BASE_URL}plants/hanging-plant.svg`;
const hangingPlantAlt = `${import.meta.env.BASE_URL}plants/hanging-plant-2.svg`;

function PlantCareCalendar() {
  return (
    <section className="calendar">
      <div className="calendar-card">
        <div className="calendar-hanging" aria-hidden="true">
          <img
            className="calendar-hanging-img calendar-hanging-img--a"
            src={hangingPlant}
            alt=""
          />
          <img
            className="calendar-hanging-img calendar-hanging-img--b"
            src={hangingPlantAlt}
            alt=""
          />
        </div>

        <header className="calendar-header">
          <h2 className="calendar-title">Care at the Right Time</h2>
          <p className="calendar-subtitle">
            Know exactly when to water, feed, and repot
          </p>
        </header>

        <div className="calendar-timeline">
          {seasons.map((season) => (
            <div className={`calendar-season ${season.key}`} key={season.key}>
              <div className="season-header">
                <span className="season-icon">
                  <img src={season.headerIcon} alt="" aria-hidden="true" />
                </span>
                <div className="season-text">
                  <p className="season-name">{season.name}</p>
                  <p className="season-months">{season.months}</p>
                </div>
              </div>

              <ul className="season-tips">
                {season.tips.map((tip) => (
                  <li className="season-tip" key={tip.label}>
                    <img
                      className="season-tip-icon"
                      src={tip.icon}
                      alt=""
                      aria-hidden="true"
                    />
                    <span className="season-tip-label">{tip.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlantCareCalendar;
