'use client';

import React from "react";
import Image from "next/image";
import clsx from "clsx";

export default function WebServices() {
    return (
        <>
            <h1 className="ml-5 mb-5">Web Services</h1>
            {content.map((service, index) => (
                <div key={service.title} className="mb-5">
                    <div className={clsx(
                        "flex justify-center px-5 mt-14",
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
                    <p className="mx-5 mt-8">{service.description}</p>
                </div>
            ))}

        </>
    );
}

const content = [
    {
        image: "/landing.webp",
        title: "Web Development",
        description:
            "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    },
    {
        image: "/landing.webp",
        title: "Web Hosting",
        description:
            "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    },
    {
        image: "/landing.webp",
        title: "Web Maintenance",
        description:
            "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    },
]