import React, { useEffect, useRef } from "react";

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.55;
    }
  }, []);
  return (
    <section className="h-screen w-screen ">
      <div className="">
        <video
          ref={videoRef}
          className="h-[50vh] md:h-[70vh] w-full object-cover  opacity-50"
          autoPlay
          muted
          loop
        >
          <source type="video/mp4" src="/hero_me.mp4" />
        </video>
      </div>
      <div className="details mt-16 mx-5">
        <p className="text-xl md:text-3xl text-center uppercase md:leading-[2.5rem]">
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
