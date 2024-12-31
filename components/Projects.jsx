import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projectView, setprojectView] = useState(0);
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    if (projectView == 1) {
      // change the inner html of cursor
      cursor.innerHTML = "VIEW";
      //   cursor.style.backgroundImage =
      //     "url('https://i.pinimg.com/236x/14/83/6d/14836dc9ce9287a7bb8a2957b3c0e979.jpg')";
    }
    if (projectView == 0) {
      // change the inner html of cursor
      cursor.innerHTML = "";
      cursor.style.backgroundImage = "";
    }
  }, [projectView]);
  useEffect(() => {
    const handleMouseMove = (event) => {
      const previewDiv = document.querySelector(".preview");
      // Adjust the position so the div centers on the cursor
      const xOffset = 40; // Half of the div's width
      const yOffset = -100; // Half of the div's height
      previewDiv.style.left = `${event.pageX + xOffset}px`;
      previewDiv.style.top = `${event.pageY + yOffset}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    const handleMouseMove = (event) => {
      const previewDiv = document.querySelector(".preview2");
      // Adjust the position so the div centers on the cursor
      const xOffset = 40; // Half of the div's width
      const yOffset = -100; // Half of the div's height
      previewDiv.style.left = `${event.pageX + xOffset}px`;
      previewDiv.style.top = `${event.pageY + yOffset}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useGSAP(() => {
    gsap.from("#p-text", {
      scrollTrigger: {
        trigger: "#p-text",
        start: window.innerWidth > 768 ? "bottom 70%" : "top 70%",
        end: "bottom center",
        scrub: 0.5,
      },
      y: 150,
      opacity: 0,
      duration: 2,
      ease: "power1.inOut",
      stagger: 0.9,
    });
    gsap.from("#p2-text", {
      scrollTrigger: {
        trigger: "#p2-text",
        start: window.innerWidth > 768 ? "bottom 70%" : "top 70%",
        end: "bottom center",
        scrub: 0.5,
      },
      y: 150,
      opacity: 0,
      duration: 2,
      ease: "power1.inOut",
      stagger: 0.9,
    });
  }, []);
  // const enlarge2 = () => {
  //   gsap.to("#cursor", {
  //     scale: 2.5,
  //     duration: 0.1,
  //     ease: "power1.inOut",
  //   });
  //   setprojectView(1);
  // };
  const img_translate1 = () => {
    gsap.to(".preview_img", {
      y: 0,
      duration: 0.3,
      opacity: 1,
      ease: "power1.inOut",
    });
    setprojectView(1);
  };
  const img_translate2 = () => {
    gsap.to(".preview_img", {
      y: -190,
      duration: 0.3,
      ease: "power1.inOut",
      opacity: 1,
    });
    setprojectView(1);
  };
  const img_translate3 = () => {
    gsap.to(".preview_img", {
      y: -380,
      duration: 0.3,
      ease: "power1.inOut",
      opacity: 1,
    });
    setprojectView(1);
  };
  const img_translate4 = () => {
    gsap.to(".preview_img", {
      y: -570,
      duration: 0.3,
      ease: "power1.inOut",
      opacity: 1,
    });
    setprojectView(1);
  };
  const img_translate_exit = () => {
    gsap.to(".preview_img", {
      y: 190,
      duration: 0.3,
      ease: "power1.inOut",
      opacity: 0,
    });
    setprojectView(0);
  };
  const img_translate1_ai = () => {
    gsap.to(".preview_img2", {
      y: 0,
      duration: 0.3,
      ease: "power1.inOut",
      opacity: 1,
    });
    setprojectView(1);
  };
  const img_translate2_ai = () => {
    gsap.to(".preview_img2", {
      y: -190,
      duration: 0.3,
      ease: "power1.inOut",
      opacity: 1,
    });
    setprojectView(1);
  };
  const img_translate3_ai = () => {
    gsap.to(".preview_img2", {
      y: -380,
      duration: 0.3,
      ease: "power1.inOut",
      opacity: 1,
    });
    setprojectView(1);
  };
  const img_translate4_ai = () => {
    gsap.to(".preview_img2", {
      y: -570,
      duration: 0.3,
      ease: "power1.inOut",
      opacity: 1,
    });
    setprojectView(1);
  };

  const img_translate_exit_ai = () => {
    gsap.to(".preview_img2", {
      y: 190,
      duration: 0.3,
      ease: "power1.inOut",
      opacity: 0,
    });
    setprojectView(0);
  };

  // const delarge2 = () => {
  //   gsap.to("#cursor", {
  //     scale: 1,
  //     duration: 0.1,
  //     ease: "power1.inOut",
  //   });
  //   setprojectView(0);
  // };

  // const projects = [
  //   "PROJECT 1",
  //   "PROJECT 2",
  //   "PROJECT 3",
  //   "PROJECT 4",
  //   "PROJECT 5",
  // ].map((items, index) => (
  //   <div className="h-32 w-full overflow-hidden flex flex-col items-center text-3xl  relative hover:h-40 transition-all duration-150 ">
  //     <h1
  //       onMouseEnter={enlarge2}
  //       onMouseLeave={delarge2}
  //       id="p-text"
  //       className="p_1 h-full flex items-center w-full border-b-[1px] border-b-[#d3d3d3c5]"
  //     >
  //       PROJECT
  //     </h1>
  //   </div>
  // ));

  return (
    <div className="">
      <div
        className="opacity-0 md:opacity-100 preview absolute overflow-hidden w-[368px] h-[190px] rounded-3xl z-40 "
        st
      >
        <Image
          className="preview_img w-full h-fit opacity-0"
          src="/p_img.png"
          alt=""
          width={368}
          height={190}
        />
      </div>
      <div className="h-screen w-screen ">
        <div className="mx-5 flex flex-col h-full gap-10">
          <div className="relative overflow-hidden ">
            <h1
              id="p-text"
              className=" text-3xl md:text-7xl uppercase font-semibold"
              style={{ textShadow: "3px 3px 5px #5b27b7" }}
            >
              WEB DEV Projects
            </h1>
          </div>

          <div className="flex flex-col gap-3 ">
            <a href="https://github.com/Xanthium7/Tesla_Clone" target="_blank">
              <div className="h-32 w-full overflow-hidden flex flex-col items-center text-xl md:text-3xl  relative hover:h-48 opacity-20 hover:opacity-100 transition-all">
                <h1
                  onMouseEnter={img_translate1}
                  onMouseLeave={img_translate_exit}
                  id="p-text"
                  className="p_1  h-full flex items-center w-full border-b-[1px] border-b-[#d3d3d3c5]  "
                >
                  CHILL VERSE - 2D MULTIPLAYER GAME
                </h1>
              </div>
            </a>
            <a
              href="https://github.com/Xanthium7/urban-eat-host"
              target="_blank"
            >
              <div className="h-32 w-full overflow-hidden flex flex-col items-center text-xl md:text-3xl   relative hover:h-40 opacity-20 hover:opacity-100  transition-all">
                <h1
                  onMouseEnter={img_translate2}
                  onMouseLeave={img_translate_exit}
                  id="p-text"
                  className="p_1 h-full flex items-center  w-full border-b-[1px] border-b-[#d3d3d3c5]"
                >
                  TESLA WEBSITE CLONE
                </h1>
              </div>
            </a>
            <a
              href="https://github.com/Xanthium7/Disney_plus_clone"
              target="_blank"
            >
              <div className="h-32 w-full overflow-hidden flex flex-col items-center text-xl md:text-3xl  relative hover:h-40 opacity-20 hover:opacity-100 transition-all">
                <h1
                  onMouseEnter={img_translate3}
                  onMouseLeave={img_translate_exit}
                  id="p-text"
                  className="p_1 h-full flex items-center w-full border-b-[1px] border-b-[#d3d3d3c5]"
                >
                  DISNEY PLUS CLONE
                </h1>
              </div>
            </a>
            <a href="https://github.com/Xanthium7/apple-clone" target="_blank">
              <div className="h-32 w-full overflow-hidden flex flex-col items-center text-xl md:text-3xl  relative hover:h-40 opacity-20 hover:opacity-100 transition-all">
                <h1
                  onMouseEnter={img_translate4}
                  onMouseLeave={img_translate_exit}
                  id="p-text"
                  className="p_1 h-full flex items-center w-full border-b-[1px] border-b-[#d3d3d3c5]"
                >
                  IPHONE WEBSITE
                </h1>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* AI SECTION */}
      <div
        className="opacity-0 md:opacity-100 preview2 absolute overflow-hidden w-[368px] h-[190px] rounded-3xl z-40 "
        st
      >
        <Image
          className="preview_img2 w-full h-fit opacity-0"
          src="/p2_img.png"
          alt=""
          width={368}
          height={190}
        />
      </div>
      <div className="h-screen w-screen ">
        <div className="mx-5 flex flex-col h-full gap-10">
          <div className="relative overflow-hidden ">
            <h1
              id="p2-text"
              className="text-3xl md:text-7xl text-right uppercase font-semibold"
              style={{ textShadow: "3px 3px 5px #5b27b7" }}
            >
              ai projects
            </h1>
          </div>

          <div className="flex flex-col gap-3 ">
            <a
              href="https://github.com/Xanthium7/Ai_Adventure_Game_Py"
              target="_blank"
            >
              <div className="h-32 w-full overflow-hidden flex flex-col items-center text-xl md:text-3xl  relative hover:h-40 opacity-20 hover:opacity-100 transition-all">
                <h1
                  onMouseEnter={img_translate1_ai}
                  onMouseLeave={img_translate_exit_ai}
                  id="p2-text"
                  className="p_1 h-full flex items-center w-full border-b-[1px] border-b-[#d3d3d3c5]  "
                >
                  CHOOSE YOUR ADVENTURE GAME
                </h1>
              </div>
            </a>
            <a
              href="https://github.com/Xanthium7/LightYagami_ai"
              target="_blank"
            >
              <div className="h-32 w-full overflow-hidden flex flex-col items-center text-xl md:text-3xl  relative hover:h-40 opacity-20 hover:opacity-100  transition-all">
                <h1
                  onMouseEnter={img_translate2_ai}
                  onMouseLeave={img_translate_exit_ai}
                  id="p2-text"
                  className="p_1 h-full flex items-center w-full border-b-[1px] border-b-[#d3d3d3c5]"
                >
                  ANIME CHARACTER CLONES
                </h1>
              </div>
            </a>
            <a
              href="https://github.com/Xanthium7/saturday-hack-night-template"
              target="_blank"
            >
              <div className="h-32 w-full overflow-hidden flex flex-col items-center text-xl md:text-3xl  relative hover:h-40 opacity-20 hover:opacity-100 transition-all">
                <h1
                  onMouseEnter={img_translate3_ai}
                  onMouseLeave={img_translate_exit_ai}
                  id="p2-text"
                  className="p_1 h-full flex items-center w-full border-b-[1px] border-b-[#d3d3d3c5]"
                >
                  SPEAK TO SITE
                </h1>
              </div>
            </a>
            <a href="https://github.com/Xanthium7/Lawyer_bot" target="_blank">
              <div className="h-32 w-full overflow-hidden flex flex-col items-center text-xl md:text-3xl  relative hover:h-40 opacity-20 hover:opacity-100 transition-all">
                <h1
                  onMouseEnter={img_translate4_ai}
                  onMouseLeave={img_translate_exit_ai}
                  id="p2-text"
                  className="p_1 h-full flex items-center w-full border-b-[1px] border-b-[#d3d3d3c5]"
                >
                  LAWYER BOT
                </h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
