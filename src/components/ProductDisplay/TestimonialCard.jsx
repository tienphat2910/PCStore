import PropTypes from "prop-types";

const TestimonialCard = ({ quote, author }) => {
  return (
    <div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <div className="d-flex align-items-center">
            <p style={{ fontSize: '140px', lineHeight: '0' }}>{`‘’`}</p>
            <p>{quote}</p>
          </div>
          <footer className="blockquote-footer text-end">{author}</footer>
        </blockquote>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

const ActionButton = ({ text }) => {
  return (
    <button
      className="btn rounded-pill"
      style={{
        fontSize: "16px", // Chữ to hơn một chút
        border: "2px solid black", // Viền đen
        color: "black", // Chữ đen
        backgroundColor: "transparent", // Nền trong suốt ban đầu
        transition: "all 0.3s", // Hiệu ứng mượt mà khi chuyển đổi
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = "#9933CC"; // Màu nền khi hover
        e.target.style.color = "white"; // Chữ màu trắng khi hover
        e.target.style.border = "2px solid #9933CC"; // Viền màu tím khi hover
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = "transparent"; // Màu nền trở lại
        e.target.style.color = "black"; // Chữ đen trở lại
        e.target.style.border = "2px solid black"; // Viền đen khi không hover
      }}
    >
      {text}
    </button>
  );
};




ActionButton.propTypes = {
  text: PropTypes.string.isRequired,
};

const TestimonialSection = () => {
  const testimonialData = {
    quote:
      "Đơn hàng đầu tiên của tôi đã đến hôm nay trong tình trạng hoàn hảo. Từ lúc tôi gửi câu hỏi về sản phẩm đến khi mua hàng, vận chuyển và bây giờ là giao hàng. Nhân viên của bạn, Bảo, đã luôn giữ liên lạc. Dịch vụ thật tuyệt vời. Tôi mong được mua sắm trên trang web của bạn trong tương lai và chắc chắn sẽ giới thiệu nó cho mọi người.",
    author: "Nguyễn Thị Kim Anh",
  };

  return (
    <section className="py-2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 card border-0 shadow-sm" style={{ backgroundColor: "#F5F7FF" }}>
            <TestimonialCard quote={testimonialData.quote} author={testimonialData.author} />
            <div className="d-flex justify-content-between align-items-center mt-4">
              <ActionButton text="Để lại đánh giá" />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f027752cfb10d47c07e5cf0f846067b4c5bd19a9a39e3e225fc7c7ebe6565eff?placeholderIfAbsent=true&apiKey=1a2630dba26c44fe94fe53d5e705e42a"
                alt="Company logo"
                className="img-fluid"
                style={{ width: "78px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
