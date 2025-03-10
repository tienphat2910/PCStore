import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import ProductFeatures from "../../components/ProductDisplay/ProductFeatures";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mt-5" style={{ maxWidth: "1279px" }}>
        {/* Breadcrumb Navigation */}
        <nav className="text-muted mb-4" style={{ fontSize: "14px", fontWeight: 300 }}>
          <span className="text-dark">Home </span>
          <span className="text-primary">›</span>
          <span className="text-dark"> Login</span>
        </nav>

        {/* Page Title */}
        <h1 className="mb-5 text-dark" style={{ fontWeight: 600, fontSize: "36px" }}>Đăng nhập</h1>

        {/* Main Content */}
        <div className="d-flex gap-5 flex-wrap">
          {/* Registered Customers Section */}
          <form className="flex-grow-1" style={{ maxWidth: "50%" }}>
            <div className=" p-5 shadow-sm" style={{ borderRadius: "12px", backgroundColor: '#F5F7FF' }}>
              <h2 className="text-dark mb-4" style={{ fontWeight: 600, fontSize: "22px" }}>Đã có tài khoản?</h2>

              {/* Email Input */}
              <div className="mb-4">
                <label htmlFor="email" className="form-label text-dark" style={{ fontSize: "16px", fontWeight: 600 }}>
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Your Email"
                  style={{
                    fontWeight: 300,
                    fontSize: "15px",
                    padding: "12px 15px",
                    borderRadius: "8px",
                  }}
                  required
                />
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <label htmlFor="password" className="form-label text-dark" style={{ fontSize: "16px", fontWeight: 600 }}>
                  Password <span className="text-danger">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Your Password"
                  style={{
                    fontWeight: 300,
                    fontSize: "15px",
                    padding: "12px 15px",
                    borderRadius: "8px",
                  }}
                  required
                />
              </div>

              {/* Buttons */}
              <div className="d-flex gap-4 align-items-center mt-4">
                <button
                  type="submit"
                  className="btn"
                  style={{
                    fontSize: "14px",
                    height: '50px',
                    width: '151px',
                    borderRadius: "50px",
                    fontWeight: 600,
                    backgroundColor: "#9933CC",
                    color: "#fff"
                  }}
                >
                  Đăng nhập
                </button>
                <a href="#" className="text" style={{ fontSize: "16px", fontWeight: 500, textDecoration: "none", color: "#9933CC" }}>
                  Quên mật khẩu?
                </a>
              </div>
            </div>
          </form>

          {/* New Customer Section */}
          <div className="flex-grow-1" style={{ maxWidth: "50%" }}>
            <div className="  p-5 shadow-sm" style={{ borderRadius: "12px", backgroundColor: '#F5F7FF' }}>
              <h2 className="text-dark mb-4" style={{ fontWeight: 600, fontSize: "22px" }}>Khách hàng mới?</h2>
              <p className="text-dark" style={{ fontWeight: 300, fontSize: "16px", marginBottom: "24px" }}>
                Tạo tài khoản để nhận nhiều ưu đãi:
                <ul className="mt-3" style={{ paddingLeft: "20px" }}>
                  <li className="mb-2">Thanh toán nhanh hơn</li>
                  <li className="mb-2">Giữ địa chỉ trước đó</li>
                  <li>Theo dõi đơn hàng và hơn nữa</li>
                </ul>
              </p>
              <button
                className="btn"
                style={{
                  fontSize: "14px",
                  height: '50px',
                  width: '208px',
                  borderRadius: "50px",
                  fontWeight: 600,
                  backgroundColor: "#9933CC",
                  color: "#fff"
                }}
                onClick={() => navigate('/signup')}
              >
                Tạo tài khoản
              </button>
            </div>
          </div>
        </div>


      </div>
      <ProductFeatures />
    </>
  );
};

export default LoginForm;
