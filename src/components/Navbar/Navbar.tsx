import "./Navbar.css"
import type { Page } from "../../types/page";

interface NavbarProps {
    onNavigate: (page: Page) => void;
}
function Navbar({ onNavigate }: NavbarProps) {
    function tohome() {
        onNavigate("home")
    }
    function tosearch() {
        onNavigate("search")
    }
    return (
        <nav className="navbar">
            <h1 className="navbar-logo">RecsBase</h1>

            <ul className="navbar-links">
                <li onClick={tohome}>Home</li>
                <li>Movies</li>
                <li>TV Shows</li>
                <li onClick={tosearch}>Search</li>
                <li>Profile</li>
            </ul>
        </nav>
    );
}

export default Navbar;
