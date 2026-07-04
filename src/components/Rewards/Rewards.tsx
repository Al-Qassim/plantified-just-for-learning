import "./Rewards.css";
import carePackage from "../../assets/icons/care-package.svg";
import careRain from "../../assets/icons/care-rain.svg";
import careRecycle from "../../assets/icons/care-recycle.svg";
import careSprout from "../../assets/icons/care-sprout.svg";
import connectorArrow1 from "../../assets/icons/connector-arrow-1.svg";
import connectorArrow2 from "../../assets/icons/connector-arrow-2.svg";
import connectorArrow3 from "../../assets/icons/connector-arrow-3.svg";

const connectors = [connectorArrow1, connectorArrow2, connectorArrow3];

type CareStep = {
  icon: string;
  title: string;
  description: string[];
};

const steps: CareStep[] = [
  {
    icon: carePackage,
    title: "Unboxing",
    description: ["Let the leaves settle and", "acclimate to your light."],
  },
  {
    icon: careRain,
    title: "First Mist",
    description: ["Apply a light moisture", "layer after 48 hours."],
  },
  {
    icon: careRecycle,
    title: "Routine",
    description: ["Establish a weekly cadence for", "feeding and care."],
  },
  {
    icon: careSprout,
    title: "Watch it grow",
    description: [
      "After a short time, your",
      "plant will love you because",
      "you take care of it.",
    ],
  },
];

function Rewards() {
  return (
    <section className="rewards">
      <div className="rewards-inner">
        <h2 className="rewards-heading">
          <span className="rewards-heading-text">Small Care, Big Rewards</span>
        </h2>

        <div className="rewards-steps">
          {steps.map((step, index) => (
            <div className="rewards-step-group" key={step.title}>
              <article className="reward-step">
                <span className="reward-step-icon">
                  <img src={step.icon} alt="" aria-hidden="true" />
                </span>
                <h3 className="reward-step-title">{step.title}</h3>
                <p className="reward-step-desc">
                  {step.description.map((line, lineIndex) => (
                    <span key={line}>
                      {line}
                      {lineIndex < step.description.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </article>

              {index < steps.length - 1 && (
                <img
                  className="reward-connector"
                  src={connectors[index]}
                  alt=""
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rewards;
