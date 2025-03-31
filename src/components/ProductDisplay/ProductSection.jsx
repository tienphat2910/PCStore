import PropTypes from "prop-types";
import ProductCard from "../../components/ProductCard";
import { useRef } from "react";
import Icon from "../../constants/icons";

const ProductSection = ({ title, products, seeAllLink, brandImage }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="container my-5 position-relative">
      {!brandImage && (
        <div className="row mb-3">
          <div className="col">
            <h2 className="">{title}</h2>
          </div>
          <div className="col text-end">
            <a href={seeAllLink} className="text-decoration-underline" style={{ color: "#9933CC" }}>
              {seeAllLink}
            </a>
          </div>
        </div>
      )}
      <div className="row">
        {brandImage && (
          <div className="col-lg-2 col-md-2  position-relative">
            <img src={brandImage} alt="Brand logo" className="img-fluid h-100" />

            <div className="position-absolute d-flex flex-column top-0 justify-content-center align-items-center">
              <h2 className="text-center">{title}</h2>
              <a href={seeAllLink} className="text-decoration-underline">
                {seeAllLink}
              </a>
            </div>
          </div>
        )}
        <div className={`${brandImage ? "col-md-10 position-relative" : "col"}`}>
          <div className="d-flex" ref={scrollRef} style={{ overflow: "hidden" }}>
            {products.map((product, index) => (
              <div className="flex-shrink-0 py-2" key={index} style={{ width: "250px" }}>
                <ProductCard 
                  {...product} 
                  originalPrice={Number(product.originalPrice)}
                  discountedPrice={Number(product.discountedPrice)}
                />
              </div>
            ))}
          </div>
          {brandImage && (
            <>
              <button
                className="position-absolute top-50 start-0 translate-middle-y p-0 border-0"
                onClick={scrollLeft}
                style={{ zIndex: 2, marginLeft: "8px", outline: "none", background: "none" }}
              >
                <img src={Icon.Previous} alt="" />
              </button>

              <button
                className="position-absolute top-50 end-0 translate-middle-y p-0 border-0"
                onClick={scrollRight}
                style={{ zIndex: 2, marginRight: "8px", outline: "none", background: "none" }}
              >
                <img src={Icon.Next} alt="" />
              </button>
            </>
          )}
        </div>
      </div>
      {!brandImage && (
        <>
          <button
            className="position-absolute top-50 start-0 translate-middle-y p-0 border-0"
            onClick={scrollLeft}
            style={{ zIndex: 2, marginLeft: "8px", outline: "none", background: "none" }}
          >
            <img src={Icon.Previous} alt="" />
          </button>

          <button
            className="position-absolute top-50 end-0 translate-middle-y p-0 border-0"
            onClick={scrollRight}
            style={{ zIndex: 2, marginRight: "8px", outline: "none", background: "none" }}
          >
            <img src={Icon.Next} alt="" />
          </button>
        </>
      )}
    </div>
  );
};

ProductSection.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      inStock: PropTypes.bool.isRequired,
      imageSrc: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      originalPrice: PropTypes.number.isRequired,
      discountedPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  seeAllLink: PropTypes.string.isRequired,
  brandImage: PropTypes.string,
};

export default ProductSection;
