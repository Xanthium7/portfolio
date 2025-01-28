import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Video = () => {
  const videoRef = useRef(null);
  useGSAP(() => {
    gsap.from(videoRef.current, {
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
      scale: 1.2,
      duration: 1,
    });
    gsap.to(".details", {
      scrollTrigger: {
        trigger: videoRef.current,
        start: "bottom 90%",
        end: "bottom center",
        scrub: 0.5,
      },
      y: 0,
      duration: 1,
    });
  }, []);
  const enlarge = () => {
    gsap.to("#cursor", {
      scale: 2,
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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);
  return (
    <section className="h-auto w-full cursor-none">
      <div className="mt-16 md:mt-32 relative overflow-hidden">
        <video
          ref={videoRef}
          className="h-[30vh] md:h-[70vh] w-full object-cover object-top bg-fixed opacity-50"
          autoPlay
          muted
          loop
          loading="lazy"
          preload="none"
        >
          <source type="video/mp4" src="/hero.mp4" />
        </video>
      </div>
      <div className="mt-12 md:mt-24 mx-2 md:mx-5 relative overflow-hidden">
        <p
          onMouseEnter={enlarge}
          onMouseLeave={delarge}
          className="details text-xs  md:text-3xl text-center pb-10 uppercase md:leading-[2.5rem] relative translate-y-32 md:translate-y-52"
        >
          <span className="text-[#f2f2f2]  ">
            Hey! I'm a developer whose currently Student at MITS.{" "}
          </span>
          <span className="text-[#f2f2f2]  ">
            When I'm not finding bugs, I'm pushing weights, sketching or binging
            anime.
          </span>
          <span className="text-[#f2f2f2]  ">
            I've crafted full-stack marvels and even dabbled in AI tech.
          </span>
          <span className="text-[#f2f2f2]  ">
            Let's join forces and create some mind-blowing tech together!
          </span>

          <span className="hidden  md:inline  ">
            {" "}
            Bring you digital ideas and vision true
          </span>
        </p>
      </div>
    </section>
  );
};

export default Video;
