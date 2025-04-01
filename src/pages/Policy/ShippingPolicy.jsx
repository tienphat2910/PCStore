import { useNavigate } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";

const ShippingPolicyPage = () => {
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
                paddingBottom: "50px",
                width: "100%",  // Đảm bảo chứa toàn bộ chiều rộng màn hình
            }}
        >
            {/* Ảnh header cho trang */}
            <aside
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    padding: "20px 0",
                    marginBottom: "20px",  // Tăng khoảng cách dưới ảnh nếu cần
                }}
            >
                <img
                    src="https://duocthaofungi.com/uploads/plugin/news/113/1663668167-2113376650-shipping-policy.jpg"  // Thay bằng link ảnh thực tế
                    style={{
                        width: "100%",  // Đảm bảo ảnh chiếm toàn bộ chiều rộng
                        height: "auto",
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    }}
                />
            </aside>

            <main
                style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px",
                    backgroundColor: "#f9f9f9",  // Màu nền khung
                    borderRadius: "8px",  // Viền bo tròn
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",  // Đổ bóng cho khung
                    width: "100%",  // Đảm bảo phần chính chiếm toàn bộ chiều rộng
                    margin: "0 auto",  // Căn giữa phần chính
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
                        <span style={{ fontWeight: "400", color: "rgba(0,0,0,1)" }}> Chính sách vận chuyển</span>
                    </div>
                </nav>

                <h1 style={{ fontSize: "32px", marginTop: "20px", marginBottom: "30px", color: "#1e3d58" }}>Chính sách vận chuyển</h1>

                <div style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.6" }}>
                    {/* Phần 1: Phương thức vận chuyển */}
                    <section style={{ marginBottom: "30px", padding: "20px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "#007BFF" }}>1. Phương thức vận chuyển</h2>
                        <p>Chúng tôi cung cấp các phương thức vận chuyển sau:</p>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                            <li style={listItemStyle}>🛵 Giao hàng nhanh (GHN)</li>
                            <li style={listItemStyle}>📦 Giao hàng tiết kiệm (GHTK)</li>
                            <li style={listItemStyle}>📬 Viettel Post</li>
                            <li style={listItemStyle}>🚚 J&T Express</li>
                        </ul>
                    </section>

                    {/* Phần 2: Phí vận chuyển */}
                    <section style={{ marginBottom: "30px", padding: "20px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "#007BFF" }}>2. Phí vận chuyển</h2>
                        <p>Phí vận chuyển được tính như sau:</p>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                            <li style={listItemStyle}>💰 Miễn phí vận chuyển cho đơn hàng từ 5 triệu đồng</li>
                            <li style={listItemStyle}>💸 Phí vận chuyển 30.000đ cho đơn hàng dưới 5 triệu đồng</li>
                            <li style={listItemStyle}>🚀 Phí vận chuyển nhanh: 50.000đ</li>
                        </ul>
                    </section>

                    {/* Phần 3: Thời gian giao hàng */}
                    <section style={{ marginBottom: "30px", padding: "20px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "#007BFF" }}>3. Thời gian giao hàng</h2>
                        <p>Thời gian giao hàng dự kiến:</p>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                            <li style={listItemStyle}>🏙️ Nội thành TP.HCM: 1-2 ngày</li>
                            <li style={listItemStyle}>🌆 Các tỉnh lân cận: 2-3 ngày</li>
                            <li style={listItemStyle}>🏞️ Các tỉnh xa: 3-5 ngày</li>
                        </ul>
                    </section>

                    {/* Phần 4: Quy trình giao hàng */}
                    <section style={{ marginBottom: "30px", padding: "20px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "#007BFF" }}>4. Quy trình giao hàng</h2>
                        <p>Quy trình giao hàng bao gồm:</p>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                            <li style={listItemStyle}>✅ Xác nhận đơn hàng</li>
                            <li style={listItemStyle}>📦 Chuẩn bị hàng</li>
                            <li style={listItemStyle}>🚚 Bàn giao cho đơn vị vận chuyển</li>
                            <li style={listItemStyle}>✔️ Giao hàng và xác nhận</li>
                        </ul>
                    </section>

                    {/* Phần 5: Liên hệ */}
                    <section style={{ marginBottom: "30px", padding: "20px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "#007BFF" }}>5. Liên hệ vận chuyển</h2>
                        <p>Quý khách có thể liên hệ về vấn đề vận chuyển qua:</p>
                        <p>Email: <a href="mailto:shipping@pcstore.com">shipping@pcstore.com</a></p>
                        <p>Hotline: (123) 456-7890</p>
                        <p>Địa chỉ: 12 Nguyễn Văn Bảo, Phường 04, Quận Gò Vấp, TP.HCM</p>
                    </section>
                </div>
            </main>
        </div>
    );
};

const listItemStyle = {
    fontSize: "16px",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    color: "#333",
};

export default ShippingPolicyPage;
