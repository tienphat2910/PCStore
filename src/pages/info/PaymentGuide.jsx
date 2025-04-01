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
                margin: '30px 0',
                width: '100%',
                padding: '0 20px', // Padding for better readability on full width
            }}
        >
            <main
                style={{
                    alignSelf: "center",
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "20px",
                    width: "100%",
                    maxWidth: "1200px", // Max width for large screens
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
                        <span
                            style={{
                                fontWeight: "400",
                                color: "rgba(0,0,0,1)",
                                cursor: "pointer",
                            }}
                            onClick={() => navigate('/')}
                        >
                            Home
                        </span>
                        <span style={{ fontWeight: "400", color: "rgba(1,86,255,1)" }}>
                            &gt;
                        </span>
                        <span
                            style={{
                                fontWeight: "400",
                                color: "rgba(0,0,0,1)",
                            }}
                        >
                            Hướng dẫn thanh toán
                        </span>
                    </div>
                </nav>

                <h1 style={{ fontSize: "32px", marginTop: "20px", marginBottom: "30px", fontWeight: "600" }}>
                    Hướng dẫn thanh toán
                </h1>

                <div style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.6" }}>
                    {/* Section 1: Payment Methods */}
                    <section style={{ marginBottom: "30px", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                        <h2
                            style={{
                                fontSize: "24px",
                                marginBottom: "15px",
                                display: "flex",
                                alignItems: "center",
                                color: "#0056b3",
                            }}
                        >
                            <img
                                src="https://img.icons8.com/ios-filled/50/0056b3/credit-card.png"
                                alt="payment method icon"
                                style={{ width: "24px", marginRight: "10px" }}
                            />
                            Phương thức thanh toán
                        </h2>
                        <p>Chúng tôi chấp nhận các phương thức thanh toán sau:</p>
                        <ul>
                            <li>Thanh toán khi nhận hàng (COD)</li>
                            <li>Chuyển khoản ngân hàng</li>
                            <li>Thanh toán qua thẻ tín dụng</li>
                            <li>Thanh toán qua ví điện tử</li>
                            <li>Thanh toán qua cổng thanh toán trực tuyến</li>
                        </ul>
                    </section>

                    {/* Section 2: Bank Transfer Information */}
                    <section style={{ marginBottom: "30px", padding: "20px", backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                        <h2
                            style={{
                                fontSize: "24px",
                                marginBottom: "15px",
                                display: "flex",
                                alignItems: "center",
                                color: "#0056b3",
                            }}
                        >
                            <img
                                src="https://img.icons8.com/ios-filled/50/0056b3/bank-card.png"
                                alt="bank transfer icon"
                                style={{ width: "24px", marginRight: "10px" }}
                            />
                            Thông tin chuyển khoản
                        </h2>
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

                    {/* Section 3: Online Payment Methods */}
                    <section style={{ marginBottom: "30px", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                        <h2
                            style={{
                                fontSize: "24px",
                                marginBottom: "15px",
                                display: "flex",
                                alignItems: "center",
                                color: "#0056b3",
                            }}
                        >
                            <img
                                src="https://img.icons8.com/ios-filled/50/0056b3/payment.png"
                                alt="online payment icon"
                                style={{ width: "24px", marginRight: "10px" }}
                            />
                            Thanh toán trực tuyến
                        </h2>
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

                    {/* Section 4: Payment Security */}
                    <section style={{ marginBottom: "30px", padding: "20px", backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                        <h2
                            style={{
                                fontSize: "24px",
                                marginBottom: "15px",
                                display: "flex",
                                alignItems: "center",
                                color: "#0056b3",
                            }}
                        >
                            <img
                                src="https://img.icons8.com/ios-filled/50/0056b3/lock.png"
                                alt="security icon"
                                style={{ width: "24px", marginRight: "10px" }}
                            />
                            Bảo mật thanh toán
                        </h2>
                        <p>Chúng tôi cam kết:</p>
                        <ul>
                            <li>Mã hóa thông tin thanh toán</li>
                            <li>Không lưu trữ thông tin thẻ</li>
                            <li>Tuân thủ tiêu chuẩn bảo mật PCI DSS</li>
                            <li>Bảo vệ thông tin khách hàng</li>
                        </ul>
                    </section>

                    {/* Section 5: Payment Support */}
                    <section style={{ marginBottom: "30px", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                        <h2
                            style={{
                                fontSize: "24px",
                                marginBottom: "15px",
                                display: "flex",
                                alignItems: "center",
                                color: "#0056b3",
                            }}
                        >
                            <img
                                src="https://img.icons8.com/ios-filled/50/0056b3/phone.png"
                                alt="support icon"
                                style={{ width: "24px", marginRight: "10px" }}
                            />
                            Hỗ trợ thanh toán
                        </h2>
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
