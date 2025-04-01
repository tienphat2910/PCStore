import { useNavigate } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";

const PrivacyPolicyPage = () => {
    const navigate = useNavigate();
    useScrollToTop();

    return (
        <div
            style={{
                backgroundColor: "rgba(255, 255, 255, 1)",
                display: "flex",
                flexDirection: "column",
                margin: '30px 0',
                overflow: "hidden",
                paddingBottom: "30px"
            }}
        >
            {/* Ảnh trên cùng */}
            <aside
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    padding: "20px 0",
                }}
            >
                <img
                    src="https://dataprivacymanager.net/wp-content/uploads/2020/12/Tips-for-Easy-to-Understand-Website-Privacy-Policy-Writing-1.png"
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    }}
                />
            </aside>

            {/* Nội dung chính trong khung */}
            <main
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    padding: "20px",
                    backgroundColor: "#f9f9f9",  // Màu nền khung
                    borderRadius: "8px",  // Viền bo tròn
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",  // Đổ bóng cho khung
                    marginTop: "20px", // Điều chỉnh khoảng cách với phần ảnh
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
                        <span
                            style={{ fontWeight: "400", color: "rgba(0,0,0,1)", cursor: "pointer" }}
                            onClick={() => navigate('/')}
                        >
                            Home
                        </span>
                        <span style={{ fontWeight: "400", color: "rgba(1,86,255,1)" }}> › </span>
                        <span style={{ fontWeight: "400", color: "rgba(0,0,0,1)" }}> Chính sách bảo mật</span>
                    </div>
                </nav>

                <h1 style={{ fontSize: "32px", marginTop: "20px", marginBottom: "30px" }}>Chính sách bảo mật</h1>

                <div style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.6" }}>
                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>1. Thông tin chúng tôi thu thập</h2>
                        <p>Chúng tôi thu thập thông tin cá nhân của khách hàng bao gồm:</p>
                        <ul>
                            <li>Họ và tên</li>
                            <li>Địa chỉ email</li>
                            <li>Số điện thoại</li>
                            <li>Địa chỉ giao hàng và thanh toán</li>
                            <li>Lịch sử giao dịch trên website</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>2. Mục đích sử dụng thông tin</h2>
                        <p>Chúng tôi sử dụng thông tin cá nhân của bạn để:</p>
                        <ul>
                            <li>Xử lý đơn hàng và thanh toán</li>
                            <li>Liên hệ hỗ trợ và chăm sóc khách hàng</li>
                            <li>Gửi thông tin khuyến mãi (nếu bạn đồng ý)</li>
                            <li>Cải thiện chất lượng dịch vụ và trải nghiệm người dùng</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>3. Chia sẻ thông tin</h2>
                        <p>Chúng tôi cam kết bảo vệ thông tin cá nhân và chỉ chia sẻ khi cần thiết với:</p>
                        <ul>
                            <li>Đối tác vận chuyển để giao hàng</li>
                            <li>Nhà cung cấp dịch vụ thanh toán</li>
                            <li>Cơ quan pháp luật khi có yêu cầu</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>4. Bảo mật dữ liệu</h2>
                        <p>Chúng tôi áp dụng các biện pháp bảo mật để đảm bảo an toàn cho dữ liệu cá nhân của khách hàng:</p>
                        <ul>
                            <li>Mã hóa dữ liệu khi truyền tải</li>
                            <li>Chỉ nhân viên có thẩm quyền mới được truy cập</li>
                            <li>Không lưu trữ thông tin thẻ thanh toán</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>5. Quyền của khách hàng</h2>
                        <p>Khách hàng có quyền:</p>
                        <ul>
                            <li>Yêu cầu truy cập và chỉnh sửa thông tin cá nhân</li>
                            <li>Yêu cầu xóa thông tin khi không còn sử dụng</li>
                            <li>Hủy đăng ký nhận tin tức và khuyến mãi</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>6. Liên hệ</h2>
                        <p>Quý khách có thể liên hệ với chúng tôi để được hỗ trợ về chính sách bảo mật:</p>
                        <p>Email: privacy@pcstore.com</p>
                        <p>Hotline: (123) 456-7890</p>
                        <p>Địa chỉ: 12 Nguyễn Văn Bảo, Phường 04, Quận Gò Vấp, TP.HCM</p>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default PrivacyPolicyPage;
