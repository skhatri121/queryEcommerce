import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CategoryFilter from "./CategoryFilter";

const HeaderFooter = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <CategoryFilter />
      {children}
      <Footer />
    </>
  );
};

export default HeaderFooter;
