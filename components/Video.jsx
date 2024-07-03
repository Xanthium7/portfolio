import React, { useEffect, useRef } from "react";

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.55;
    }
  }, []);
  return (
    <section className="h-screen w-screen  ">
      <div className="mt-12">
        <video
          ref={videoRef}
          className="h-[50vh] md:h-[70vh] w-full object-cover bg-fixed  opacity-50"
          autoPlay
          muted
          loop
          preload="none"
        >
          <source type="video/mp4" src="/hero_me1.mp4" />
        </video>
      </div>
      <div className="details md:mt-16 mx-5">
        <p className=" mt-12  md:text-3xl text-center uppercase md:leading-[2.5rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad
          repudiandae facilis, necessitatibus modi reiciendis, in libero soluta,
          tempore sunt autem esse quibusdam fugiat earum! Repellat excepturi
          dicta consequuntur neque facilis nesciunt error, architecto, illo rem
          illum ut.{" "}
          <span className="hidden  md:inline">
            Excepturi vero illo ut laudantium necessitatibus hic! A nostrum
            laboriosam temporibus dicta!
          </span>
        </p>
      </div>
    </section>
  );
};

export default Video;
