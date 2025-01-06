import React from "react";
import Header from "../components/Header"
import course from "../components/course";
import Footer from "../components/Footer";
function courses() {
  return (
    <>
      <Header/>
      <div className=" min-h-screen">
        <course />
      </div>
      <Footer />
    </>
  );
}

export default courses;