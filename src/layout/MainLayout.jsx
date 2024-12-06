import React from "react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
