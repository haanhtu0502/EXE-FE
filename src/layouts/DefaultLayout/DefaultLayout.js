import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <div className="upper_container">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
