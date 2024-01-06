import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main data-testid="main-content">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
