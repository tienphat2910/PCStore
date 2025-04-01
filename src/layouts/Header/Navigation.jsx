import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const categories = [
        "Laptops", "Desktop PCs", "Networking Devices",
        "Printers & Scanners", "PC Parts", "All Other Products", "Repairs"
    ];

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div className="container">
                {/* Logo */}
                <Link to="/" className="navbar-brand fw-bold">PCStore</Link>

                {/* Toggle Button for Mobile */}
                <button className="navbar-toggler" type="button" onClick={() => setShowMenu(!showMenu)}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${showMenu ? "show" : ""}`}>
                    {!showSearch ? (
                        <ul className="navbar-nav mx-auto">
                            {categories.map((category, index) => (
                                <li className="nav-item" key={index}>
                                    <Link className="nav-link fw-semibold text-dark" to="/catalog"
                                        onMouseOver={(e) => e.target.style.color = "#9933CC"}
                                        onMouseOut={(e) => e.target.style.color = "#000"}>
                                        {category}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="d-flex align-items-center w-100 px-3">
                            <CiSearch size={20} className="me-2" />
                            <input type="text" className="form-control border-0" placeholder="What are you looking for?" autoFocus />
                        </div>
                    )}
                </div>

                {/* Icons & Auth Buttons */}
                <div className="d-flex align-items-center gap-3">
                    {showSearch ? (
                        <AiOutlineClose size={24} className="cursor-pointer" onClick={() => setShowSearch(false)} />
                    ) : (
                        <CiSearch size={24} className="cursor-pointer" onClick={() => setShowSearch(true)} />
                    )}
                    <FiShoppingCart size={24} className="cursor-pointer" onClick={() => navigate('/cart')} />

                    {/* Auth Buttons */}
                    <button className="btn btn-outline-dark rounded-pill px-3 fw-bold" onClick={() => navigate("/login")}>Sign in</button>
                    <button className="btn btn-outline-dark rounded-pill px-3 fw-bold" onClick={() => navigate("/signup")}>Sign up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
