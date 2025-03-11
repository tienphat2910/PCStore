import IMAGES from "../../constants/images";

const Footer = () => {
  const footerLinks = {
    "THÔNG TIN": [
      "Về chúng tôi",
      "Liên hệ",
      "Hướng dẫn mua hàng",
      "Hướng dẫn trả góp",
      "Hướng dẫn thanh toán",
    ],
    "CHÍNH SÁCH": [
      "Chính sách bảo mật",
      "Chính sách bảo hành",
      "Chính sách vận chuyển",
    ],

  };

  return (
    <footer
      style={{
        backgroundColor: "#000",
        padding: "10px 20px",
        color: "white",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Newsletter Section */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "left", // Căn trái cho phần text
          marginBottom: "40px",
          display: "flex", // Dùng flexbox để chia layout
          justifyContent: "space-between", // Căn phần text và form sang hai bên
          alignItems: "center", // Căn giữa dọc
        }}
      >
        <div className="mt-4">
          <h2 style={{ fontSize: "28px", fontWeight: "600", marginBottom: "10px" }}>
            Đăng ký nhận bản tin của chúng tôi
          </h2>
          <p style={{ fontSize: "16px", marginBottom: "20px" }}>
            Trở thành người đầu tiên biết về những ưu đãi mới nhất
          </p>
        </div>

        <form
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            justifyContent: "flex-end", // Căn phải cho phần input và button
            maxWidth: "100%", // Đảm bảo form không vượt quá chiều rộng container
          }}
        >
          <input
            type="email"
            placeholder="Your Email"
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              border: "1px solid #fff",
              backgroundColor: "#000",
              color: "white",
              fontSize: "14px",
              width: "250px",
              maxWidth: "100%",
            }}
            required
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#9933CC",
              color: "white",
              padding: "10px 25px",
              borderRadius: "5px",
              border: "none",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "all 0.3s ease", // Hiệu ứng chuyển mượt mà
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#ff66cc"; // Màu nền khi hover
              e.target.style.transform = "scale(1.05)"; // Phóng to khi hover
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#9933CC"; // Màu nền trở lại khi không hover
              e.target.style.transform = "scale(1)"; // Trả lại kích thước ban đầu
            }}
          >
            Subscribe
          </button>
        </form>
      </div>



      {/* Footer Links */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} style={{ flex: "1", minWidth: "200px" }}>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              {title}
            </h3>
            {links.map((link, index) => (
              <a
                key={index}
                href="#"
                style={{
                  color: "white",
                  textDecoration: "none",
                  display: "block",
                  fontSize: "14px",
                  marginBottom: "8px",
                }}
              >
                {link}
              </a>
            ))}
          </div>
        ))}
        {/* Address Section */}
        <div style={{ display: "flex", flexDirection: "column", marginBottom: "40px" }}>
          {/* Địa chỉ */}
          <div style={{ flex: "1", minWidth: "200px", marginBottom: "40px" }}>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              ĐỊA CHỈ CỦA CHÚNG TÔI
            </h3>
            <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
              Địa chỉ: 12 Nguyễn Văn Bảo, Phường 04, Quận Gò Vấp, Thành phố Hồ Chí Minh, Việt Nam<br />
              Phones:{" "}
              <a
                href="tel:0376549230"
                style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}
              >
                +84-376-549-230
              </a>
              <br />
              Email:{" "}
              <a
                href="mailto:shop@email.com"
                style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}
              >
                shop@email.com
              </a>
            </p>
          </div>

          {/* Đơn vị vận chuyển và Cách thức thanh toán */}
          <div
            style={{
              display: "flex",
              flexDirection: "column", // Column layout
              gap: "20px",
              justifyContent: "space-between",
            }}
          >
            {/* Đơn vị vận chuyển */}
            <div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                ĐƠN VỊ VẬN CHUYỂN
              </h3>
              <div style={{ display: "flex", gap: "5px" }}>
                <img src={IMAGES.EMS} alt="EMS" style={{ width: "50px", objectFit: "contain" }} />
                <img src={IMAGES.GHN} alt="GHN" style={{ width: "50px", objectFit: "contain" }} />
                <img src={IMAGES.NINJAVAN} alt="NINJAVAN" style={{ width: "50px", objectFit: "contain" }} />
                <img src={IMAGES.LEX} alt="LEX" style={{ width: "50px", objectFit: "contain" }} />
              </div>
            </div>

            {/* Cách thức thanh toán */}
            <div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                CÁCH THỨC THANH TOÁN
              </h3>
              <div style={{ display: "flex", gap: "10px" }}>
                <img src={IMAGES.CASH} alt="CASH" style={{ width: "50px", objectFit: "contain" }} />
                <img src={IMAGES.MOMO} alt="MOMO" style={{ width: "50px", objectFit: "contain" }} />
                <img src={IMAGES.VISA} alt="VISA" style={{ width: "50px", objectFit: "contain" }} />
                <img src={IMAGES.MASTER} alt="MASTER" style={{ width: "50px", objectFit: "contain" }} />
                <img src={IMAGES.VNPAY} alt="VNPAY" style={{ width: "50px", objectFit: "contain" }} />
                <img src={IMAGES.ZALOPAY} alt="ZALOPAY" style={{ width: "50px", objectFit: "contain" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          paddingTop: "20px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "14px", color: "#888" }}>
          Copyright © 2025 Solomon Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;
