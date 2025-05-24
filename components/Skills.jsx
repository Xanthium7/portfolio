import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Bebas_Neue } from "next/font/google";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Marquee from "./ui/marquee";

gsap.registerPlugin(ScrollTrigger);

// const [scrollPos, setscrollPos] = useState(0);

const inter = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const Skills = () => {
  useGSAP(() => {
    gsap.to("#progress", {
      scrollTrigger: {
        trigger: "#p_holder",
        start: "top",
        end: "+=2150",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          //   setscrollPos(self.progress);
          if (self.progress > 0) {
            gsap.to(".ido1", { opacity: 1 });
          }
          if (self.progress < 0.166) {
            gsap.to(".ido1", { opacity: 0 });
          }
          if (self.progress > 0.166) {
            gsap.to(".ido2", { opacity: 1 });
          }
          if (self.progress < 0.333) {
            gsap.to(".ido2", { opacity: 0 });
          }
          if (self.progress > 0.333) {
            gsap.to(".ido3", { opacity: 1 });
          }
          if (self.progress < 0.499) {
            gsap.to(".ido3", { opacity: 0 });
          }
          if (self.progress > 0.499) {
            gsap.to(".ido4", { opacity: 1 });
          }
          if (self.progress < 0.664) {
            gsap.to(".ido4", { opacity: 0 });
          }
          if (self.progress > 0.664) {
            gsap.to(".ido5", { opacity: 1 });
          }
          if (self.progress < 0.8) {
            gsap.to(".ido5", { opacity: 0 });
          }
          if (self.progress > 0.8) {
            gsap.to(".ido6", { opacity: 1 });
          }
          if (self.progress < 0.8) {
            gsap.to(".ido6", { opacity: 0 });
          }
        },
      },
      width: "100%",
      // background: "#b72752",
      duration: 1,
    });
    gsap.from("#hif", {
      scrollTrigger: {
        trigger: "#h_holder",
        start: "bottom 90%",
        end: "bottom center",
        scrub: 0.5,
      },
      y: 150,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="h-[40vh] md:h-[330vh] w-screen cursor-none">
      <div
        className={`flex flex-col lg:gap-16 ${inter.className} text-4xl md:text-8xl text-transparent`}
      >
        <div className="slider-container ">
          <Marquee className="[--duration:20s]">
            <div className=" lg:mx-36 h-fit ">
              <h3 className="text-center scroll_text_moving ">REACT</h3>
            </div>
            <div className="w-1/3 lg:mx-36 h-fit">
              <h3 className="text-center scroll_text_moving ">TAILWIND</h3>
            </div>
            <div className="w-1/3 lg:mx-36 h-fit">
              <h3 className="text-center scroll_text_moving ">ES6</h3>
            </div>
            <div className="w-1/3 lg:mx-36 h-fit">
              <h3 className="text-center scroll_text_moving ">PYTHON</h3>
            </div>
            <div className="w-1/3 lg:mx-36 h-fit">
              <h3 className="text-center scroll_text_moving ">TYPESCRIPT</h3>
            </div>
            <div className="w-1/3 lg:mx-36 h-fit">
              <h3 className="text-center scroll_text_moving ">HTMLX</h3>
            </div>
            <div className="w-1/3 lg:mx-36 h-fit">
              <h3 className="text-center scroll_text_moving ">CSS</h3>
            </div>
            <div className="w-1/3 lg:mx-36 h-fit">
              <h3 className="text-center scroll_text_moving ">JAVASCRIPT</h3>
            </div>
            <div className="w-1/3 lg:mx-36 h-fit">
              <h3 className="text-center scroll_text_moving ">MSQL</h3>
            </div>
          </Marquee>
        </div>
        <div className="slider-container text-4xl md:text-8xl">
          <Marquee reverse={true} className="[--duration:20s]">
            <div className="w-1/3 lg:mx-36 h-fit px-5">
              <h3 className="text-center scroll_text_moving ">DJANGO</h3>
            </div>
            <div className="w-1/3 lg:mx-36 h-fit px-5">
              <h3 className="text-center scroll_text_moving ">GSAP</h3>
            </div>
            <div className="w-1/3 lg:mx-36 h-fit px-5">
              <h3 className="text-center scroll_text_moving ">NEXTJS</h3>
            </div>
            <div className="w-1/3 h-fit px-5">
              <h3 className="text-center scroll_text_moving ">OPENAI</h3>
            </div>
            <div className="w-1/3 lg:mx-36 h-fit px-5">
              <h3 className="text-center scroll_text_moving ">LLAMA</h3>
            </div>
            <div className="w-1/3 lg:mx-36 h-fit px-5">
              <h3 className="text-center scroll_text_moving ">FIGMA</h3>
            </div>
            <div className="w-1/3 lg:mx-36 h-fit px-5">
              <h3 className="text-center scroll_text_moving pl-6"> FIREBASE</h3>
            </div>
            <div className="w-1/3 lg:mx-36 h-fit px-5">
              <h3 className="text-center scroll_text_moving ">BLENDER</h3>
            </div>
          </Marquee>
        </div>
      </div>
      <div id="h_holder" className="hidden md:flex  w-full  justify-center">
        <div
          id="p_holder"
          className=" w-[80%] h-[70vh]  flex flex-col justify-center  "
        >
          <div className=" relative overflow-hidden">
            <h1
              id="hif"
              className="md:text-6xl mb-5 "
              style={{ textShadow: "3px 3px 5px #5b27b7" }}
            >
              HOW I FUNCTION
            </h1>
          </div>
          <div
            id="progress"
            className="flex items-center bg-[#dbdbdbdc] mt-5 h-[10px] w-[0%] z-10  pointer-events-none overflow-hidden"
          ></div>
          <div className="flex justify-between text-[0.5rem] md:text-xl mt-5">
            <p className="ido1 opacity-0">BRAINSTROMING</p>
            <p className="ido2 opacity-0">WIRE FRAMING</p>
            <p className="ido3 opacity-0">DESIGNING</p>
            <p className="ido4 opacity-0">CODING</p>
            <p className="ido5 opacity-0">TESTING</p>
            <p className="ido6 opacity-0">DELIVERING</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
