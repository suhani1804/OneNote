import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Routers from "../router/Routers";

const Layout = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className=" bg-slate-300">
          <Routers />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
