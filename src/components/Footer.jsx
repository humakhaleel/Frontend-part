import React from "react";
import { Link } from "react-router-dom";
// import "./App.css"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <footer className="bg-dark text-white py-3">
          <div className="container text-center">
            <p>&copy; 2024 My Platform. All rights reserved.</p>
            <div className="d-flex align-items-center justify-content-center">
              <p className="mt-3 me-4">Contact us on social platforms :</p>
              <Link href="#" style={{ color: "white" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-twitter-x ms-2"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;