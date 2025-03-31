import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Signup from "@/pages/Signup/Signup";
import Cart from "../pages/Cart/Cart";
import CheckoutPage from "../pages/CheckOut/CheckoutPage";
import Catalog from "../pages/Catalog/Catalog";
import ProductDetailsAll from "../components/ProductDetails/ProductDetailsAll";
import PrivacyPolicy from "../pages/policy/PrivacyPolicy";
import WarrantyPolicy from "../pages/policy/WarrantyPolicy";
import ShippingPolicy from "../pages/policy/ShippingPolicy";
import AboutUs from "../pages/info/AboutUs";
import Contact from "../pages/info/Contact";
import PurchaseGuide from "../pages/info/PurchaseGuide";
import InstallmentGuide from "../pages/info/InstallmentGuide";
import PaymentGuide from "../pages/info/PaymentGuide";

const publicRoutes = [
  { path: "/home", component: Home },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/cart", component: Cart },
  { path: "/checkout", component: CheckoutPage },
  { path: "/details/:id", component: ProductDetailsAll },
  { path: "/catalog", component: Catalog },
  { path: "/privacy-policy", component: PrivacyPolicy },
  { path: "/warranty-policy", component: WarrantyPolicy },
  { path: "/shipping-policy", component: ShippingPolicy },
  { path: "/about-us", component: AboutUs },
  { path: "/contact", component: Contact },
  { path: "/purchase-guide", component: PurchaseGuide },
  { path: "/installment-guide", component: InstallmentGuide },
  { path: "/payment-guide", component: PaymentGuide },
];

// Đăng nhập mới xem được (Login)
const privateRoutes = [];

export { publicRoutes, privateRoutes };
