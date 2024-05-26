"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import { TypeAnimation } from "react-type-animation";
import TabButton from "./TabButton";
import { delay, motion, useInView } from "framer-motion";

const Tab_Data = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul>
                <li> ⋆ Programming in JAVA</li>
                <li> ⋆ Data Structures and Algorithms using JAVA</li>
                <li> ⋆ HTML, CSS & JAVASCRIPT</li>
                <li> ⋆ React.js, Next.js</li>
                <li> ⋆ Node.js, Express.js</li>
                <li> ⋆ MongoDB</li>
                <li> ⋆ SQL</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li>
                    {" "}
                    ⋆ Class X: St. Mark&apos;s College Jhansi(U.P.) - 87.16%
                </li>
                <li>
                    {" "}
                    ⋆ Class XII: St. Mark&apos;s College Jhansi(U.P.) - 89.83%
                </li>
                <li>
                    ⋆ B.Tech: National Institute of Technology Patna (Bihar) -
                    CGPA(till date): 8.64
                </li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul>
                <li> ⋆ NPTEL: Scored 90% in The Joy of Computing: Python</li>
                <li> ⋆ Complete Web Development By Udemy</li>
            </ul>
        ),
    },
];

const About = () => {
    const [tab, setTab] = useState("Skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    return (
        <section id="about" className="text-white">
            <br />
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center mt-10 mb-4"
            >
                <h1 className="text-[#f5d5e0] mb-4 text-6xl lg:text-8xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100">
                        <TypeAnimation
                            sequence={[
                                "Hello",
                                1000,
                                "नमस्ते",
                                1000,
                                "Hallo",
                                1000,
                                "Bonjour",
                                1000,
                                "Hallo",
                                1000,
                                "Ciao",
                                1000,
                                "こんにちは",
                                1000,
                                "مرحباً ",
                                1000,
                                "Cześć",
                                1000,
                                "你好",
                                1000,
                                "Привет",
                                1000,
                                "¡Hola",
                                1000,
                            ]}
                            wrapper="span"
                            speed={20}
                            style={{
                                fontSize: "1.0em",
                                display: "inline-block",
                            }}
                            repeat={Infinity}
                        />
                    </span>
                    <br />
                </h1>
            </motion.div>
            <div className="md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <div>
                    <Image
                        src="/images/about-computer.png"
                        width={700}
                        height={700}
                        alt="image"
                    />
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        About Me
                    </h2>
                    <p className="text-base md:text-lg">
                        Meet me, Krishna Kant Verma: a curious geek and space
                        enthusiast. As a software developer and an Electrical
                        Engineering student at NIT Patna, my passions extend far
                        beyond technology. I&apos;m fascinated by the mysteries
                        of space, constantly delving into astrophysics and
                        cosmology to better understand the universe.<br/>
                        But my interests don&apos;t stop there. I&apos;m also keen on
                        learning languages, and I&apos;m currently immersed in
                        mastering Japanese. My diverse pursuits reflect my
                        insatiable curiosity and determination to explore
                        different cultures and perspectives.
                    </p>
                    <div className="flex flex-row justify-start mt-8 gap-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            Skills
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            Education
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            Certifications
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {Tab_Data.find((t) => t.id === tab)?.content}
                    </div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="py-2 px-4 m-4"
            >
                <div>
                    <h2 className="text-4xl underline font-bold text-center text-white mb-8 mt-4">
                        Tech-Stack
                    </h2>
                </div>
                <div className="flex align-center justify-center">
                    <Image
                        src="/images/png/tech.png"
                        width={700}
                        height={700}
                        className="mb-10 rounded"
                        alt="tech image"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default About;
