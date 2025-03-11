import { useState, useEffect } from "react";
import Navigation from "./Navigation";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Phần Header */}
      <header className="bg-dark text-white py-3">
        <div className="container d-flex justify-content-between align-items-center">

          {/* Góc trái: Ngày & Giờ */}
          <div className="d-flex align-items-center gap-2">
            <span>Mon-Thu: 9:00 AM - 5:30 PM</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/70122338c4f8b9fbc27c3c2fa943264aadc19470f1829739d971828944e51456"
              alt=""
              className="img-fluid"
              style={{ width: "16px", objectFit: "contain" }}
            />
          </div>

          {/* Ở giữa: Địa chỉ + Contact Us */}
          <div className="d-flex text-center align-items-center gap-3">
            <span className="d-flex" style={{ fontSize: "14px", color: "#ACACAC" }}>
              Visit our showroom in 12 Nguyen Van Bao, Ward 4, Go Vap District, Ho Chi Minh City
            </span>
            <div className="d-flex flex-column align-items-center">
              <span style={{ fontSize: "14px" }}>Contact Us</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/412b8bf4e091415e1b80f6f19ef50c432c93c9f4914bef9ea6ea1e42ae365b7d"
                alt=""
                className="img-fluid"
                style={{ width: "69px", objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Góc phải: Call Us + Icon */}
          <div className="d-flex align-items-center gap-2">
            <span>Call Us: +84-376-549-230</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d92b3bc2d46dd318876b6ab34a06229309543bc9ba202265c4c42e9df27e47df"
              alt=""
              className="img-fluid"
              style={{ width: "20px", objectFit: "contain" }}
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/da6579f57118492c480f0f5271ff6e8cfba343be79823a662e9a13c4ee20af93"
              alt=""
              className="img-fluid"
              style={{ width: "20px", objectFit: "contain" }}
            />
          </div>
        </div>
      </header>

      {/* Thanh Navigation cố định khi scroll */}
      <div
        style={{
          position: isSticky ? "fixed" : "static",
          top: isSticky ? "0" : "auto",
          width: "100%",
          zIndex: "1000",
        }}
      >
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
