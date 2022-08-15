import { Routes, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import CartProvider from "./Context/CartProvider";
import Layout from "./Layout/Layout";
import AboutUsPage from "./Pages/AboutUsPage";
import BlogPage from "./Pages/BlogePage";
import CartPage from "./Pages/CartPage";
import CheckOutPage from "./Pages/CheckOutPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import ProfilePage from "./Pages/ProfilePage";
import SignUpPage from "./Pages/SignUpPage";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <CartProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="checkout" element={<CheckOutPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="signUp" element={<SignUpPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="aboutUs" element={<AboutUsPage />} />
              <Route path="blogs" element={<BlogPage />} />
              <Route path="product/:id" element={<ProductDetailPage />} />
            </Routes>
          </Layout>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
