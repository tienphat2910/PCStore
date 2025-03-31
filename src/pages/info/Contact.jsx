import { useNavigate } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";

const Contact = () => {
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
                        <span style={{ fontWeight: "400", color: "rgba(0,0,0,1)" }}> Liên hệ</span>
                    </div>
                </nav>

                <h1 style={{ fontSize: "32px", marginTop: "20px", marginBottom: "30px" }}>Liên hệ</h1>

                <div style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.6", width: "100%" }}>
                    <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
                        <div style={{ flex: "1", minWidth: "300px" }}>
                            <section style={{ marginBottom: "30px" }}>
                                <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>Thông tin liên hệ</h2>
                                <div style={{ marginBottom: "20px" }}>
                                    <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Địa chỉ</h3>
                                    <p>12 Nguyễn Văn Bảo, Phường 04, Quận Gò Vấp, TP.HCM</p>
                                </div>
                                <div style={{ marginBottom: "20px" }}>
                                    <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Điện thoại</h3>
                                    <p>Hotline: (123) 456-7890</p>
                                </div>
                                <div style={{ marginBottom: "20px" }}>
                                    <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Email</h3>
                                    <p>info@pcstore.com</p>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Giờ làm việc</h3>
                                    <p>Thứ 2 - Thứ 6: 8:00 - 21:00</p>
                                    <p>Thứ 7 - Chủ nhật: 9:00 - 18:00</p>
                                </div>
                            </section>
                        </div>

                        <div style={{ flex: "1", minWidth: "300px" }}>
                            <section style={{ marginBottom: "30px" }}>
                                <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>Gửi tin nhắn</h2>
                                <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                                    <div>
                                        <label style={{ display: "block", marginBottom: "5px" }}>Họ và tên</label>
                                        <input 
                                            type="text" 
                                            style={{
                                                width: "100%",
                                                padding: "8px",
                                                border: "1px solid #ddd",
                                                borderRadius: "4px"
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: "block", marginBottom: "5px" }}>Email</label>
                                        <input 
                                            type="email" 
                                            style={{
                                                width: "100%",
                                                padding: "8px",
                                                border: "1px solid #ddd",
                                                borderRadius: "4px"
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: "block", marginBottom: "5px" }}>Số điện thoại</label>
                                        <input 
                                            type="tel" 
                                            style={{
                                                width: "100%",
                                                padding: "8px",
                                                border: "1px solid #ddd",
                                                borderRadius: "4px"
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: "block", marginBottom: "5px" }}>Nội dung</label>
                                        <textarea 
                                            style={{
                                                width: "100%",
                                                padding: "8px",
                                                border: "1px solid #ddd",
                                                borderRadius: "4px",
                                                height: "150px"
                                            }}
                                        />
                                    </div>
                                    <button 
                                        type="submit"
                                        style={{
                                            padding: "10px 20px",
                                            backgroundColor: "#0156FF",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "4px",
                                            cursor: "pointer"
                                        }}
                                    >
                                        Gửi tin nhắn
                                    </button>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Contact; 