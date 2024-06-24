"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
    const handleRedirect = () => {
        window.open('https://drive.google.com/file/d/1lAuCqJsj3dOoCQnQ33UpVYRKSF_rKCX9/view?usp=drive_link', '_blank');
      };
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-7 place-self-center"
                >
                    <h1 className="text-[#f5d5e0] mb-4 text-4xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Hello, I&apos;m{" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                "Krishna Kant Verma",
                                1000,
                                "Software Developer",
                                1000,
                                "Web Developer",
                                1000,
                                "Video Editor",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{
                                fontSize: "1.0em",
                                display: "inline-block",
                            }}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#f5d5e0] text-base sm:text-lg mb-6 lg:text-xl">
                        A curious geek and a explorer filled with deep space
                        enthusiasm. Also a software developer pursuing
                        Bachelor&apos;s of Technology with stream Electrical
                        Engineering at NIT Patna.
                    </p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <button className="px-6 py-3 wifull rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-300 text-white font-bold">
                            Hire Me
                        </button>
                        <button className="px-1 py-1 wifull mr-4 rounded-full bg-gradient-to-br from-blue-500 via-pruple-500 to-pink-500 hover:bg-slate-800 text-[#f5d5e0] mt-3 font-bold" onClick={handleRedirect}>
                            <span className="block bg-[#210535] hover:bg-slate-800 rounded-full px-5 py-2">
                                résumé
                            </span>
                        </button>
                    </motion.div>
                </motion.div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <motion.div
                    initial={{ opacity: 0, scale:0.5 } }
                    animate={{ opacity: 1, scale:1 }}
                    transition={{ duration: 0.5 }}
                        className="rounded-full bg-[#430d4b] w-[250px]
h-[250px] lg:w-[400px] lg:h-[400px] relative mt-6 lg:mt-4"
                    >
                        <Image
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full overflow-hidden"
                            src="/images/png/profile-remini-modified.png"
                            alt="hero_img"
                            width={365}
                            height={365}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
