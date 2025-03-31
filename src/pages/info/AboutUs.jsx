import { useNavigate } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";

const AboutUs = () => {
    const navigate = useNavigate();
    useScrollToTop();

    return (
        <div style={{ 
            maxWidth: "1200px", 
            margin: "0 auto", 
            padding: "20px",
            fontFamily: "Poppins, sans-serif"
        }}>
            {/* Breadcrumb */}
            <div style={{ marginBottom: "20px" }}>
                <span 
                    onClick={() => navigate("/")} 
                    style={{ 
                        cursor: "pointer", 
                        color: "#666",
                        marginRight: "10px"
                    }}
                >
                    Trang chủ
                </span>
                <span style={{ color: "#666" }}>/</span>
                <span style={{ marginLeft: "10px", color: "#000" }}>Về chúng tôi</span>
            </div>

            {/* Main Content */}
            <div>
                <h1 style={{ 
                    fontSize: "32px", 
                    fontWeight: "600", 
                    marginBottom: "30px",
                    color: "#000"
                }}>
                    Về chúng tôi
                </h1>

                {/* Giới thiệu */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ 
                        fontSize: "24px", 
                        fontWeight: "500", 
                        marginBottom: "20px",
                        color: "#333"
                    }}>
                        Giới thiệu
                    </h2>
                    <p style={{ 
                        fontSize: "16px", 
                        lineHeight: "1.6", 
                        color: "#666",
                        marginBottom: "20px"
                    }}>
                        PCStore là một trong những đơn vị tiên phong trong lĩnh vực bán lẻ thiết bị điện tử và máy tính tại Việt Nam. 
                        Với hơn 10 năm kinh nghiệm, chúng tôi tự hào mang đến cho khách hàng những sản phẩm chất lượng cao với giá cả 
                        cạnh tranh và dịch vụ chuyên nghiệp.
                    </p>
                </section>

                {/* Tầm nhìn và Sứ mệnh */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ 
                        fontSize: "24px", 
                        fontWeight: "500", 
                        marginBottom: "20px",
                        color: "#333"
                    }}>
                        Tầm nhìn và Sứ mệnh
                    </h2>
                    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                        <div style={{ 
                            flex: "1", 
                            minWidth: "300px",
                            padding: "20px",
                            backgroundColor: "#f8f9fa",
                            borderRadius: "8px"
                        }}>
                            <h3 style={{ 
                                fontSize: "20px", 
                                fontWeight: "500", 
                                marginBottom: "15px",
                                color: "#333"
                            }}>
                                Tầm nhìn
                            </h3>
                            <p style={{ 
                                fontSize: "16px", 
                                lineHeight: "1.6", 
                                color: "#666"
                            }}>
                                Trở thành đơn vị dẫn đầu trong lĩnh vực bán lẻ thiết bị điện tử và máy tính, 
                                mang đến trải nghiệm mua sắm tốt nhất cho khách hàng.
                            </p>
                        </div>
                        <div style={{ 
                            flex: "1", 
                            minWidth: "300px",
                            padding: "20px",
                            backgroundColor: "#f8f9fa",
                            borderRadius: "8px"
                        }}>
                            <h3 style={{ 
                                fontSize: "20px", 
                                fontWeight: "500", 
                                marginBottom: "15px",
                                color: "#333"
                            }}>
                                Sứ mệnh
                            </h3>
                            <p style={{ 
                                fontSize: "16px", 
                                lineHeight: "1.6", 
                                color: "#666"
                            }}>
                                Cung cấp sản phẩm chất lượng với giá cả hợp lý, 
                                đem đến dịch vụ chuyên nghiệp và trải nghiệm mua sắm tuyệt vời cho khách hàng.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Giá trị cốt lõi */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ 
                        fontSize: "24px", 
                        fontWeight: "500", 
                        marginBottom: "20px",
                        color: "#333"
                    }}>
                        Giá trị cốt lõi
                    </h2>
                    <div style={{ 
                        display: "grid", 
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
                        gap: "20px" 
                    }}>
                        <div style={{ 
                            padding: "20px",
                            backgroundColor: "#f8f9fa",
                            borderRadius: "8px",
                            textAlign: "center"
                        }}>
                            <h3 style={{ 
                                fontSize: "18px", 
                                fontWeight: "500", 
                                marginBottom: "10px",
                                color: "#333"
                            }}>
                                Chất lượng
                            </h3>
                            <p style={{ 
                                fontSize: "14px", 
                                lineHeight: "1.6", 
                                color: "#666"
                            }}>
                                Cam kết cung cấp sản phẩm chính hãng, chất lượng cao
                            </p>
                        </div>
                        <div style={{ 
                            padding: "20px",
                            backgroundColor: "#f8f9fa",
                            borderRadius: "8px",
                            textAlign: "center"
                        }}>
                            <h3 style={{ 
                                fontSize: "18px", 
                                fontWeight: "500", 
                                marginBottom: "10px",
                                color: "#333"
                            }}>
                                Uy tín
                            </h3>
                            <p style={{ 
                                fontSize: "14px", 
                                lineHeight: "1.6", 
                                color: "#666"
                            }}>
                                Xây dựng niềm tin với khách hàng thông qua dịch vụ chuyên nghiệp
                            </p>
                        </div>
                        <div style={{ 
                            padding: "20px",
                            backgroundColor: "#f8f9fa",
                            borderRadius: "8px",
                            textAlign: "center"
                        }}>
                            <h3 style={{ 
                                fontSize: "18px", 
                                fontWeight: "500", 
                                marginBottom: "10px",
                                color: "#333"
                            }}>
                                Đổi mới
                            </h3>
                            <p style={{ 
                                fontSize: "14px", 
                                lineHeight: "1.6", 
                                color: "#666"
                            }}>
                                Liên tục cập nhật và đổi mới để đáp ứng nhu cầu khách hàng
                            </p>
                        </div>
                    </div>
                </section>

                {/* Thông tin liên hệ */}
                <section>
                    <h2 style={{ 
                        fontSize: "24px", 
                        fontWeight: "500", 
                        marginBottom: "20px",
                        color: "#333"
                    }}>
                        Thông tin liên hệ
                    </h2>
                    <div style={{ 
                        padding: "20px",
                        backgroundColor: "#f8f9fa",
                        borderRadius: "8px"
                    }}>
                        <p style={{ 
                            fontSize: "16px", 
                            lineHeight: "1.8", 
                            color: "#666",
                            marginBottom: "10px"
                        }}>
                            <strong>Địa chỉ:</strong> 12 Nguyễn Văn Bảo, Phường 04, Quận Gò Vấp, TP.HCM
                        </p>
                        <p style={{ 
                            fontSize: "16px", 
                            lineHeight: "1.8", 
                            color: "#666",
                            marginBottom: "10px"
                        }}>
                            <strong>Hotline:</strong> (123) 456-7890
                        </p>
                        <p style={{ 
                            fontSize: "16px", 
                            lineHeight: "1.8", 
                            color: "#666"
                        }}>
                            <strong>Email:</strong> info@pcstore.com
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUs; 