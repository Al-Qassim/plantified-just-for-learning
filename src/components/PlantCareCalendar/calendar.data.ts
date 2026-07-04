import springSun from "../../assets/icons/spring-sun.svg";
import springDroplet from "../../assets/icons/spring-droplet.svg";
import springLeaf from "../../assets/icons/spring-leaf.svg";
import springZap from "../../assets/icons/spring-zap.svg";
import summerSun from "../../assets/icons/summer-sun.svg";
import summerDroplet from "../../assets/icons/summer-droplet.svg";
import summerWind from "../../assets/icons/summer-wind.svg";
import summerShield from "../../assets/icons/summer-shield.svg";
import autumnLeaf from "../../assets/icons/autumn-leaf.svg";
import autumnDroplet from "../../assets/icons/autumn-droplet.svg";
import autumnScissors from "../../assets/icons/autumn-scissors.svg";
import autumnThermometer from "../../assets/icons/autumn-thermometer.svg";
import winterCloudSnow from "../../assets/icons/winter-cloud-snow.svg";
import winterDroplet from "../../assets/icons/winter-droplet.svg";
import winterMoon from "../../assets/icons/winter-moon.svg";
import winterShield from "../../assets/icons/winter-shield.svg";

export type CareTip = {
  icon: string;
  label: string;
};

export type Season = {
  key: "spring" | "summer" | "autumn" | "winter";
  name: string;
  months: string;
  headerIcon: string;
  tips: CareTip[];
};

export const seasons: Season[] = [
  {
    key: "spring",
    name: "Spring",
    months: "March–May",
    headerIcon: springSun,
    tips: [
      { icon: springDroplet, label: "Water every 3 days" },
      { icon: springLeaf, label: "Add fertilizer" },
      { icon: springZap, label: "Move to bright light" },
    ],
  },
  {
    key: "summer",
    name: "Summer",
    months: "June–August",
    headerIcon: summerSun,
    tips: [
      { icon: summerDroplet, label: "Water daily" },
      { icon: summerWind, label: "Increase air circulation" },
      { icon: summerShield, label: "Protect from heat" },
    ],
  },
  {
    key: "autumn",
    name: "Autumn",
    months: "September–November",
    headerIcon: autumnLeaf,
    tips: [
      { icon: autumnDroplet, label: "Reduce watering" },
      { icon: autumnScissors, label: "Prune old growth" },
      { icon: autumnThermometer, label: "Watch temperature" },
    ],
  },
  {
    key: "winter",
    name: "Winter",
    months: "December–February",
    headerIcon: winterCloudSnow,
    tips: [
      { icon: winterDroplet, label: "Water sparingly" },
      { icon: winterMoon, label: "Reduce light" },
      { icon: winterShield, label: "Protect from drafts" },
    ],
  },
];
