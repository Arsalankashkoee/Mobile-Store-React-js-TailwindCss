import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen ">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
