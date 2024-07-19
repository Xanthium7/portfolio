import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Contact = () => {
  useGSAP(() => {
    // gsap.to(
    //   "#c_text",
    //   {
    //     scrollTrigger: {
    //       trigger: "#text_holder",
    //       start: "top top",
    //       end: "bottom top",
    //       scrub: 0.01,
    //       pin: true,
    //     },
    //     fontSize: "30em",
    //     duration: 1,
    //     ease: "power1.inOut",
    //   },
    //   0.25
    // );
  }, []);
  return (
    <div className="h-screen w-screen">
      <div className="mx-10 h-full w-full">
        <div id="text-holder" className="mt-48 overflow-hidden h-full w-full  ">
          <h1 id="c_text" className="">
            {" "}
            CONTACT
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
