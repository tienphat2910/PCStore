import { useNavigate } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";

const PaymentGuide = () => {
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
                        <span style={{ fontWeight: "400", color: "rgba(0,0,0,1)" }}> Hướng dẫn thanh toán</span>
                    </div>
                </nav>

                <h1 style={{ fontSize: "32px", marginTop: "20px", marginBottom: "30px" }}>Hướng dẫn thanh toán</h1>

                <div style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.6" }}>
                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>1. Phương thức thanh toán</h2>
                        <p>Chúng tôi chấp nhận các phương thức thanh toán sau:</p>
                        <ul>
                            <li>Thanh toán khi nhận hàng (COD)</li>
                            <li>Chuyển khoản ngân hàng</li>
                            <li>Thanh toán qua thẻ tín dụng</li>
                            <li>Thanh toán qua ví điện tử</li>
                            <li>Thanh toán qua cổng thanh toán trực tuyến</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>2. Thông tin chuyển khoản</h2>
                        <p>Thông tin tài khoản ngân hàng:</p>
                        <ul>
                            <li>Ngân hàng: Vietcombank</li>
                            <li>Chủ tài khoản: CÔNG TY TNHH PCSTORE</li>
                            <li>Số tài khoản: 123456789</li>
                            <li>Chi nhánh: TP.HCM</li>
                        </ul>
                        <p style={{ marginTop: "10px" }}>Lưu ý khi chuyển khoản:</p>
                        <ul>
                            <li>Nội dung chuyển khoản: Mã đơn hàng + Số điện thoại</li>
                            <li>Kiểm tra kỹ thông tin trước khi chuyển</li>
                            <li>Lưu giữ biên lai chuyển khoản</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>3. Thanh toán trực tuyến</h2>
                        <p>Chúng tôi chấp nhận thanh toán qua các cổng thanh toán:</p>
                        <ul>
                            <li>VNPay</li>
                            <li>Momo</li>
                            <li>ZaloPay</li>
                            <li>PayPal</li>
                        </ul>
                        <p style={{ marginTop: "10px" }}>Quy trình thanh toán:</p>
                        <ol>
                            <li>Chọn phương thức thanh toán</li>
                            <li>Xác nhận thông tin đơn hàng</li>
                            <li>Chuyển hướng đến cổng thanh toán</li>
                            <li>Hoàn tất thanh toán</li>
                        </ol>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>4. Bảo mật thanh toán</h2>
                        <p>Chúng tôi cam kết:</p>
                        <ul>
                            <li>Mã hóa thông tin thanh toán</li>
                            <li>Không lưu trữ thông tin thẻ</li>
                            <li>Tuân thủ tiêu chuẩn bảo mật PCI DSS</li>
                            <li>Bảo vệ thông tin khách hàng</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>5. Hỗ trợ thanh toán</h2>
                        <p>Nếu cần hỗ trợ về thanh toán, vui lòng liên hệ:</p>
                        <p>Hotline: (123) 456-7890</p>
                        <p>Email: payment@pcstore.com</p>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default PaymentGuide; 