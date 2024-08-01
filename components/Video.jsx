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
      videoRef.current.playbackRate = 0.7;
    }
  }, []);
  return (
    <section className="h-screen w-screen  cursor-none">
      <div className="mt-12 relative overflow-hidden">
        <video
          ref={videoRef}
          className="h-[50vh] md:h-[70vh] w-full object-cover object-top bg-fixed  opacity-50 "
          autoPlay
          muted
          loop
          preload="none"
        >
          <source type="video/mp4" src="/hero_me2.mp4" />
        </video>
      </div>
      <div className=" mt-24 md:mt-12 mx-2 md:mx-5 relative overflow-hidden">
        <p
          onMouseEnter={enlarge}
          onMouseLeave={delarge}
          className=" details text-sm md:text-3xl text-center uppercase md:leading-[2.5rem] relative translate-y-52"
        >
          <span className="text-[#f2f2f2]  ">
            Hey! I'm the dev who turns caffeine into code.{" "}
          </span>
          <span className="text-[#f2f2f2]  ">
            When not pushing pixels, I'm pushing weights or binging anime.
          </span>
          <span className="text-[#f2f2f2]  ">
            I've crafted full-stack marvels and even dabbled in AI magic.
          </span>
          <span className="text-[#f2f2f2]  ">
            Let's create digital magic together
          </span>

          <span className="hidden  md:inline  ">
            Bring you digital ideas and vison true
          </span>
        </p>
      </div>
    </section>
  );
};

export default Video;
