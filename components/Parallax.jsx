import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

const Parallax = () => {
  useGSAP(() => {
    // gsap.to("#img_holder_1", {
    //   scrollTrigger: {
    //     trigger: "#img_holder_1",
    //     start: "top center",
    //     end: "bottom center",
    //     scrub: 1,
    //   },
    //   x: -280,
    //   duration: 1,
    //   ease: "power1.inOut",
    // });
  }, []);
  return (
    <div className="h-screen w-screen">
      <div id="img_holder_1" className="h-1/2">
        IMG HOLDER
      </div>
      <div className="h-1/2"></div>
    </div>
  );
};

export default Parallax;
