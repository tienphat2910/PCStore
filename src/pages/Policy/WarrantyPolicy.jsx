import { useNavigate } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";

const WarrantyPolicyPage = () => {
    const navigate = useNavigate();
    useScrollToTop();

    return (
        <div style={{ backgroundColor: "#f8f9fa", padding: "40px 0" }}>
            <main
                style={{
                    width: "100%",
                    maxWidth: "1400px",
                    margin: "0 auto",
                    backgroundColor: "#fff",
                    padding: "50px",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
            >
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb">
                    <div
                        style={{
                            color: "#888",
                            fontSize: "14px",
                            fontFamily: "Poppins, sans-serif",
                            marginBottom: "20px",
                        }}
                    >
                        <span
                            style={{
                                fontWeight: "500",
                                color: "#007bff",
                                cursor: "pointer",
                                transition: "color 0.2s ease-in-out",
                            }}
                            onClick={() => navigate("/")}
                            onMouseOver={(e) => (e.target.style.color = "#0056b3")}
                            onMouseOut={(e) => (e.target.style.color = "#007bff")}
                        >
                            Home
                        </span>
                        <span style={{ margin: "0 5px", color: "#aaa" }}>›</span>
                        <span style={{ fontWeight: "500", color: "#333" }}>Chính sách bảo hành</span>
                    </div>
                </nav>

                {/* Tiêu đề */}
                <h1 style={{ fontSize: "32px", color: "#222", marginBottom: "30px" }}>Chính sách bảo hành</h1>

                {/* Hình minh họa */}
                <img
                    src="https://www.privacypolicies.com/public/uploads/2022/11/sample-warranty-policy-template.jpg"
                    alt="Warranty Policy"
                    style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "10px",
                        marginBottom: "30px",
                        boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.1)",
                    }}
                />

                <div style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.8", color: "#444" }}>
                    {/* Điều kiện bảo hành */}
                    <section style={sectionStyle}>
                        <h2 style={headingStyle}>1. Điều kiện bảo hành</h2>
                        <p>Sản phẩm được bảo hành khi đáp ứng các điều kiện sau:</p>
                        <ul style={listStyle}>
                            <li>Còn trong thời gian bảo hành</li>
                            <li>Có phiếu bảo hành hoặc hóa đơn mua hàng</li>
                            <li>Không bị lỗi do người dùng gây ra</li>
                            <li>Không bị tháo dỡ, sửa chữa trái phép</li>
                        </ul>
                    </section>

                    {/* Thời gian bảo hành */}
                    <section style={sectionStyle}>
                        <h2 style={headingStyle}>2. Thời gian bảo hành</h2>
                        <p>Thời gian bảo hành tùy thuộc vào từng loại sản phẩm:</p>
                        <ul style={listStyle}>
                            <li>Laptop: 12-24 tháng</li>
                            <li>Máy tính để bàn: 12-36 tháng</li>
                            <li>Phụ kiện: 3-12 tháng</li>
                        </ul>
                    </section>

                    {/* Quy trình bảo hành */}
                    <section style={sectionStyle}>
                        <h2 style={headingStyle}>3. Quy trình bảo hành</h2>
                        <p>Quy trình bảo hành bao gồm các bước:</p>
                        <ul style={listStyle}>
                            <li>Tiếp nhận sản phẩm và kiểm tra tình trạng</li>
                            <li>Xác định nguyên nhân lỗi</li>
                            <li>Thực hiện sửa chữa hoặc thay thế</li>
                            <li>Kiểm tra chất lượng sau sửa chữa</li>
                            <li>Bàn giao sản phẩm cho khách hàng</li>
                        </ul>
                    </section>

                    {/* Các trường hợp không được bảo hành */}
                    <section style={sectionStyle}>
                        <h2 style={headingStyle}>4. Các trường hợp không được bảo hành</h2>
                        <p>Chúng tôi không bảo hành trong các trường hợp:</p>
                        <ul style={listStyle}>
                            <li>Sản phẩm bị hỏng do thiên tai, hỏa hoạn</li>
                            <li>Sản phẩm bị tháo dỡ, sửa chữa trái phép</li>
                            <li>Sản phẩm bị hỏng do sử dụng sai mục đích</li>
                            <li>Sản phẩm bị mất phiếu bảo hành</li>
                        </ul>
                    </section>

                    {/* Liên hệ bảo hành */}
                    <section style={sectionStyle}>
                        <h2 style={headingStyle}>5. Liên hệ bảo hành</h2>
                        <p>Quý khách có thể liên hệ bảo hành qua:</p>
                        <p style={{ fontWeight: "bold", color: "#007bff" }}>Email: warranty@pcstore.com</p>
                        <p style={{ fontWeight: "bold", color: "#007bff" }}>Hotline: (123) 456-7890</p>
                        <p style={{ fontWeight: "bold", color: "#007bff" }}>
                            Địa chỉ: 12 Nguyễn Văn Bảo, Phường 04, Quận Gò Vấp, TP.HCM
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
};

// Styles
const sectionStyle = {
    marginBottom: "40px",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.05)",
};

const headingStyle = {
    fontSize: "24px",
    marginBottom: "15px",
    color: "#333",
};

const listStyle = {
    paddingLeft: "20px",
    listStyleType: "disc",
};

export default WarrantyPolicyPage;
