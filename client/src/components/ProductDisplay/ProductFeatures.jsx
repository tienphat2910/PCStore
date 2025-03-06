import PropTypes from "prop-types";

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
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ba5da554e8aff6d82e10fc64978e48b8aaf1c3a432b77df19b656b018581ade1?placeholderIfAbsent=true&apiKey=1a2630dba26c44fe94fe53d5e705e42a",
      title: "Chế độ bảo hành",
      description: "Bảo hành tại chỗ lên đến 3 năm."
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5542d98b15c467aba53e039deeba0db090cdd5da26f54b34ab4eda2e20b269a?placeholderIfAbsent=true&apiKey=1a2630dba26c44fe94fe53d5e705e42a",
      title: "Ưu đãi thành viên",
      description: "Với mức giảm giá lớn, giao hàng miễn phí và kỹ thuật viên hỗ trợ tận tình."
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d82549d7dc7b81b0dd9c49f9a35801a23a8a81a14112f97d0d38ce705946d9cf?placeholderIfAbsent=true&apiKey=1a2630dba26c44fe94fe53d5e705e42a",
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