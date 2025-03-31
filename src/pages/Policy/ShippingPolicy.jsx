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
                        <span style={{ fontWeight: "400", color: "rgba(0,0,0,1)" }}> Chính sách vận chuyển</span>
                    </div>
                </nav>

                <h1 style={{ fontSize: "32px", marginTop: "20px", marginBottom: "30px" }}>Chính sách vận chuyển</h1>

                <div style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.6" }}>
                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>1. Phương thức vận chuyển</h2>
                        <p>Chúng tôi cung cấp các phương thức vận chuyển sau:</p>
                        <ul>
                            <li>Giao hàng nhanh (GHN)</li>
                            <li>Giao hàng tiết kiệm (GHTK)</li>
                            <li>Viettel Post</li>
                            <li>J&T Express</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>2. Phí vận chuyển</h2>
                        <p>Phí vận chuyển được tính như sau:</p>
                        <ul>
                            <li>Miễn phí vận chuyển cho đơn hàng từ 5 triệu đồng</li>
                            <li>Phí vận chuyển 30.000đ cho đơn hàng dưới 5 triệu đồng</li>
                            <li>Phí vận chuyển nhanh: 50.000đ</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>3. Thời gian giao hàng</h2>
                        <p>Thời gian giao hàng dự kiến:</p>
                        <ul>
                            <li>Nội thành TP.HCM: 1-2 ngày</li>
                            <li>Các tỉnh lân cận: 2-3 ngày</li>
                            <li>Các tỉnh xa: 3-5 ngày</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>4. Quy trình giao hàng</h2>
                        <p>Quy trình giao hàng bao gồm:</p>
                        <ul>
                            <li>Xác nhận đơn hàng</li>
                            <li>Chuẩn bị hàng</li>
                            <li>Bàn giao cho đơn vị vận chuyển</li>
                            <li>Giao hàng và xác nhận</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>5. Liên hệ vận chuyển</h2>
                        <p>Quý khách có thể liên hệ về vấn đề vận chuyển qua:</p>
                        <p>Email: shipping@pcstore.com</p>
                        <p>Hotline: (123) 456-7890</p>
                        <p>Địa chỉ: 12 Nguyễn Văn Bảo, Phường 04, Quận Gò Vấp, TP.HCM</p>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default ShippingPolicyPage;