import ProductCard from "../../components/ProductCard";
import FilterSection from "../../components/Catalog/FilterSection";
import BreadcrumbNav from "../../components/Catalog/BreadcrumbNav";
import Pagination from "../../components/Catalog/Pagination";
import SortingControls from "../../components/Catalog/SortingControls";
import { useState, useEffect } from "react";

const Catalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://product-services-8x46.onrender.com/products")
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          // Map dữ liệu API thành đối tượng cần thiết cho ProductCard
          const mappedProducts = data.data.map((product) => ({
            inStock: product.stock > 0,
            imageSrc: product.image,
            rating: product.rating,
            description: product.description,
            // Đảm bảo kiểu number cho giá
            originalPrice: Number(product.price),
            discountedPrice: Number(product.price - product.discount),
          }));
          setProducts(mappedProducts);
        }
      })
      .catch((err) =>
        console.error("Error fetching products:", err)
      );
  }, []);

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <header className="text-center mb-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f7eda2d580e4859685aeba8172aa7fcd82a523efdabed75e937630f486c6375?placeholderIfAbsent=true&apiKey=1a2630dba26c44fe94fe53d5e705e42a"
            alt="Header banner"
            className="img-fluid mb-4"
          />
          <BreadcrumbNav />
          <h1 className="h3 fw-semibold">MSI PS Series (20)</h1>
        </header>

        <SortingControls />

        <div className="row">
          {/* Sidebar Filters */}
          <div className="col-12 col-md-3 mb-4">
            <FilterSection />

            <div className="bg-light p-3 text-center mt-4 rounded">
              <h5 className="fw-bold mb-3">Brands</h5>
              <button className="btn btn-outline-secondary w-100">
                All Brands
              </button>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8eb535f7e707114e5ee989fcd93176aeeaf18454db55fea8c09b99dd5ce0ab90?placeholderIfAbsent=true&apiKey=1a2630dba26c44fe94fe53d5e705e42a"
                alt="Brand logos"
                className="img-fluid mt-3"
              />
            </div>

            <div className="bg-light p-3 text-center mt-4 rounded">
              <h5 className="fw-bold mb-3">Compare Products</h5>
              <p className="small text-muted">You have no items to compare.</p>
            </div>

            <div className="bg-light p-3 text-center mt-4 rounded">
              <h5 className="fw-bold mb-3">My Wish List</h5>
              <p className="small text-muted">
                You have no items in your wish list.
              </p>
            </div>

            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6a78b711dbc58b395aef4fccb46f698313d5347dfbcb17eaca75f73108fd34f?placeholderIfAbsent=true&apiKey=1a2630dba26c44fe94fe53d5e705e42a"
              alt="Promotional banner"
              className="img-fluid mt-4"
            />
          </div>

          {/* Main Content */}
          <div className="col-12 col-md-9">
            <div className="mb-4">
              <div className="d-flex gap-2 flex-wrap">
                <button className="btn btn-outline-secondary">
                  CUSTOM PCS <span className="text-muted">(24)</span>
                </button>
                <button className="btn btn-outline-secondary">
                  HP/COMPAQ PCS <span className="text-muted">(24)</span>
                </button>
                <button className="btn btn-outline-secondary">Clear All</button>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-4">
              {products.map((product, index) => (
                <div key={index} className="col p-0">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>

            <Pagination />

            <article className="mt-5 small text-muted">
              <p className="mb-3">
                MSI has unveiled the Prestige Series line of business-class and
                gaming notebooks. Tuned for color accuracy, the Prestige Series
                also leverages True Color Technology, which allows users to
                adjust the display profile to best fit their computing needs.
              </p>
              <p className="mb-3">
                There are six different screen profiles, which are tuned for
                gaming, reducing eye fatigue, sRGB color accuracy, increasing
                clarity for words and lines, reducing harmful blue light, and
                optimizing contrast for watching movies.
              </p>
              <p className="mb-3">
                Given the various display profiles and discrete graphics chip,
                the Prestige Series notebooks can be used for various design
                work as well as for office tasks given that the screen can be
                adjusted for better clarity, color accuracy, or for eye strain
                reduction. Users working with video or 3D rendering will
              </p>
              <p className="mb-3">
                strain. This is helpful when working on the computer for
                extended periods of time. Additionally, in their down time,
                brightness.
              </p>
            </article>

            <div className="text-center mt-4">
              <button className="btn btn-outline-secondary">More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
