import { useNavigate } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";

const PrivacyPolicy = () => {
    const navigate = useNavigate();
    useScrollToTop();

    return (
        <div
            style={{
                backgroundColor: "rgba(255, 255, 255, 1)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                margin: '30px 0'
            }}
        >
            <main
                style={{
                    alignSelf: "center",
                    display: "flex",
                    marginTop: "20px",
                    width: "100%",
                    maxWidth: "1200px",
                    flexDirection: "column",
                    alignItems: "start",
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
                        <span style={{ fontWeight: "400", color: "rgba(0,0,0,1)" }}> Chính sách bảo mật</span>
                    </div>
                </nav>

                <h1 style={{ fontSize: "32px", marginTop: "20px", marginBottom: "30px" }}>Chính sách bảo mật</h1>

                <div style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.6" }}>
                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>1. Thông tin chúng tôi thu thập</h2>
                        <p>Chúng tôi thu thập thông tin mà bạn cung cấp trực tiếp cho chúng tôi, bao gồm:</p>
                        <ul>
                            <li>Tên và thông tin liên hệ</li>
                            <li>Địa chỉ thanh toán và giao hàng</li>
                            <li>Thông tin thanh toán</li>
                            <li>Lịch sử đơn hàng</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>2. Cách chúng tôi sử dụng thông tin</h2>
                        <p>Chúng tôi sử dụng thông tin thu thập để:</p>
                        <ul>
                            <li>Xử lý đơn hàng và thanh toán của bạn</li>
                            <li>Liên hệ với bạn về đơn hàng và dịch vụ</li>
                            <li>Gửi thông tin marketing (với sự đồng ý của bạn)</li>
                            <li>Cải thiện website và dịch vụ của chúng tôi</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>3. Chia sẻ thông tin</h2>
                        <p>Chúng tôi không bán thông tin cá nhân của bạn. Chúng tôi có thể chia sẻ thông tin với:</p>
                        <ul>
                            <li>Nhà cung cấp dịch vụ hỗ trợ hoạt động</li>
                            <li>Cơ quan thực thi pháp luật khi được yêu cầu</li>
                            <li>Đối tác kinh doanh với sự đồng ý của bạn</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>4. Bảo mật dữ liệu</h2>
                        <p>Chúng tôi thực hiện các biện pháp bảo mật phù hợp để bảo vệ thông tin cá nhân của bạn khỏi truy cập, thay đổi, tiết lộ hoặc phá hủy trái phép.</p>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>5. Quyền của bạn</h2>
                        <p>Bạn có quyền:</p>
                        <ul>
                            <li>Truy cập thông tin cá nhân của bạn</li>
                            <li>Sửa thông tin không chính xác</li>
                            <li>Yêu cầu xóa thông tin của bạn</li>
                            <li>Từ chối nhận thông tin marketing</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>6. Liên hệ</h2>
                        <p>Nếu bạn có bất kỳ câu hỏi nào về Chính sách Bảo mật này, vui lòng liên hệ với chúng tôi:</p>
                        <p>Email: privacy@pcstore.com</p>
                        <p>Hotline: (123) 456-7890</p>
                        <p>Địa chỉ: 12 Nguyễn Văn Bảo, Phường 04, Quận Gò Vấp, TP.HCM</p>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>7. Cập nhật chính sách</h2>
                        <p>Chúng tôi có thể cập nhật Chính sách Bảo mật này theo thời gian. Chúng tôi sẽ thông báo cho bạn về bất kỳ thay đổi nào bằng cách đăng Chính sách Bảo mật mới trên trang này.</p>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default PrivacyPolicy;
