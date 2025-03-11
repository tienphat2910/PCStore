import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();
    const categories = [
        "Laptops",
        "Desktop PCs",
        "Networking Devices",
        "Printers & Scanners",
        "PC Parts",
        "All Other Products",
        "Repairs",
    ];

    return (
        <div
            className="container-fluid"
            style={{
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                backgroundColor: '#fff',
            }}>
            <div
                className="container"
                style={{
                    width: "100%",
                    padding: "10px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}>
                {/* Logo */}
                <Link to="/" className="text-black fw-bold" style={{ fontSize: "20px" }}>
                    PCStore
                </Link>

                {/* Conditional Rendering */}
                {!showSearch ? (
                    // Categories Section
                    <div
                        style={{
                            display: "flex",
                            gap: "20px",
                            flexGrow: 1,
                            justifyContent: "center",
                        }}
                    >
                        {categories.map((category, index) => (
                            <Link to="/catalog"
                                key={index}
                                style={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    cursor: "pointer",
                                    color: "#000",
                                }}
                                onMouseOver={(e) => (e.target.style.color = "#9933CC")}
                                onMouseOut={(e) => (e.target.style.color = "#000")}
                            >
                                {category}
                            </Link>
                        ))}
                    </div>
                ) : (
                    // Search Input Section
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "#fff",
                            borderRadius: "25px",
                            padding: "10px 20px",
                            flexGrow: 1,
                            marginLeft: "20px",
                            transition: "all 0.3s ease-in-out",
                            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <CiSearch size={20} color="#000" style={{ marginRight: "10px" }} />
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            style={{
                                border: "none",
                                outline: "none",
                                width: "100%",
                                fontSize: "14px",
                                backgroundColor: "transparent",
                                color: "#000",
                            }}
                            autoFocus
                        />
                    </div>
                )}

                {/* Icons */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        marginLeft: "20px",
                    }}
                >
                    {showSearch ? (
                        <AiOutlineClose
                            size={24}
                            color="#000"
                            style={{ cursor: "pointer" }}
                            onClick={() => setShowSearch(false)}
                        />
                    ) : (
                        <CiSearch
                            size={24}

                            style={{ cursor: "pointer" }}
                            onClick={() => setShowSearch(true)}
                        />
                    )}
                    <FiShoppingCart size={24} style={{ cursor: "pointer" }}
                        onClick={() => navigate('/cart')}
                    />

                    {/* Nút Đăng nhập và Đăng ký */}
                    <button
                        className="btn"
                        style={{
                            fontSize: "14px",
                            borderRadius: "20px",
                            border: "1px solid black", // Viền đen
                            color: "black", // Chữ đen
                            fontWeight: "bold", // Chữ đen
                        }}
                        onClick={() => navigate("/login")}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#9933CC"; // Màu nền hover
                            e.target.style.borderColor = "#9933CC"; // Viền hover
                            e.target.style.color = "white"; // Màu chữ hover
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent"; // Màu nền trở lại ban đầu
                            e.target.style.borderColor = "black"; // Viền trở lại ban đầu
                            e.target.style.color = "black"; // Chữ trở lại ban đầu
                        }}
                    >
                        Sign in
                    </button>
                    <button
                        className="btn"
                        style={{
                            fontSize: "14px",
                            borderRadius: "20px",
                            border: "1px solid black", // Viền đen
                            color: "black",
                            fontWeight: "bold", // Chữ đen
                        }}
                        onClick={() => navigate("/signup")}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#9933CC"; // Màu nền hover
                            e.target.style.borderColor = "#9933CC"; // Viền hover
                            e.target.style.color = "white"; // Màu chữ hover
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent"; // Màu nền trở lại ban đầu
                            e.target.style.borderColor = "black"; // Viền trở lại ban đầu
                            e.target.style.color = "black"; // Chữ trở lại ban đầu
                        }}
                    >
                        Sign up
                    </button>


                </div>
            </div>
        </div>
    );
};

export default Navigation;
