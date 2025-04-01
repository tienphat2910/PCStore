import { useNavigate } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";

const InstallmentGuide = () => {
    const navigate = useNavigate();
    useScrollToTop();

    return (
        <div
            style={{
                backgroundColor: "rgba(255, 255, 255, 1)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                margin: '30px 0',
                fontFamily: "Poppins, sans-serif", // Custom font
                width: "100%", // Full width
                padding: "0 20px", // Add padding to prevent content from touching the edges
            }}
        >
            <main
                style={{
                    alignSelf: "center",
                    display: "flex",
                    marginTop: "20px",
                    width: "100%",
                    maxWidth: "1200px", // Max width to keep readability
                    flexDirection: "column",
                    alignItems: "start",
                    marginLeft: "auto",
                    marginRight: "auto", // Center the content
                }}
                className="container"
            >
                <nav aria-label="Breadcrumb">
                    <div
                        style={{
                            color: "rgba(163, 163, 163, 1)",
                            textAlign: "center",
                            font: "300 12px Poppins, sans-serif",
                        }}
                    >
                        <span style={{ fontWeight: "400", color: "rgba(0,0,0,1)", cursor: "pointer" }} onClick={() => navigate('/')}>Home </span>
                        <span style={{ fontWeight: "400", color: "rgba(1,86,255,1)" }}>›</span>
                        <span style={{ fontWeight: "400", color: "rgba(0,0,0,1)" }}> Hướng dẫn trả góp</span>
                    </div>
                </nav>

                <h1 style={{ fontSize: "32px", marginTop: "20px", marginBottom: "30px", color: "#333", fontWeight: "600" }}>Hướng dẫn trả góp</h1>

                <div style={{ lineHeight: "1.6" }}>
                    {/* Section 1 */}
                    <section style={{ marginBottom: "30px", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "#0056b3", display: "flex", alignItems: "center" }}>
                            <img src="https://img.icons8.com/ios-filled/50/0056b3/checked.png" alt="checked icon" style={{ width: "24px", marginRight: "10px" }} />
                            Điều kiện trả góp
                        </h2>
                        <ul>
                            <li>Đơn hàng có giá trị từ 5 triệu đồng trở lên</li>
                            <li>Khách hàng từ 18 tuổi trở lên</li>
                            <li>Có giấy tờ tùy thân hợp lệ</li>
                            <li>Có thu nhập ổn định</li>
                            <li>Không có nợ xấu tại ngân hàng</li>
                        </ul>
                    </section>

                    {/* Section 2 */}
                    <section style={{ marginBottom: "30px", padding: "20px", backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "#0056b3", display: "flex", alignItems: "center" }}>
                            <img src="https://img.icons8.com/ios-filled/50/0056b3/file.png" alt="file icon" style={{ width: "24px", marginRight: "10px" }} />
                            Thủ tục trả góp
                        </h2>
                        <p>Hồ sơ cần chuẩn bị:</p>
                        <ul>
                            <li>CMND/CCCD (bản gốc)</li>
                            <li>Sổ hộ khẩu hoặc giấy tờ chứng minh nơi cư trú</li>
                            <li>Giấy tờ chứng minh thu nhập</li>
                            <li>Sao kê tài khoản ngân hàng (nếu có)</li>
                        </ul>
                        <p style={{ marginTop: "10px" }}>Quy trình xét duyệt:</p>
                        <ol>
                            <li>Đăng ký trả góp tại cửa hàng</li>
                            <li>Nộp hồ sơ và chờ xét duyệt</li>
                            <li>Ký hợp đồng trả góp</li>
                            <li>Nhận hàng và bắt đầu trả góp</li>
                        </ol>
                    </section>

                    {/* Section 3 */}
                    <section style={{ marginBottom: "30px", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "#0056b3", display: "flex", alignItems: "center" }}>
                            <img src="https://img.icons8.com/ios-filled/50/0056b3/savings.png" alt="savings icon" style={{ width: "24px", marginRight: "10px" }} />
                            Phương thức trả góp
                        </h2>
                        <p>Khách hàng có thể chọn các phương thức trả góp sau:</p>
                        <ul>
                            <li>Trả góp qua thẻ tín dụng</li>
                            <li>Trả góp qua tài khoản ngân hàng</li>
                            <li>Trả góp trực tiếp tại cửa hàng</li>
                        </ul>
                    </section>

                    {/* Section 4 */}
                    <section style={{ marginBottom: "30px", padding: "20px", backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "#0056b3", display: "flex", alignItems: "center" }}>
                            <img src="https://img.icons8.com/ios-filled/50/0056b3/money-bag.png" alt="money icon" style={{ width: "24px", marginRight: "10px" }} />
                            Lãi suất và phí
                        </h2>
                        <p>Thông tin về lãi suất và phí:</p>
                        <ul>
                            <li>Lãi suất: 0% - 1.5%/tháng tùy gói</li>
                            <li>Phí bảo hiểm: 1% giá trị đơn hàng</li>
                            <li>Phí trả chậm: 5% số tiền trả chậm</li>
                        </ul>
                    </section>

                    {/* Section 5 */}
                    <section style={{ marginBottom: "30px", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "#0056b3", display: "flex", alignItems: "center" }}>
                            <img src="https://img.icons8.com/ios-filled/50/0056b3/phone.png" alt="phone icon" style={{ width: "24px", marginRight: "10px" }} />
                            Liên hệ tư vấn
                        </h2>
                        <p>Để được tư vấn chi tiết về trả góp, vui lòng liên hệ:</p>
                        <p>Hotline: (123) 456-7890</p>
                        <p>Email: installment@pcstore.com</p>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default InstallmentGuide;
