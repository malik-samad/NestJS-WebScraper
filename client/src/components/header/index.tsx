import "./header.css";
import "../inputField/inputField.css";

export default function Header() {
    return <div className="header-wrapper">
        <div className="header-inner-wrapper">
            <h2>Simpli Scrape</h2>
        </div>
        <div className="header-inner-wrapper">
            <a className="auth-btn click-effect" href="/auth/login">Log in</a>
        </div>
    </div>
}