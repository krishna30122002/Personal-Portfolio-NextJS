"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { delay, motion, useInView } from "framer-motion";

const project = [
    {
        id: 1,
        title: "Nescafe - NIT Patna",
        desc: "A website to cut off extra time waiting at the Nescafe Hotspot",
        imgLink: "/images/nescafe.png",
        tag: ["All", "Major"],
        git: "https://github.com/krishna30122002/Nescafe-NIT-Patna",
        preview: "https://nescafe-nitpatna.netlify.app/",
    },
    {
        id: 2,
        title: "Expense Manager",
        desc: "To manage all the expenses you do in your life.",
        imgLink: "/images/expenseManager.png",
        tag: ["All", "Major"],
        git: "https://github.com/krishna30122002/expense-manager",
        preview: "https://github.com/krishna30122002/expense-manager",
    },
    {
        id: 3,
        title: "To Do App",
        desc: "This can manage all your time table in a precise manner.",
        imgLink: "/images/todo.png",
        tag: ["All", "Minor"],
        git: "https://github.com/krishna30122002/To-Do-App",
        preview: "https://to-do-app-blush-five.vercel.app/?todo=Hi",
    },
    {
        id: 4,
        title: "Calculator.js",
        desc: "A simple calculator for your daily purpose.",
        imgLink: "/images/calculator.png",
        tag: ["All", "Minor"],
        git: "https://github.com/krishna30122002/Calculator.js",
        preview: "https://github.com/krishna30122002/Calculator.js",
    },
    {
        id: 5,
        title: "Weather.net",
        desc: "My first API integration to show the current weather & temperature of any city.",
        imgLink: "/images/weathernet.png",
        tag: ["All", "Minor"],
        git: "https://github.com/krishna30122002/WeatherApp",
        preview: "https://github.com/krishna30122002/WeatherApp",
    },
];

const Projects = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filterProjects = project.filter((p) => p?.tag?.includes(tag));

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-2 underline">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Minor"
                    isSelected={tag === "Minor"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Major"
                    isSelected={tag === "Major"}
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filterProjects.map((p, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={p.id}
                            title={p.title}
                            desc={p.desc}
                            imgLink={p.imgLink}
                            tags={p.tag}
                            git={p.git}
                            preview={p.preview}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
