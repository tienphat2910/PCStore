import PropTypes from "prop-types";
import Icon from "../../constants/icons";
const FeatureCard = ({ imageSrc, title, description }) => {
  return (
    <div className="card text-center border-0" style={{ backgroundColor: 'transparent' }}>
      <img
        src={imageSrc}
        alt={`${title} icon`}
        className="card-img-top mx-auto mt-4"
        style={{ width: '65px', height: '65px' }}
      />
      <div className="card-body">
        <h5 className="card-title font-weight-bold">{title}</h5>
        <p className="card-text small">{description}</p>
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};


const ProductFeatures = () => {
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
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="row">
            {features.map((feature, index) => (
              <div key={index} className="col-md-4 mb-4">
                <FeatureCard
                  imageSrc={feature.imageSrc}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;