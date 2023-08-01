import React, { useRef } from "react";
import { useEffect } from "react";
import gsap from "gsap";


export default function Anim() {

const videoRef = useRef(null);

    useEffect(() => {
     // if video is full loaded, play it
      if (videoRef.current.readyState === 4) {
        videoRef.current.play();
      

     const tl = gsap.timeline();
        tl.to("#ok1", {
          delay: 1,
            duration: 0.9,
            y: "-100%"
        })
        tl.to("#ok", {
            duration: .7,
            y: "-100%"
        }, 1.3)
      } 
    }, []);

    


  return (
    <>
      <div id="ok1" className="bg-[#ffe95c] h-screen w-screen absolute top-0 z-50" >
        <video ref={videoRef} className="h-full w-full object-cover"  muted src="https://res.cloudinary.com/dcl00yipc/video/upload/v1690840597/burgervideo_hhbyg3.mp4"></video>
      </div>
      <div id="ok" className="bg-pink-500 absolute w-screen h-screen z-40"></div>
    </>
  );
}
