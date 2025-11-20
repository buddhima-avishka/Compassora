import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import image2 from "../assets/img/image1.png";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "./Scene";

gsap.registerPlugin(ScrollTrigger);

function ImageTwo() {
  const mainRef = React.useRef(null);
  const sceneRef = React.useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          onUpdate: (self) => {
            setProgress(self.progress);
          },
          markers: false,
        },
      })
      .to(sceneRef.current, {
        ease: "none",
        x: "-25vw",
        y: "25vh",
      })
      .to(sceneRef.current, {
        ease: "none",
        x: "20vw",
        y: "50vh",
      });
    // .fromTo(sceneRef.current.rotation, { y: 0 }, { y: Math.PI * 2 });
  }, []);

  return (
    <Parallax
      className="relative h-[300vh] bg-cover bg-center bg-fixed"
      bgImage={image2}
      strength={800}
    >
      <div ref={mainRef} className="flex items-center justify-center h-full">
        <h1 className="absolute top-20 text-white text-4xl font-bold z-10">
          Explore
        </h1>

        <div
          ref={sceneRef}
          className="h-[80vh] w-[80vw] border-2 border-red-500"
        >
          <Canvas>
            <Scene progress={progress} />
          </Canvas>
        </div>
      </div>
    </Parallax>
  );
}

export default ImageTwo;
