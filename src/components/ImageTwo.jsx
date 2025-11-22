import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import image2 from "../assets/img/image1.png";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "./Scene";
// import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

function ImageTwo() {
  const mainRef = React.useRef(null);
  const sceneRef = React.useRef(null);
  const [progress, setProgress] = useState(0);

//   const initialCards = [
//     {
//       id: 1,
//       name: "Jenn F.",
//       role: "Marketing Director @ Square",
//       text: "I feel like I've learned as much from X as I did completing my masters. It's the first thing I read every morning.",
//       img: "https://i.pravatar.cc/150?img=47",
//     },
//     {
//       id: 2,
//       name: "Lara K.",
//       role: "Product Designer @ Meta",
//       text: "X completely changed how I'm learning. I look forward to reading the daily insights.",
//       img: "https://i.pravatar.cc/150?img=32",
//     },
//     {
//       id: 3,
//       name: "Jon M.",
//       role: "Team Lead @ Stripe",
//       text: "X is free. If X was a paid product, I would pay without hesitation.",
//       img: "https://i.pravatar.cc/150?img=12",
//     },
//   ];

//   const [cards, setCards] = useState(initialCards);

//   function showNextCard() {
//     setCards((prev) => {
//       const [first, ...rest] = prev;
//       return [...rest, first];
//     });
//   }

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

        {/* First section - 100vh */}
        <div className="absolute left-0 top-0 w-full h-[100vh] flex items-center justify-start z-20">
          <div className="ml-10 max-w-xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              We Offer Our Best Services
            </h1>

            <div className="space-y-3">
              <h3 className="text-lg md:text-2xl lg:text-3xl text-white font-medium">Calculate weather</h3>
              <h3 className="text-lg md:text-2xl lg:text-3xl text-white font-medium">Best Tour Guide</h3>
              <h3 className="text-lg md:text-2xl lg:text-3xl text-white font-medium">Customization</h3>
            </div>
          </div>
        </div>

        {/* Second section - Next 100vh */}
        <div className="absolute right-0 top-[100vh] w-full h-[100vh] flex items-center justify-end z-20">
          <div className="mr-10 max-w-xl text-right">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              What do you know About Us
            </h1>

            <div className="space-y-3">
              <h3 className="text-lg md:text-2xl lg:text-3xl text-white font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate in sint fugiat consequuntur asperiores velit blanditiis nam quis fuga obcaecati iure consectetur, a necessitatibus ea accusantium laudantium sapiente, facilis deleniti?</h3>
            </div>
          </div>
        </div>

        {/* Third section - 100vh */}
        <div className="absolute left-0 top-[200vh] w-full h-[100vh] flex items-center justify-start z-20">
          <div className="ml-10 max-w-xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              With our all experience we will serve you
            </h1>

            <div className="space-y-3">
              <h3 className="text-lg md:text-2xl lg:text-3xl text-white font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus explicabo itaque saepe optio dolorum aspernatur illum officiis molestiae consequatur. Veritatis, aspernatur? Soluta voluptatum animi, vero cumque aliquam impedit odio quo?</h3>
            </div>
          </div>
        </div>

        {/* <div className="relative h-[420px] w-full max-w-4xl flex justify-center items-center overflow-hidden">
          <AnimatePresence>
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                layout
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.4}
                onDragEnd={(e, info) => {
                  if (Math.abs(info.offset.x) > 120) {
                    showNextCard();
                  }
                }}
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.35 }}
                className="absolute bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl rounded-3xl p-8 w-[320px] text-center cursor-grab active:cursor-grabbing select-none hover:scale-105 transition"
                style={{ rotate: (index - 1) * 8, zIndex: 10 - index }}
              >
                <img
                  src={card.img}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border border-white/20"
                />
                <p className="text-sm text-gray-300 mb-4">{card.text}</p>
                <p className="text-sm font-semibold text-purple-300">
                  {card.name} – {card.role}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div> */}
      </div>
    </Parallax>
  );
}

export default ImageTwo;
