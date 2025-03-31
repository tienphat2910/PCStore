import { useNavigate } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";

const WarrantyPolicyPage = () => {
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
                        <span style={{ fontWeight: "400", color: "rgba(0,0,0,1)" }}> Chính sách bảo hành</span>
                    </div>
                </nav>

                <h1 style={{ fontSize: "32px", marginTop: "20px", marginBottom: "30px" }}>Chính sách bảo hành</h1>

                <div style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.6" }}>
                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>1. Điều kiện bảo hành</h2>
                        <p>Sản phẩm được bảo hành khi đáp ứng các điều kiện sau:</p>
                        <ul>
                            <li>Còn trong thời gian bảo hành</li>
                            <li>Có phiếu bảo hành hoặc hóa đơn mua hàng</li>
                            <li>Không bị lỗi do người dùng gây ra</li>
                            <li>Không bị tháo dỡ, sửa chữa trái phép</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>2. Thời gian bảo hành</h2>
                        <p>Thời gian bảo hành tùy thuộc vào từng loại sản phẩm:</p>
                        <ul>
                            <li>Laptop: 12-24 tháng</li>
                            <li>Máy tính để bàn: 12-36 tháng</li>
                            <li>Phụ kiện: 3-12 tháng</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>3. Quy trình bảo hành</h2>
                        <p>Quy trình bảo hành bao gồm các bước:</p>
                        <ul>
                            <li>Tiếp nhận sản phẩm và kiểm tra tình trạng</li>
                            <li>Xác định nguyên nhân lỗi</li>
                            <li>Thực hiện sửa chữa hoặc thay thế</li>
                            <li>Kiểm tra chất lượng sau sửa chữa</li>
                            <li>Bàn giao sản phẩm cho khách hàng</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>4. Các trường hợp không được bảo hành</h2>
                        <p>Chúng tôi không bảo hành trong các trường hợp:</p>
                        <ul>
                            <li>Sản phẩm bị hỏng do thiên tai, hỏa hoạn</li>
                            <li>Sản phẩm bị tháo dỡ, sửa chữa trái phép</li>
                            <li>Sản phẩm bị hỏng do sử dụng sai mục đích</li>
                            <li>Sản phẩm bị mất phiếu bảo hành</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>5. Liên hệ bảo hành</h2>
                        <p>Quý khách có thể liên hệ bảo hành qua:</p>
                        <p>Email: warranty@pcstore.com</p>
                        <p>Hotline: (123) 456-7890</p>
                        <p>Địa chỉ: 12 Nguyễn Văn Bảo, Phường 04, Quận Gò Vấp, TP.HCM</p>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default WarrantyPolicyPage;