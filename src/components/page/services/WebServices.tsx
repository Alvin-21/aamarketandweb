'use client';

import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function WebServices() {
    return (
        <>
            <h1 className="ml-5 mb-5 sm:mb-0 md:hidden text-3xl font-bold">Web Services</h1>
            {content.map((service, index) => (
                <div key={service.title} className="mb-5 md:hidden">
                    <div className={clsx(
                        "flex justify-center px-5 mt-10",
                        {
                            'mt-0': index === 0,
                        },
                    )}>
                        <Image
                            src={service.image}
                            width={300}
                            height={300}
                            alt="Web development"
                            className="w-full max-h-72 rounded-xl"
                        />
                    </div>
                    <h1 className="w-fit ml-5 mt-5 text-2xl font-semibold">
                        {service.title}
                        <motion.div
                            initial={{ width: "0" }}
                            whileInView={{ width: "100%" }}
                            transition={{ type: "tween", duration: 0.5, delay: 0.5 }}
                            className="h-0.5 bg-blue-50 mt-1"
                        ></motion.div>
                    </h1>
                    <p className="mx-5 mt-4 text-xl tracking-wide leading-normal">{service.description}</p>
                    {index < 2 && (
                        <div
                            className="sm:hidden bg-[#68b3ff] h-0.5 w-1/4 mt-8 flex justify-self-center rounded-3xl"
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                                className="h-full w-full shadow-[0px_0px_35px_7px_rgba(67,160,255,1)]"
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
        image: "/web-dev.webp",
        title: "Web Development",
        description:
            (<span>We create <span className="font-semibold text-blue-50">modern</span>, <span className="italic">user-friendly</span> websites that are tailored to your brand and business goals. From custom design to responsive development, our <span className="font-semibold text-blue-50">web development</span> services ensure your site looks great and performs flawlessly on every device.</span>),
    },
    {
        image: "/web-hosting.webp",
        title: "Web Hosting",
        description:
            (<span>Enjoy <span className="font-semibold text-blue-50">fast</span>, <span className="italic">secure</span>, and <span className="font-semibold text-blue-50">reliable hosting</span> that keeps your website online and running smoothly 24/7. We handle the technical side so you don&apos;t have to — with performance-optimised servers and minimal downtime.</span>),
    },
    {
        image: "/web-maintenance.webp",
        title: "Web Maintenance",
        description:
            (<span>Our <span className="font-semibold text-blue-50">ongoing maintenance</span> service keeps your website <span className="italic">secure</span>, <span className="italic">updated</span>, and running at peak performance. From plugin updates to security checks, we make sure your digital presence stays polished and protected.</span>),
    },
]