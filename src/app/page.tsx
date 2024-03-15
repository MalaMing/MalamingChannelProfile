'use client'

import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Home() {
  const profile = {
    title: "MALAMING",
    description: "GAME, VLOG, REVIEW, PROGRAMMING",
  }
  return (
    <main className="flex self-center w-full h-[80vh] items-center">
        <div className="flex flex-col items-center w-full">
          <div className="mb-10 self-center items-center justify-center">
            <Image 
              src="https://yt3.googleusercontent.com/ytc/AIdro_ml8aoFNxfb9ErORmPPwm7mtvUdo3ySmS6q6vnAwsw=s176-c-k-c0x00ffffff-no-rj" 
              className="rounded-full" 
              alt="logo"
              width={250} 
              height={600} 
              
            />
          </div>
          <p className="text-6xl max-md:text-4xl pb-3 text-[#46495B]">{profile.title}</p>
          <p className="text-5xl max-md:text-2xl text-[#6C4964]">{profile.description}</p>
          <div className="flex flex-row gap-6 mt-16 w-full items-center justify-center">
            
            <Icon className="shadow-lg rounded-full" icon="akar-icons:facebook-fill" width="50" height="50"  style={{color: "#636880"}} />
            
            <div className="flex rounded-full  w-[50px] h-[50px] items-center justify-center bg-gradient-to-t from-[#FF9B7E] to-[#e48e8c] shadow-lg">
              <Icon icon="akar-icons:instagram-fill" width="31" height="31"  style={{color: "#FFFFFF"}} />
            </div>

            <Icon className="shadow-lg rounded-full" icon="entypo-social:youtube-with-circle" width="50" height="50"  style={{color: "#636880"}} />
            
            <div className="flex rounded-full  w-[50px] h-[50px] items-center justify-center bg-gradient-to-b from-[#FF9B7E] to-[#e48e8c] shadow-lg">
              <Icon className="flex" icon="akar-icons:twitch-fill" width="31" height="31"  style={{color: "#FFFFFF"}}/>
            </div>

          </div>
        </div>
    </main>
  );
}
