
export function Tabs({ tabs }: { tabs: string[] }) {
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