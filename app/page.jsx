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
import TileFlip from "@/components/TileFlip";
// import Hyperspeed from "@/components/Hyperspeed";
// import Organisations from "@/components/Organisations";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const animationRef = useRef(null);
  const d = 2;
  const [hi_s, setHi_s] = useState(0);

  // Ref to store timeout IDs for hi_text animations to allow cancellation
  const hiTextAnimationTimeouts = useRef([]);

  // Helper function to animate text and manage timeouts
  const runTextAnimationSequence = (
    elementId,
    texts,
    interval,
    startDelay = 0
  ) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    // Clear previous timeouts for this animation sequence
    hiTextAnimationTimeouts.current.forEach(clearTimeout);
    hiTextAnimationTimeouts.current = [];

    const initialTimeoutId = setTimeout(() => {
      texts.forEach((text, index) => {
        const timeoutId = setTimeout(() => {
          const currentElement = document.getElementById(elementId);
          if (currentElement) {
            currentElement.innerHTML = text;
          }
        }, index * interval);
        hiTextAnimationTimeouts.current.push(timeoutId);
      });
    }, startDelay);
    hiTextAnimationTimeouts.current.push(initialTimeoutId);
  };

  useEffect(() => {
    // Lottie speed adjustment
    if (
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    )
      document.querySelector("html").style.fontSize = `${
        100 / window.devicePixelRatio
      }%`;
    let lottieSpeedTimeoutId;
    if (animationRef.current) {
      try {
        animationRef.current.setSpeed(0);
        lottieSpeedTimeoutId = setTimeout(() => {
          if (animationRef.current) {
            animationRef.current.setSpeed(0.7);
          }
        }, 2000);
      } catch (error) {
        console.error("Error setting Lottie speed:", error);
      }
    }

    // Cursor movement
    const moveCursor = (e) => {
      const cursor = document.getElementById("cursor");
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", moveCursor);

    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (lottieSpeedTimeoutId) {
        clearTimeout(lottieSpeedTimeoutId);
      }
    };
  }, []);

  useEffect(() => {
    // Scroll to top and hide overflow initially
    window.scrollTo({ top: 0, behavior: "instant" });
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden"; // Ensure html also has overflow hidden
  }, []);

  useEffect(() => {
    // Lenis smooth scrolling initialization
    let lenisInstance;
    let rafId;

    const lenisTimeoutId = setTimeout(() => {
      lenisInstance = new Lenis();
      function raf(time) {
        if (lenisInstance) {
          // Check if lenisInstance is defined
          lenisInstance.raf(time);
        }
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    }, 5000);

    return () => {
      clearTimeout(lenisTimeoutId);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (lenisInstance && typeof lenisInstance.destroy === "function") {
        lenisInstance.destroy();
      }
    };
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
          // Re-enable scrolling for both body and html
          document.body.style.overflowY = "auto";
          document.body.style.overflowX = "hidden";
          document.documentElement.style.overflowY = "auto";
          document.documentElement.style.overflowX = "hidden";
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

  // Effect for the initial "hi_text" animation after page load delay
  useEffect(() => {
    const texts = ["Hey", "नमस्ते", "ご挨拶", "ഹായ്", "Hola", "Bonjour", "Hey"];
    // This delay aligns with other entrance animations
    runTextAnimationSequence("hi_text", texts, 250, 4700);

    // Cleanup for this effect's timeouts on component unmount
    return () => {
      hiTextAnimationTimeouts.current.forEach(clearTimeout);
    };
  }, []); // Runs once on mount

  // Effect for "hi_text" animation based on hover state (hi_s)
  useEffect(() => {
    // This effect runs on mount (hi_s is 0 initially) and whenever hi_s changes,
    // replicating the original behavior of animating on hover and on initial load quickly.
    const texts = ["Hey", "नमस्ते", "ご挨拶", "ഹായ്", "Hola", "Bonjour", "Hey"];
    runTextAnimationSequence("hi_text", texts, 150, 0); // Faster animation, no initial delay
  }, [hi_s]); // Runs on mount and when hi_s changes

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
          quantity={130}
          staticity={20}
          ease={80}
          // color={color}
          refresh
        />

        <Particles
          className="absolute inset-0 cursor-none"
          quantity={200}
          staticity={20}
          ease={80}
          color={"#8c09c9"}
          refresh
        />

        <nav
          id="nav"
          className="h-[60px] px-10 py-2 flex items-center justify-between border-b-[1px] border-[#bbbbbb27] "
        >
          <div className=" text-sm font-bold akshhay ">AKSHHAY KM</div>
          <div className="text-xs hidden md:block transition-all hover:opacity-20 cursor-pointer">
            <a href="#p2-text">AI DEVELOPER</a>
          </div>
          <div className="text-xs hidden md:block transition-all hover:opacity-20 cursor-pointer">
            <a href="#p-text">FULL STACK</a>
          </div>
          <div className="border border-1 border-white p-2 rounded-full px-6 text-xs transition-all hover:bg-slate-100 hover:text-black">
            <a href="#contac_me">CONTACT</a>
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
              <p className="inline common z-30 md:text-base text-xs md:pb-0 pb-14">
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
            className={`dev_text z-30  leading-none font-semibold relative  overflow-hidden`}
          >
            <h1
              className="max-w-full max-h-fit whitespace-nowrap text-[3.2rem] md:text-[12rem] lg:text-[15rem]"
              style={{ textShadow: "2px 2px 5px #5b27b7" }}
            >
              {developerLetters}
            </h1>
          </div>
        </div>
      </main>
      <Video></Video>
      <Skills></Skills>
      {/* <TileFlip></TileFlip> */}
      {/* <CoolShit></CoolShit> */}
      {/* <Organisations></Organisations> */}
      <OrbitingCirclesDemo></OrbitingCirclesDemo>

      <Projects></Projects>
      <Parallax></Parallax>

      <TileFlip></TileFlip>
      <Contact></Contact>
      {/* <Projects></Projects> */}
      {/*  */}
      <Footer></Footer>
    </>
  );
}
