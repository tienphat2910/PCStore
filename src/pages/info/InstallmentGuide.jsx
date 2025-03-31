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
                        <span style={{ fontWeight: "400", color: "rgba(0,0,0,1)" }}> Hướng dẫn trả góp</span>
                    </div>
                </nav>

                <h1 style={{ fontSize: "32px", marginTop: "20px", marginBottom: "30px" }}>Hướng dẫn trả góp</h1>

                <div style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.6" }}>
                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>1. Điều kiện trả góp</h2>
                        <ul>
                            <li>Đơn hàng có giá trị từ 5 triệu đồng trở lên</li>
                            <li>Khách hàng từ 18 tuổi trở lên</li>
                            <li>Có giấy tờ tùy thân hợp lệ</li>
                            <li>Có thu nhập ổn định</li>
                            <li>Không có nợ xấu tại ngân hàng</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>2. Thủ tục trả góp</h2>
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

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>3. Phương thức trả góp</h2>
                        <p>Khách hàng có thể chọn các phương thức trả góp sau:</p>
                        <ul>
                            <li>Trả góp qua thẻ tín dụng</li>
                            <li>Trả góp qua tài khoản ngân hàng</li>
                            <li>Trả góp trực tiếp tại cửa hàng</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>4. Lãi suất và phí</h2>
                        <p>Thông tin về lãi suất và phí:</p>
                        <ul>
                            <li>Lãi suất: 0% - 1.5%/tháng tùy gói</li>
                            <li>Phí bảo hiểm: 1% giá trị đơn hàng</li>
                            <li>Phí trả chậm: 5% số tiền trả chậm</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: "30px" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>5. Liên hệ tư vấn</h2>
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