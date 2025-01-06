import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";

const About = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10  ">
        <div className=" order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold font-mono underline">
              WELCOME TO OUR
              <br />
              <span className="text-teal-300 font-serif underline">
                BOOKSTORE
              </span>
            </h1>
            <br />

            <p className="text-xxl 	text-justify text-dark-900 ">
              Every month,we send our subscribers a box with the five best books
              of the month.These are best sellers and classic books that deserve
              to be read and placed on your bookshelf.
              <br /> <br />
              We select books according to the preferences of our customers.In
              addition,you can always attend our events join the book club or
              just visit our offline store in New York.
            </p>
          </div>
          <button className="btn mt-6 btn-outline font-bold btn-success bg-white">
            <a
              href="#"
              target="_blank"
              className="text-decoration-none text-black "
            >
              Learn More
            </a>
          </button>
        </div>
        {/* <div className=" order-1 w-full md:w-1/2 mt-32">
          <img src={banner} alt="" className="w-92 h-81" />
        </div> */}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default About;
