import { useState } from "react";
import { LightDarkToggle } from 'react-light-dark-toggle';
import "./Navbar.css";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className="navbar-container">
            <div className="navbar-background"></div>
            <nav
                className={`navbar navbar-expand-lg custom-navbar ${darkMode ? "dark-mode" : "light-mode"
                    }`}
            >
                <div className="container-fluid custom-navbar-container">
                    <a className="navbar-brand logo-container pe-3 me-3 border-end" href="/">
                        {darkMode ? (
                            <img src="/assets/images/logo.png" alt="Cultark Logo" className="navbar-logo" />
                        ) : (
                            <img src="/assets/images/logo_light.png" alt="Cultark Logo" className="navbar-logo" />
                        )}
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                        <ul className="navbar-nav mx-auto custom-nav-links">
                            {["HOME", "ABOUT US", "CASE STUDIES", "SERVICES ▾", "BLOG", "CAREERS"].map(
                                (label, i) => (
                                    <li className="nav-item" key={i}>
                                        <a
                                            className={`nav-link ${i === 0 ? "active-link" : ""}`}
                                            href={`#${label.toLowerCase().replace(/ ▾/, "").replace(/ /g, "-")}`}
                                        >
                                            {label}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>

                        <div className="d-flex align-items-center gap-3"
                            style={{ marginRight: "20px", borderLeft: "1px solid #ccc", borderRight: "1px solid #ccc", padding: "20px" }}
                        >
                            <div className="form-check form-switch">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="darkModeSwitch"
                                    checked={darkMode}
                                    onChange={() => setDarkMode(!darkMode)}
                                />
                                <label className="form-check-label" htmlFor="darkModeSwitch">
                                    {darkMode ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                                            <path d="M21.752 15.002A9.718 9.718 0 0112.5 22C6.71 22 2 17.29 2 11.5 2 7.43 4.536 3.95 8.272 2.338a1 1 0 011.356 1.086A9.717 9.717 0 0012.5 20a9.72 9.72 0 009.252-5.672z" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0000ff" viewBox="0 0 24 24">
                                            <path d="M12 4.354a1 1 0 011-1h0a1 1 0 110 2h0a1 1 0 01-1-1zM12 18.354a1 1 0 011-1h0a1 1 0 110 2h0a1 1 0 01-1-1zM4.222 6.222a1 1 0 011.414-1.414h0a1 1 0 01-1.414 1.414zM17.364 19.364a1 1 0 011.414-1.414h0a1 1 0 11-1.414 1.414zM4.222 18.364a1 1 0 011.414 1.414h0a1 1 0 11-1.414-1.414zM17.364 5.222a1 1 0 011.414 1.414h0a1 1 0 11-1.414-1.414zM3 12.354a1 1 0 011-1h0a1 1 0 110 2h0a1 1 0 01-1-1zM21 12.354a1 1 0 011-1h0a1 1 0 110 2h0a1 1 0 01-1-1zM12 8.354a4 4 0 100 8 4 4 0 000-8z" />
                                        </svg>
                                    )}
                                </label>
                            </div>
                        </div>

                        <a href="#contact" className="nav-link contact-us fw-bold">
                            CONTACT US
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
