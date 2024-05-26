"use client";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import GithubIcon from "../../../public/images/png/gitWhite.png";
import LinkedIn from "../../../public/images/linkedin.svg";
import Twitter from "../../../public/images/twitter.svg";
import contact1 from "../../../public/images/japan3.png";
import contact2 from "../../../public/images/space3.png";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";


const Email = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess("");
        if (!email) {
            setError("Please enter your email!");
            return;
        }
        if (!name) {
            setError("Please enter your name!");
            return;
        }
        if (!message) {
            setError("Please enter your message!");
            return;
        }

        const template_params = {
            from_name: email,
            to_name: "Krishna Kant Verma",
            message,
        };
        setError("");
        setLoading(true);

        emailjs
            .send(
                "service_58rqzqb",
                "template_igqdx82",
                template_params,
                "9FIF6PgVV1VdX9h-j"
            )
            .then(
                function (response) {
                    setEmail("");
                    setName("");
                    setMessage("");
                    setLoading(false);
                    console.log("SUCCESS!");
                    setSuccess("Your message has been sent successfully");
                },
                function (error) {
                    setError("Some error occurred!");
                    console.log("FAILED...", error);
                    setLoading(false);
                }
            );
    };

    return (
        <section
            className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
            id="contact"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Image
                    className="sm:ml-20"
                    src={contact2}
                    width={450}
                    height={550}
                    alt="image"
                />
                <Image className="" src={contact1} width={650} height={200} alt="image" />
            </motion.div>
            <div>
                <h2 className="text-3xl font-bold text-white my-2">
                    Let&apos;s Connect
                </h2>
                <p className="text=[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox is
                    always open. Whether you have any query or just want to say
                    Hi, I&apos;ll try my best to get back to you!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href={"https://github.com/krishna30122002"}>
                        <Image
                            height={50}
                            width={50}
                            src={GithubIcon}
                            alt="github_icon"
                        />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/kkverma30122002/"}>
                        <Image
                            height={50}
                            width={50}
                            src={LinkedIn}
                            alt="linkedin_icon"
                        />
                    </Link>
                    <Link href={"https://twitter.com/home"}>
                        <Image
                            height={50}
                            width={50}
                            src={Twitter}
                            alt="twitter_icon"
                        />
                    </Link>
                </div>
                <div className="mt-6">
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label
                                htmlFor="name"
                                className="text-white block mb-2 text-lg font-medium m-2"
                            >
                                Your Name
                            </label>
                            <input
                                name="user_name"
                                type="text"
                                id="name"
                                required
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="bg-[#030637] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg blocj w-full p-2.5"
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="email"
                                type="email"
                                className="text-white block mb-2 text-lg font-medium m-2"
                            >
                                Your Email
                            </label>
                            <input
                                name="user_email"
                                type="email"
                                id="email"
                                required
                                value={email}
                                placeholder="xyz@abc.com"
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-[#030637] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg blocj w-full p-2.5"
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="text-white block mb-2 text-lg font-medium m-2"
                            >
                                Message
                            </label>
                            <textarea
                                type="text"
                                name="message"
                                id="message"
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Let's Talk...!"
                                className="bg-[#030637] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg blocj w-full p-2.5"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            value={"Send"}
                            className="bg-purple-500 hover:bg-purple-600 text-white font-medium mt-5 py-2.5 px-5 rounded-lg w-full"
                        >
                            Send Message
                        </button>
                        {success && (
                            <p className="text-green-500 text-sm mt-2">
                                {success}
                            </p>
                        )}
                        {error && (
                            <p className="text-red-500 text-sm mt-2">{error}</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Email;
