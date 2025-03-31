import { useNavigate } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";

const PurchaseGuide = () => {
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
                        <span style={{ fontWeight: "400", color: "rgba(0,0,0,1)" }}> Hướng dẫn mua hàng</span>
                    </div>
                </nav>

                <h1 style={{ fontSize: "32px", marginTop: "20px", marginBottom: "30px" }}>Hướng dẫn mua hàng</h1>

                <div style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.6" }}>
                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>1. Cách đặt hàng</h2>
                        <p>Có 2 cách để đặt hàng:</p>
                        <ul>
                            <li>Đặt hàng trực tiếp trên website</li>
                            <li>Gọi điện thoại đặt hàng qua hotline</li>
                        </ul>
                        <p style={{ marginTop: "10px" }}>Các bước đặt hàng online:</p>
                        <ol>
                            <li>Chọn sản phẩm cần mua</li>
                            <li>Thêm vào giỏ hàng</li>
                            <li>Kiểm tra giỏ hàng</li>
                            <li>Điền thông tin giao hàng</li>
                            <li>Chọn phương thức thanh toán</li>
                            <li>Xác nhận đơn hàng</li>
                        </ol>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>2. Thông tin cần cung cấp</h2>
                        <ul>
                            <li>Họ và tên người nhận</li>
                            <li>Số điện thoại liên hệ</li>
                            <li>Địa chỉ giao hàng chi tiết</li>
                            <li>Email (nếu có)</li>
                            <li>Ghi chú đơn hàng (nếu cần)</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>3. Xác nhận đơn hàng</h2>
                        <p>Sau khi đặt hàng thành công:</p>
                        <ul>
                            <li>Hệ thống sẽ gửi email xác nhận đơn hàng</li>
                            <li>Nhân viên sẽ gọi điện xác nhận thông tin</li>
                            <li>Khách hàng có thể theo dõi trạng thái đơn hàng trên website</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>4. Hủy đơn hàng</h2>
                        <p>Khách hàng có thể hủy đơn hàng trong các trường hợp:</p>
                        <ul>
                            <li>Đơn hàng chưa được xử lý</li>
                            <li>Đơn hàng đang trong quá trình xử lý</li>
                            <li>Đơn hàng chưa được giao</li>
                        </ul>
                        <p style={{ marginTop: "10px" }}>Cách hủy đơn hàng:</p>
                        <ul>
                            <li>Gọi điện đến hotline</li>
                            <li>Gửi email yêu cầu hủy</li>
                            <li>Hủy trực tiếp trên website</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>5. Liên hệ hỗ trợ</h2>
                        <p>Nếu cần hỗ trợ thêm, vui lòng liên hệ:</p>
                        <p>Hotline: (123) 456-7890</p>
                        <p>Email: support@pcstore.com</p>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default PurchaseGuide; 