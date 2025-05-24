import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

const Parallax = () => {
  useGSAP(() => {
    // Pin the container
    ScrollTrigger.create({
      trigger: "#container",
      start: "top top",
      end: "bottom bottom", // Pin for the entire height of the container
      pin: true,
      scrub: 0.1, // Smooth scrubbing
    });

    const mm = gsap.matchMedia();

    mm.add(
      {
        // Setup queries for different screen sizes
        isDesktop: "(min-width: 769px)",
        isMobile: "(max-width: 768px)",
      },
      (context) => {
        // Get the conditions for this context
        const { isDesktop } = context.conditions;

        gsap.to("#img_holder_1", {
          scrollTrigger: {
            trigger: "#holder",
            start: "top bottom",
            end: "bottom top", // Animate throughout the holder's visibility
            scrub: 1, // Adjusted for smoother effect
          },
          y: "-40%",
        });

        gsap.to("#img_holder_4", {
          scrollTrigger: {
            trigger: "#holder",
            start: "top bottom",
            end: "bottom top",
            scrub: 1, // Adjusted for smoother effect and removed invalid animate property
          },
          y: "-40%",
        });
        gsap.to("#img_holder_3", {
          scrollTrigger: {
            trigger: "#holder",
            start: "top bottom",
            end: "bottom top",
            scrub: 1, // Adjusted for smoother effect
          },
          y: "-40%",
        });

        gsap.to("#img_holder_4", {
          scrollTrigger: {
            trigger: "#holder",
            start: "top bottom",
            end: "bottom top",
            scrub: 1, // Adjusted for smoother effect and removed invalid animate property
          },
          y: "-40%",
        });

        // Cleanup function for matchMedia
        return () => {
          // Kill ScrollTriggers specifically created within this media query context
          // You might need to assign ScrollTrigger instances to variables to kill them precisely
          // or use a more general approach if that's difficult to manage.
          // For simplicity, if tweens are killed, their associated ScrollTriggers might also be handled.
          gsap.killTweensOf([
            "#img_holder_1",
            "#img_holder_2",
            "#img_holder_3",
            "#img_holder_4",
          ]);
          // If you have specific ScrollTrigger instances, kill them:
          // st1.kill(); st2.kill(); etc.
          // As a broader cleanup, you can kill all ScrollTriggers, but be cautious if other ScrollTriggers exist outside this scope.
          // ScrollTrigger.getAll().forEach(st => st.kill());
        };
      }
    );
  }, []);

  return (
    <div className="h-[50vh] md:h-[120vh] w-screen overflow-hidden cursor-none">
      <div
        id="container"
        className="bg-[#3d3d3df1]  w-full h-[100%] overflow-hidden z-40"
      >
        <div id="holder" className="overflow-hidden">
          <div id="img_holder" className="flex gap-2 md:gap-5">
            <div
              id="img_holder_1"
              className="w-1/2 md:w-1/4 h-full flex flex-col gap-2 md:gap-5 translate-y-[0%]"
            >
              <div className="h-1/3 overflow-hidden object-center rounded-3xl">
                <Image
                  className=" object-cover w-auto h-auto"
                  src="/_1.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="h-1/3 overflow-hidden object-center">
                <Image
                  className=" object-cover"
                  src="/_2.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="h-1/3 overflow-hidden object-center">
                <Image
                  className=" object-cover"
                  src="/_3.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div
              id="img_holder_2"
              className=" w-0 md:w-1/4 h-full  flex flex-col gap-2 md:gap-5 translate-y-[-10%]"
            >
              <div className="h-1/3 overflow-hidden object-center rounded-3xl">
                <Image
                  className=" object-cover "
                  src="/_4.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="h-1/3 overflow-hidden object-center rounded-3xl">
                <Image
                  className=" object-cover"
                  src="/_11.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="h-1/3  overflow-hidden object-center  rounded-3xl">
                <Image
                  className="  object-cover"
                  src="/_6.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div
              id="img_holder_3"
              className="w-0 md:w-1/4  h-full flex flex-col gap-2 md:gap-5"
            >
              <div className="h-1/3 overflow-hidden object-center rounded-3xl">
                <Image
                  className=" object-cover"
                  src="/_7.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="h-1/3 overflow-hidden object-center rounded-3xl">
                <Image
                  className=" object-cover"
                  src="/_10.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="h-1/3 overflow-hidden object-center rounded-3xl">
                <Image
                  className=" object-cover"
                  src="/_8.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div
              id="img_holder_4"
              className="w-0 md:w-1/4 h-full  flex flex-col gap-2 md:gap-5 translate-y-[-10%]"
            >
              <div className="h-1/3 overflow-hidden object-center rounded-3xl">
                <Image
                  className=" object-cover"
                  src="/_8.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="h-1/3 overflow-hidden object-center rounded-3xl">
                <Image
                  className=" object-cover"
                  src="/_9.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="h-1/3 overflow-hidden object-center rounded-3xl">
                <Image
                  className=" object-cover"
                  src="/_4.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-1/2"></div>
      </div>
    </div>
  );
};

export default Parallax;
