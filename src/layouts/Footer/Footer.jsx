import IMAGES from "../../constants/images";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const footerLinks = {
    "THÔNG TIN": [
      { text: "Về chúng tôi", path: "/about-us" },
      { text: "Liên hệ", path: "/contact" },
      { text: "Hướng dẫn mua hàng", path: "/purchase-guide" },
      { text: "Hướng dẫn trả góp", path: "/installment-guide" },
      { text: "Hướng dẫn thanh toán", path: "/payment-guide" },
    ],
    "CHÍNH SÁCH": [
      { text: "Chính sách bảo mật", path: "/privacy-policy" },
      { text: "Chính sách bảo hành", path: "/warranty-policy" },
      { text: "Chính sách vận chuyển", path: "/shipping-policy" },
    ],
  };

  return (
    <footer className="bg-black text-white py-5">
      <div className="container">
        {/* Newsletter */}
        <div className="row align-items-center mb-4">
          <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
            <h2 className="fs-4 fw-bold">Đăng ký nhận bản tin</h2>
            <p className="fs-6">Trở thành người đầu tiên nhận ưu đãi mới nhất</p>
          </div>
          <div className="col-12 col-md-6">
            <form className="d-flex flex-column flex-sm-row gap-2 justify-content-center justify-content-md-end">
              <input
                type="email"
                className="form-control w-100 w-sm-auto py-2 px-3 rounded-3 border-0 bg-dark text-white"
                placeholder="Your Email"
                required
                onFocus={(e) => e.target.style.border = "1px solid #9933CC"} // Chỉnh border khi focus
                onBlur={(e) => e.target.style.border = "none"} // Xóa border khi blur
                style={{
                  transition: "all 0.3s ease",
                }}
              />
              <button
                type="submit"
                className="btn btn-primary px-4 py-2 rounded-3 mt-2 mt-sm-0"
                style={{
                  backgroundColor: "#9933CC",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#ff66cc"; // Màu nền khi hover
                  e.target.style.transform = "scale(1.05)"; // Phóng to khi hover
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#9933CC"; // Trả lại màu khi không hover
                  e.target.style.transform = "scale(1)"; // Trả lại kích thước
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Links */}
        <div className="row g-4">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-12 col-md-4">
              <h3 className="fs-6 fw-bold">{title}</h3>
              {links.map((link, index) => (
                <a key={index} onClick={() => navigate(link.path)} className="d-block text-white text-decoration-none small">
                  {link.text}
                </a>
              ))}
            </div>
          ))}

          {/* Address Section */}
          <div className="col-12 col-md-4">
            <h3 className="fs-6 fw-bold">ĐỊA CHỈ CỦA CHÚNG TÔI</h3>
            <p className="small">12 Nguyễn Văn Bảo, Gò Vấp, HCM</p>
            <p className="small">📞 <a href="tel:0376549230" className="text-white">+84-376-549-230</a></p>
            <p className="small">✉️ <a href="mailto:shop@email.com" className="text-white">shop@email.com</a></p>
          </div>
        </div>

        {/* Payment & Shipping */}
        <div className="row mt-4 text-center text-md-start">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <h3 className="fs-6 fw-bold">ĐƠN VỊ VẬN CHUYỂN</h3>
            <div className="d-flex gap-2 justify-content-center justify-content-md-start">
              <img src={IMAGES.EMS} alt="EMS" className="img-fluid" style={{ width: "50px" }} />
              <img src={IMAGES.GHN} alt="GHN" className="img-fluid" style={{ width: "50px" }} />
              <img src={IMAGES.NINJAVAN} alt="NINJAVAN" className="img-fluid" style={{ width: "50px" }} />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h3 className="fs-6 fw-bold">CÁCH THỨC THANH TOÁN</h3>
            <div className="d-flex gap-2 justify-content-center justify-content-md-start">
              <img src={IMAGES.CASH} alt="CASH" className="img-fluid" style={{ width: "40px" }} />
              <img src={IMAGES.MOMO} alt="MOMO" className="img-fluid" style={{ width: "40px" }} />
              <img src={IMAGES.VISA} alt="VISA" className="img-fluid" style={{ width: "40px" }} />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-top mt-4 pt-3 text-center small text-secondary">
          © 2025 PCStore. All Rights Reserved.
        </div>
      </div>
    </footer>


  );
};

export default Footer;
