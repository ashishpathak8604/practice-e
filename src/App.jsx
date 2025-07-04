import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import Pages
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";
import TrendingDetails from "./pages/TrendingDetails";
import Men from './pages/Men';
import Women from './pages/Women';
import Accessories from './pages/Accessories';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Import Common Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" element={<ProductListing />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/trending/:id" element={<TrendingDetails />} />
            <Route path="/category/men" element={<Men />} />
            <Route path="/category/women" element={<Women />} />
            <Route path="/category/accessories" element={<Accessories />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<UserProfile />} />
          
          </Routes>
        </main>
           <ToastContainer position="top-right" autoClose={2000} />

        <Footer />
      </div>
    </Router>

  );
}

export default App;
