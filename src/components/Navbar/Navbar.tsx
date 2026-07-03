import './Navbar.css'
import notificationIcon from "../../assets/nav_bar_icons/notification.svg"
import heartIcon from "../../assets/nav_bar_icons/heart.svg"
import basketIcon from "../../assets/nav_bar_icons/basket.svg"

const tabs = ["Home", "Categories", "Blog", "Contacts", "About us"];

type IconButtonProps = {
    name: string;
    iconAsset: string;
    hasRedDot: boolean;
}

const iconButtons: IconButtonProps[] = [
    {
        name: "Notification",
        iconAsset: notificationIcon,
        hasRedDot: true,
    },
    {
        name: "Heart",
        iconAsset: heartIcon,
        hasRedDot: false,
    },
    {
        name: "Basket",
        iconAsset: basketIcon,
        hasRedDot: false,
    }
]

function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <PageTitleAndTabs />
                <IconButtons />
            </nav>
        </header>
    )
}

function PageTitleAndTabs() {
    return (
        <div className="page-title-and-tabs">
            <PageTitle />
            <Tabs />
        </div>
    )
}

function PageTitle() {
    return (
        <span className="page-title">Plantified</span>
    )
}

function Tabs() {
    return (
        <ul className="tabs">
            {tabs.map((tab) => (
                <Tab key={tab} tab={tab} isSelected={tab === "Home"} />
            ))}
        </ul>
    )
}

function Tab({ tab, isSelected }: { tab: string, isSelected: boolean }) {
    return (
        <li className={`tab ${isSelected ? "selected" : ""}`}>
            {tab}
            {isSelected && <div className="tab-indicator-line"></div>}
        </li>
    )
}

function IconButtons() {
    return (
        <div className="icon-buttons">
            {iconButtons.map((iconButton) => (
                <IconButton key={iconButton.name} iconButton={iconButton} />
            ))}
        </div>
    )
}

function IconButton({ iconButton }: { iconButton: IconButtonProps }) {
    return (
        <button className="icon-button-container" type="button">
            <img className="icon-button" src={iconButton.iconAsset} alt={iconButton.name} />
            {iconButton.hasRedDot && <div className="red-dot"></div>}
        </button>
    )
}

export default Navbar;