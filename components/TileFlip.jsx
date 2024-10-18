"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState, useRef, useCallback } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function TileFlip() {
  const ROWS = 6;
  const COLS = 6;
  const BLOCK_SIZE = 50;
  const COOLDOWN = 1000;

  const [isFlipped, setIsFlipped] = useState(false);
  const boardRef = useRef(null);
  const tilesRef = useRef([]);

  const createTiles = (row, col) => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.innerHTML = `
    <div class="tile-face tile-front"></div>
    <div class="tile-face tile-back"></div>
    `;

    const bgPosition = `${col * 20}% ${row * 17.7}%`;
    tile.querySelector(".tile-front").style.backgroundPosition = bgPosition;
    tile.querySelector(".tile-back").style.backgroundPosition = bgPosition;

    return tile;
  };

  const createBoard = useCallback(() => {
    if (boardRef.current) {
      boardRef.current.innerHTML = ""; // Clear existing content
      tilesRef.current = [];
      for (let i = 0; i < ROWS; i++) {
        const row = document.createElement("div");
        row.className = "row";

        for (let j = 0; j < COLS; j++) {
          const tile = createTiles(i, j);
          row.appendChild(tile);
          tilesRef.current.push(tile);
        }
        boardRef.current.appendChild(row);
      }
    }
  }, []);

  const initializeTileAnimation = useCallback(() => {
    tilesRef.current.forEach((tile, index) => {
      let lastEnterTime = 0;

      tile.addEventListener("mouseenter", () => {
        const currentTime = Date.now();
        if (currentTime - lastEnterTime > COOLDOWN) {
          lastEnterTime = currentTime;

          let tiltY;
          if (index % 6 === 0) {
            tiltY = -40;
          } else if (index % 6 === 5) {
            tiltY = 40;
          } else if (index % 6 === 1) {
            tiltY = -20;
          } else if (index % 6 === 4) {
            tiltY = 20;
          } else if (index % 6 === 2) {
            tiltY = -10;
          } else {
            tiltY = 10;
          }

          animateTile(tile, tiltY);
        }
      });
    });
  }, []);

  const animateTile = (tile, tilty) => {
    gsap
      .timeline()
      .set(tile, { rotateX: isFlipped ? 180 : 0, rotateY: 0 })
      .to(tile, {
        rotateX: isFlipped ? 450 : 270,
        rotateY: tilty,
        duration: 0.5,
        ease: "power2.Out",
      })
      .to(
        tile,
        {
          rotateX: isFlipped ? 540 : 360,
          rotateY: 0,
          duration: 0.5,
          ease: "power2.In",
        },
        "-=0.25"
      );
  };

  const flipAllTiles = useCallback(() => {
    setIsFlipped((prevIsFlipped) => {
      const newIsFlipped = !prevIsFlipped;
      gsap.to(tilesRef.current, {
        rotateX: newIsFlipped ? 180 : 0,
        duration: 1,
        ease: "power2.inOut",
        stagger: {
          amount: 0.5,
          from: "random",
        },
      });
      return newIsFlipped;
    });
  }, []);

  const createBlocks = useCallback(() => {
    const blocksContainer = document.getElementById("blocks");
    if (blocksContainer) {
      blocksContainer.innerHTML = ""; // Clear existing blocks
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const numCols = Math.ceil(screenWidth / BLOCK_SIZE);
      const numRows = Math.ceil(screenHeight / BLOCK_SIZE);

      const numBlocks = numCols * numRows;

      for (let i = 0; i < numBlocks; i++) {
        const block = document.createElement("div");
        block.classList.add("block");
        block.dataset.index = i;
        blocksContainer.appendChild(block);
      }

      return { numCols, numBlocks };
    }
    return { numCols: 0, numBlocks: 0 };
  }, []);

  const highlightBlock = useCallback((event) => {
    const { numCols } = window.blockInfo;
    const blocksContainer = document.getElementById("blocks");
    if (blocksContainer) {
      const rect = blocksContainer.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const cols = Math.floor(x / BLOCK_SIZE);
      const rows = Math.floor(y / BLOCK_SIZE);
      const index = cols + rows * numCols;

      const block = blocksContainer.children[index];
      if (block) {
        block.classList.add("highlight");
        setTimeout(() => {
          block.classList.remove("highlight");
        }, 250);
      }
    }
  }, []);

  useEffect(() => {
    createBoard();
    initializeTileAnimation();
    window.blockInfo = createBlocks();
    document.addEventListener("mousemove", highlightBlock);

    return () => {
      document.removeEventListener("mousemove", highlightBlock);
    };
  }, [createBoard, initializeTileAnimation, createBlocks, highlightBlock]);

  return (
    <div className="relative mb-40  w-screen h-screen overflow-x-hidden hidden lg:block cursor-none">
      <div className="w-full h-full">
        <nav className="absolute top-20 left-0 w-screen flex justify-between items-center p-[2em] z-10 ">
          <a
            className="text-[#fff] font-extrabold uppercase text-3xl cursor-pointer"
            href="#"
          ></a>
          <button
            className="text-[#fff] bg-transparent rounded-md p-1 font-thin  text-3xl cursor-pointer"
            onClick={flipAllTiles}
          >
            {/* <img
              src="/repeat.png"
              alt="Repeat"
              className="w-10 h-10"
              style={{ filter: "invert(1)" }}
            /> */}
            ||| FLIP |||
          </button>
        </nav>
        <section
          ref={boardRef}
          style={{ perspective: "1000px" }}
          className="board w-screen h-screen p-1 flex flex-col gap-1 bg-black relative z-[1]"
        ></section>

        <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden pointer-events-none z-[2] blocks-container">
          <div id="blocks" className="blocks"></div>
        </div>
      </div>
    </div>
  );
}
