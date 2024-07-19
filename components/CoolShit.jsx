import React from "react";

const CoolShit = () => {
  return (
    <div className="w-screen h-[200vh]">
      <div className="flex flex-col gap-40 mx-5 md:mx-10">
        <div className="flex justify-between ">
          <h1 className=""></h1>
          <h1
            className="text-xl text-right uppercase md:text-7xl mr-10"
            style={{ textShadow: "2px 2px 5px #5b27b7" }}
          >
            COOL SHIT I DID
          </h1>
        </div>
        <div className="flex flex-col gap-96">
          <div className="flex flex-col md:flex-row gap-10 w-full">
            <div className="img1_holder w-full md:w-1/2  overflow-hidden  ">
              <img src="/3.png" alt="image" />
            </div>
            <div className="text_1_holder text-sm md:text-2xl w-full md:w-1/2  flex justify-center items-center">
              <div className="flex flex-col gap-14">
                <h1
                  className="text-4xl font-semibold text-right  mr-10"
                  style={{ textShadow: "3px 3px 5px #5b27b7" }}
                >
                  THIS IS A TITLE
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                  mollitia laborum, eos quod facere ipsa ab minus ea pariatur
                  odio, quidem nostrum saepe. Libero doloremque officia delectus
                  suscipit illo voluptatum?
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 w-full">
            <div className="text_1_holder text-sm md:text-3xl w-full md:w-1/2  flex justify-center items-center">
              <div className="flex flex-col gap-14">
                <h1
                  className="text-4xl font-semibold"
                  style={{ textShadow: "3px 3px 5px #5b27b7" }}
                >
                  THIS IS A TITLE
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                  mollitia laborum, eos quod facere ipsa ab minus ea pariatur
                  odio, quidem nostrum saepe. Libero doloremque officia delectus
                  suscipit illo voluptatum?
                </p>
              </div>
            </div>
            <div className="img1_holder w-full md:w-1/2">
              <img src="/3.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoolShit;
