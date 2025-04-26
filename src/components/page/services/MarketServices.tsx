'use client';

import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function MarketServices() {
    return (
        <>
            <h1 className="ml-5 mb-5 sm:hidden">Market Services</h1>
            {content.map((service, index) => (
                <div key={service.title} className="mb-5 sm:hidden">
                    <div className={clsx(
                        "flex justify-center px-5 mt-10",
                        {
                            'mt-0': index === 0,
                        },
                    )}>
                        <Image
                            src={service.image}
                            width={360}
                            height={300}
                            alt="Web development"
                            className="w-full rounded-xl"
                        />
                    </div>
                    <h1 className="ml-5 mt-5">{service.title}</h1>
                    <p className="mx-5 mt-4">{service.description}</p>
                    {index < 3 && (
                        <div
                            className=" bg-orange h-0.5 w-1/4 mt-8 flex justify-self-center rounded-3xl"
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                                className="h-full w-full shadow-[0px_0px_35px_7px_rgba(240,137,46,1)]"
                            >
                            </motion.div>
                        </div>
                    )}
                </div>
            ))}

        </>
    );
}

const content = [
    {
        image: "/landing.webp",
        title: "Social Media Marketing",
        description:
            "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    },
    {
        image: "/landing.webp",
        title: "Search Engine Optimisation (SEO)",
        description:
            "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    },
    {
        image: "/landing.webp",
        title: "Email Marketing",
        description:
            "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    },
    {
        image: "/landing.webp",
        title: "Google & Social Media Ads",
        description:
            "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    },
]