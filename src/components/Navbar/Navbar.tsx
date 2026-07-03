import './Navbar.css'
import { tabs } from './navbar.data'
import { IconButtons } from './IconButton'
import { Tabs } from './Tab'
import { iconButtons } from "./navbar.data"

function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <PageTitleAndTabs />
                <IconButtons iconButtons={iconButtons} />
            </nav>
        </header>
    )
}

function PageTitleAndTabs() {
    return (
        <div className="page-title-and-tabs">
            <span className="page-title">Plantified</span>
            <Tabs tabs={tabs} />
        </div>
    )
}

export default Navbar;