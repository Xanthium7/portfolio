"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Lottie from "lottie-react";
import "./globals.css";
import Lenis from "lenis";
import animationData from "../public/anim2.json"; // Update the path to your Lottie file
import Video from "@/components/Video";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Projects from "@/components/Projects";
import Parallax from "@/components/Parallax";
import Contact from "@/components/Contact";
import CoolShit from "@/components/CoolShit";
import { OrbitingCirclesDemo } from "@/components/OrbitingCirclesDemo";
import Particles from "@/components/magicui/particles";
// import Organisations from "@/components/Organisations";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const animationRef = useRef(null);

  const d = 2;

  const [hi_s, setHi_s] = useState(0);

  useEffect(() => {
    try {
      animationRef.current.setSpeed(0);
      setTimeout(() => {
        animationRef.current.setSpeed(0.7);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
    const moveCursor = (e) => {
      const cursor = document.getElementById("cursor");

      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant", // Use 'smooth' for a smooth transition, 'instant' for immediate action
    });

    if (window.scrollY > 0) {
      window.scrollTo({
        top: 0,
        behavior: "instant", // Use 'smooth' for a smooth transition, 'instant' for immediate action
      });
    }
    document.body.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }, []);
  useEffect(() => {
    setTimeout(() => {
      const lenis = new Lenis();

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }, 5000);
  }, []);

  const enlarge = () => {
    gsap.to("#cursor", {
      scale: 3,
      duration: 0.1,
      ease: "power1.inOut",
    });
  };
  const delarge = () => {
    gsap.to("#cursor", {
      scale: 1,
      duration: 0.1,
      ease: "power1.inOut",
    });
  };
  const enlarge2 = () => {
    gsap.to("#cursor", {
      scale: 2,
      duration: 0.1,
      ease: "power1.inOut",
    });
    setHi_s(1);
  };
  const delarge2 = () => {
    gsap.to("#cursor", {
      scale: 1,
      duration: 0.1,
      ease: "power1.inOut",
    });
    setHi_s(0);
  };

  useGSAP(() => {
    gsap.fromTo(
      "#animation",
      {
        opacity: 0.8,
        scale: 0,
      },
      {
        opacity: 0.8,
        scale: 1.4,
        y: 100,
        duration: 3,

        ease: "power4.out",
      }
    );

    gsap.to("#animation", {
      delay: d + 1.5,
      scale: 1,
      // Use window.innerWidth to conditionally set the x property
      x: window.innerWidth >= 768 ? 300 : 0,
    });
    gsap.fromTo(
      "#text",
      {
        opacity: 0,
        x: -300,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: d + 2,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      "#nav",
      {
        y: -60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        delay: d + 2,
      }
    );
    gsap.fromTo(
      ".dev-text",
      {
        rotateZ: 0,
        y: 300,
        opacity: 1,
      },
      {
        rotateZ: 0,
        y: 0,
        opacity: 1,
        duration: 0.2,
        ease: "power1.inOut",
        delay: d + 2.5,
        stagger: 0.05, // Adjust the stagger value as needed for the desired delay between animations
        onComplete: () => {
          // Re-enable scrolling
          document.body.style.overflowY = "auto";
        },
      }
    );
    // add more here
    gsap.to(".common", {
      scrollTrigger: {
        trigger: ".dev-text",
        start: "top bottom",
        end: "bottom center",
        scrub: 0.5,
      },
      opacity: 0,
      scale: 0.75,
      duration: 1,
      ease: "power1.inOut",
      // duration: 1,
    });
    gsap.to("#hi_text", {
      scrollTrigger: {
        trigger: ".dev-text",
        start: "top bottom",
        end: "bottom center",
        scrub: 0.5,
      },
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
      // duration: 1,
    });
  }, []);
  const developerLetters = "DEVELOPER".split("").map((letter, index) => (
    <span
      className="dev-text common"
      key={index}
      style={{ display: "inline-block" }}
    >
      {letter}
    </span>
  ));
  useEffect(() => {
    setTimeout(() => {
      const hello = document.getElementById("hi_text");
      const t = ["Hey", "नमस्ते", "ご挨拶", "ഹായ്", "Hola", "Bonjour", "Hey"];
      t.map((ele, i) =>
        setTimeout(() => {
          hello.innerHTML = ele;
        }, i * 250)
      );
    }, 4700);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      const hello = document.getElementById("hi_text");
      const t = ["Hey", "नमस्ते", "ご挨拶", "ഹായ്", "Hola", "Bonjour", "Hey"];
      t.map((ele, i) =>
        setTimeout(() => {
          hello.innerHTML = ele;
        }, i * 150)
      );
    }, 0);
  }, [hi_s]);

  return (
    <>
      {/* cursor */}
      <div
        id="cursor"
        className="custom-cursor text-xs opacity-0 md:opacity-100"
      />
      <main
        id="first"
        className="w-screen h-screen flex flex-col cursor-none relative"
      >
        <Particles
          className="absolute inset-0 cursor-none"
          quantity={150}
          staticity={20}
          ease={80}
          // color={color}
          refresh
        />
        <nav
          id="nav"
          className="h-[60px] px-10 py-2 flex items-center justify-between border-b-[1px] border-[#bbbbbb27] "
        >
          <div className=" text-sm font-bold">AKSHHAY KM</div>
          <div className="text-xs hidden md:block transition-all hover:opacity-20 cursor-pointer">
            <a href="#p2-text">AI DEVELOPER</a>
          </div>
          <div className="text-xs hidden md:block transition-all hover:opacity-20 cursor-pointer">
            <a href="#p-text">FULL STACK</a>
          </div>
          <div className="border border-1 border-white p-2 rounded-full px-6 text-xs transition-all hover:bg-slate-100 hover:text-black">
            <a href="">CONTACT</a>
          </div>
        </nav>

        <div
          id="animation"
          className="flex items-center w-full h-full justify-center pointer-events-none"
        >
          <Lottie
            animationData={animationData}
            loop={true}
            autoPlay={true}
            lottieRef={animationRef}
          />
        </div>

        <div
          id="main"
          className="h-[calc(100vh-60px)] mx-2 md:mx-10 flex flex-col justify-center  md:justify-end pt-36 md:pt-0 uppercase"
        >
          <div id="text" className="flex justify-between z-30">
            <div
              onMouseEnter={enlarge}
              onMouseLeave={delarge}
              className="w-full text-xs md:text-lg max-w-[60vw] md:max-w-[35vw] text-left md:ml-5 mb-3 md:mb-[-1.2rem] relative"
            >
              <h1
                onMouseEnter={enlarge2}
                onMouseLeave={delarge2}
                id="hi_text"
                className=" text-3xl md:text-8xl"
                style={{ textShadow: "2px 2px 5px #5b27b7" }}
              ></h1>
              <p className="inline common z-30">
                I'm a developer who loves to create and explore new things. I
                have a passion for{" "}
                <span className="text-lg md:text-2xl md:mx-2 text-[#8945ff]">
                  <br className="md:hidden" />
                  AI
                </span>{" "}
                and{" "}
                <span className="text-lg md:text-2xl md:mx-2 text-[#8945ff]">
                  FULL STACK
                </span>{" "}
                development.{" "}
                <span className="hidden md:inline">
                  I'm currently working on a project that uses LLMS
                </span>
              </p>
            </div>
            <div
              onMouseEnter={enlarge}
              onMouseLeave={delarge}
              className="animate-bounce text-xs mr-5 hidden md:block"
            >
              <p className="common">Scroll to explore</p>
            </div>
          </div>
          <div
            onMouseEnter={enlarge}
            onMouseLeave={delarge}
            className={` dev_text text-[3.2rem] md:text-[15rem] z-30 leading-none font-semibold  relative overflow-hidden `}
          >
            <h1
              className="max-w-[100vw] max-h-fit whitespace-nowrap "
              style={{ textShadow: "2px 2px 5px #5b27b7" }}
            >
              {developerLetters}
            </h1>
          </div>
        </div>
      </main>
      <Video></Video>
      <Skills></Skills>
      {/* <CoolShit></CoolShit> */}
      {/* <Organisations></Organisations> */}
      <OrbitingCirclesDemo></OrbitingCirclesDemo>

      <Projects></Projects>
      <Parallax></Parallax>

      <Contact></Contact>
      {/* <Projects></Projects> */}
      {/*  */}
      <Footer></Footer>
    </>
  );
}
