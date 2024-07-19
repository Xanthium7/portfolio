import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import Globe from "@/components/magicui/globe";

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
          <div className="h-1/6">
            <h1 id="c_text" className="text-4xl">
              {" "}
              CONTACT
            </h1>
          </div>
          <div className="flex bg-red-500 justify-around h-5/6">
            <div className="w-1/2">
              <p className="text-3xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptates maxime facere esse consequuntur deleniti fugiat
                dolor, voluptatum debitis, est dolores, soluta consectetur
                magni. Sequi laudantium nam quas officia unde eaque nulla,
                mollitia veritatis laborum. Optio ex atque perferendis
                cupiditate commodi.
              </p>
            </div>
            <div className="w-1/2">
              {/* <div className="relative  flex h-full w-full items-center justify-center overflow-hidden rounded-lg    ">
                <Globe className="" glowColor={[91, 39, 183]} />
                <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
