

import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="bg-dark-color py-5 main-color w-100">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <h1 className="display-1 text-center main-color FIRM">FIRM</h1>
            <div className="social-media-links d-flex justify-content-around py-4 fs-2">
              <a href className="main-color hover-color-change">
                <i className="fa-brands fa-facebook" />
              </a>
              <a href className="main-color hover-color-change">
                <i className="fa-brands fa-linkedin" />
              </a>
              <a href className="main-color hover-color-change">
                <i className="fa-brands fa-instagram" />
              </a>
              <a href className="main-color hover-color-change">
                <i className="fa-brands fa-github" />
              </a>
              <a href className="main-color hover-color-change">
                <i className="fa-brands fa-discord" />
              </a>
              <a href className="main-color hover-color-change">
                <i className="fa-brands fa-youtube" />
              </a>
              <a href className="main-color hover-color-change">
                <i className="fa-solid fa-envelope" />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-8 text-center d-flex align-items-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque nesciunt eligendi repudiandae maiores ipsa. Nihil alias
              corporis possimus aperiam eveniet, velit provident ipsam at dicta.
              Id aliquid ad quisquam saepe?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

