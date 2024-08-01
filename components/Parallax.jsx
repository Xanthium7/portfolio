import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

const Parallax = () => {
  useGSAP(() => {
    // gsap.to("#container", {
    //   scrollTrigger: {
    //     trigger: "#container",
    //     start: "top bottom",
    //     end: "bottom top",
    //     scrub: 0.01,
    //     // pin: "#container",
    //   },
    //   height: "100%",
    //   duration: 1,
    //   ease: "power1.inOut",
    // });
    // gsap.to("#img_holder_1", {
    //   scrollTrigger: {
    //     trigger: "#img_holder",
    //     start: "top top",
    //     end: "bottom bottom",
    //     scrub: 0.01,
    //     pin: "#holder",
    //   },
    //   y: "-60%",
    //   duration: 0.5,
    //   ease: "power1.inOut",
    // });
    gsap.to("#container", {
      scrollTrigger: {
        trigger: "#container",
        start: "top top", // Start pinning at the top of the viewport
        end: "bottom bottom", // End pinning at the bottom of the viewport
        scrub: true, // Smooth scrubbing, consider setting to a number for smoother scrubbing
        // pin: true, // Pin the element
      },
    });
    gsap.to("#img_holder_1", {
      scrollTrigger: {
        trigger: "#holder",
        start: "top bottom", // Start pinning at the top of the viewport
        end: "bottom center", // End pinning at the bottom of the viewport
        scrub: 0.1, // Smooth scrubbing, consider setting to a number for smoother scrubbing
      },
      y: "-40%",
      duration: 2,
    });
    gsap.to("#img_holder_2", {
      scrollTrigger: {
        trigger: "#holder",
        start: "top bottom", // Start pinning at the top of the viewport
        end: "bottom center", // End pinning at the bottom of the viewport
        scrub: 0.1, // Smooth scrubbing, consider setting to a number for smoother scrubbing
      },
      y: window.innerWidth > 768 ? "40%" : "-30%",
      duration: 2,
    });
    gsap.to("#img_holder_3", {
      scrollTrigger: {
        trigger: "#holder",
        start: "top bottom", // Start pinning at the top of the viewport
        end: "bottom center", // End pinning at the bottom of the viewport
        scrub: 0.1, // Smooth scrubbing, consider setting to a number for smoother scrubbing
      },
      y: "-40%",
      duration: 2,
    });
    gsap.to("#img_holder_4", {
      scrollTrigger: {
        trigger: "#holder",
        start: "top bottom", // Start pinning at the top of the viewport
        end: "bottom center", // End pinning at the bottom of the viewport
        scrub: 0.1, // Smooth scrubbing, consider setting to a number for smoother scrubbing
      },
      y: "-40%",
      duration: 2,
    });
  }, []);

  return (
    <div className="h-[50vh] md:h-[120vh] w-screen overflow-hidden cursor-none">
      <div
        id="container"
        className="bg-[#3d3d3df1]  w-full h-[100%] overflow-hidden z-40"
      >
        <div id="holder" className="overflow-hidden">
          <div id="img_holder" className="flex gap-2 md:gap-5">
            <div
              id="img_holder_1"
              className="w-1/2 md:w-1/4 h-full flex flex-col gap-2 md:gap-5 translate-y-[0%]"
            >
              <div className="h-1/3 overflow-hidden object-center rounded-3xl">
                <img className=" object-cover" src="_1.png" alt="" />
              </div>
              <div className="h-1/3 overflow-hidden object-center">
                <img className=" object-cover" src="_2.png" alt="" />
              </div>
              <div className="h-1/3 overflow-hidden object-center">
                <img className=" object-cover" src="_3.png" alt="" />
              </div>
            </div>
            <div
              id="img_holder_2"
              className=" w-1/2  md:w-1/4 h-full flex flex-col gap-2 md:gap-5 md:translate-y-[-50%]"
            >
              <div className="h-1/3 overflow-hidden object-center rounded-3xl">
                <img className=" object-cover " src="_4.png" alt="" />
              </div>
              <div className="h-1/3 overflow-hidden object-center rounded-3xl">
                <img className=" object-cover" src="_11.png" alt="" />
              </div>
              <div className="h-1/3  overflow-hidden object-center  rounded-3xl">
                <img className="  object-cover" src="_6.png" alt="" />
              </div>
            </div>
            <div
              id="img_holder_3"
              className="w-0 md:w-1/4  h-full flex flex-col gap-2 md:gap-5"
            >
              <div className="h-1/3 overflow-hidden object-center rounded-3xl">
                <img className=" object-cover" src="_7.png" alt="" />
              </div>
              <div className="h-1/3 overflow-hidden object-center rounded-3xl">
                <img className=" object-cover" src="_10.png" alt="" />
              </div>
              <div className="h-1/3 overflow-hidden object-center rounded-3xl">
                <img className=" object-cover" src="_8.png" alt="" />
              </div>
            </div>
            <div
              id="img_holder_4"
              className="w-0 md:w-1/4 h-full  flex flex-col gap-2 md:gap-5 translate-y-[-10%]"
            >
              <div className="h-1/3 overflow-hidden object-center rounded-3xl">
                <img className=" object-cover" src="_8.png" alt="" />
              </div>
              <div className="h-1/3 overflow-hidden object-center rounded-3xl">
                <img className=" object-cover" src="_9.png" alt="" />
              </div>
              <div className="h-1/3 overflow-hidden object-center rounded-3xl">
                <img className=" object-cover" src="_4.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="h-1/2"></div>
      </div>
    </div>
  );
};

export default Parallax;
