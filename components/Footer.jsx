import React from "react";

const Footer = () => {
  return (
    <footer className="h-[30vh] w-screen ">
      <div className="w-full h-full flex flex-col justify-center  relative">
        <h1
          className="text-[2.5rem] text-center lg:text-[12rem]  font-bold mx-2"
          style={{ textShadow: "3px 3px 5px #5b27b7" }}
        >
          DROP ME A LINE
        </h1>
        <hr className="mb-2 " />
        <div className="flex mx-4 text-white text-[0.5rem] md:text-xs justify-between py-6">
          <a href="https://www.instagram.com/akshhay17/">@akshhay17</a>
          <a href="">INDIA (IST)</a>
          <a href="#first">BACK TO TOP</a>
          <a href="">@2024 ALL RIGHTS RESERVED</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
