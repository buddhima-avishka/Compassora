import React, { useEffect } from 'react'
import { Parallax } from 'react-parallax';
import { assets } from '../assets/assets.js';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scene from './Scene';

gsap.registerPlugin(ScrollTrigger);

function ImageOne() {
  // const mainRef = React.useRef(null);
  // const sceneRef = React.useRef(null);

  // useEffect(() => {
  //   if (!mainRef.current || !sceneRef.current) return;

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: mainRef.current,
  //       start: 'top top',
  //       end: 'bottom bottom',
  //       scrub: 1,
  //       markers: false,
  //     }
  //   });

  //   tl.to(sceneRef.current, {
  //     y: '60vh',
  //     ease: "none",
  //   });

  //   return () => {
  //     tl.kill();
  //   };
  // }, []);

  return (
    <div className='relative h-[100vh]'>
      <Parallax 
        className='h-full bg-cover bg-center' 
        bgImage={assets.heroImage} 
        strength={800}
        bgImageStyle={{
          objectFit: 'cover',
          width: '100%',
          height: '100%'
        }}
      >
        <div className='flex items-center justify-center h-full'>
          <h1 className='absolute mt-20 top-20 text-white text-4xl font-bold z-10'>Explore</h1>
          
          {/* <div ref={sceneRef} className='h-[80vh] w-[80vw]'>
            <Canvas>
              <Scene />
            </Canvas>
          </div> */}
        </div>
      </Parallax>
    </div>
  )
}

export default ImageOne