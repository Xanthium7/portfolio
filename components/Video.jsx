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
      videoRef.current.playbackRate = 0.55;
    }
  }, []);
  return (
    <section className="h-screen w-screen  cursor-none">
      <div className="mt-12 relative overflow-hidden">
        <video
          ref={videoRef}
          className="h-[50vh] md:h-[70vh] w-full object-cover bg-fixed  opacity-50 "
          autoPlay
          muted
          loop
          preload="none"
        >
          <source type="video/mp4" src="/hero_me1.mp4" />
        </video>
      </div>
      <div className=" mt-24 md:mt-12  mx-5 relative overflow-hidden">
        <p
          onMouseEnter={enlarge}
          onMouseLeave={delarge}
          className=" details  md:text-3xl text-center uppercase md:leading-[2.5rem] relative translate-y-52"
        >
          <span className="text-[#f2f2f2]  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad
          </span>
          <span className="text-[#f2f2f2]  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad
          </span>
          <span className="text-[#f2f2f2]  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad
          </span>
          <span className="text-[#f2f2f2]  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad
          </span>

          <span className="hidden  md:inline  ">
            Excepturi vero illo ut laudantium necessitatibus hic! A nostrum
            laboriosam temporibus dicta!
          </span>
        </p>
      </div>
    </section>
  );
};

export default Video;
