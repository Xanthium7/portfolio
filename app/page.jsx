"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Lottie from "lottie-react";
import "./globals.css";

import animationData from "../public/anim2.json"; // Update the path to your Lottie file
import Video from "@/components/Video";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const animationRef = useRef(null);

  const d = 2;

  const [hi_s, setHi_s] = useState(0);

  useEffect(() => {
    try {
      animationRef.current.setSpeed(0.5);
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
    document.body.style.overflow = "hidden";
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
        stagger: 0, // Adjust the stagger value as needed for the desired delay between animations
        onComplete: () => {
          // Re-enable scrolling
          document.body.style.overflowY = "auto";
        },
      }
    );
    // add more here
  }, []);
  const developerLetters = "DEVELOPER".split("").map((letter, index) => (
    <span className="dev-text" key={index} style={{ display: "inline-block" }}>
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
      <div id="cursor" className="custom-cursor" />
      <main id="first" className="w-screen h-screen flex flex-col cursor-none">
        <nav
          id="nav"
          className="h-[60px] px-10 py-2 flex items-center justify-between border-b-[1px] border-[#bbbbbb27] "
        >
          <div className=" text-sm font-bold">AKSHHAY KM</div>
          <div className="text-xs hidden md:block transition-all hover:opacity-20 cursor-pointer">
            AI DEVELOPER
          </div>
          <div className="text-xs hidden md:block transition-all hover:opacity-20 cursor-pointer">
            FULL STACK
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
          <div id="text" className="flex justify-between ">
            <div
              onMouseEnter={enlarge}
              onMouseLeave={delarge}
              className="w-full text-xs md:text-lg max-w-[60vw] md:max-w-[35vw] text-left md:ml-5 mb-3 md:mb-[-1.2rem]"
            >
              <h1
                onMouseEnter={enlarge2}
                onMouseLeave={delarge2}
                id="hi_text"
                className="text-3xl md:text-8xl"
              ></h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              nostrum unde cumque optio{" "}
              <span className="hidden md:inline">
                cupiditate ab ad pariatur explicabo eligendi quam, aspernatur
                deleniti beatae totam ut illum. Ipsam commodi eum tempora.
              </span>
            </div>
            <div
              onMouseEnter={enlarge}
              onMouseLeave={delarge}
              className="animate-bounce text-xs mr-5 hidden md:block"
            >
              <p>Scroll to explore</p>
            </div>
          </div>
          <div
            onMouseEnter={enlarge}
            onMouseLeave={delarge}
            className={` dev_text text-[3.2rem] md:text-[15rem] p leading-none font-semibold  relative overflow-hidden `}
          >
            <h1 className=" ">{developerLetters}</h1>
          </div>
        </div>
      </main>
      <Video></Video>
      <Skills></Skills>
      <Footer></Footer>
    </>
  );
}
