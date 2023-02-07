import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mx-4">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
