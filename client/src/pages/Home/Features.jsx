import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Icon from "../../constants/icons.js";

const Features = () => {
    const features = [
        {
            imageSrc: Icon.Support,
            title: "Chế độ bảo hành",
            description: "Bảo hành tại chỗ lên đến 3 năm."
        },
        {
            imageSrc: Icon.Account,
            title: "Ưu đãi thành viên",
            description: "Với mức giảm giá lớn, giao hàng miễn phí và kỹ thuật viên hỗ trợ tận tình."
        },
        {
            imageSrc: Icon.Saving,
            title: "Tiết kiệm",
            description: "Giảm giá lên đến 70% cho Sản phẩm mới, bạn có thể chắc chắn về mức giá tốt nhất."
        }
    ];

    return (
        <div className="container-fluid py-5 text-center" style={{ marginTop: '60px', backgroundColor: '#F5F7FF' }}>
            <div className="row justify-content-center ">
                {features.map((feature, index) => (
                    <div key={index} className="col-md-4 d-flex flex-column align-items-center mb-4">
                        <img
                            src={feature.icon}
                            alt={feature.title}
                            className="img-fluid mb-3"
                            style={{ width: "65px" }}
                        />
                        <h3 className="h5 fw-bold">{feature.title}</h3>
                        <p className="text-muted">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
