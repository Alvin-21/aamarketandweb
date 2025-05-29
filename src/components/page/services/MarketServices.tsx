'use client';

import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function MarketServices() {
    return (
        <>
            <h1 className="ml-5 mb-5 md:hidden text-3xl font-bold">Market Services</h1>
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
                            width={360}
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
                            className="h-0.5 bg-orange-50 mt-1"
                        ></motion.div>
                    </h1>
                    <p className="mx-5 mt-4 text-xl tracking-wide leading-normal">{service.description}</p>
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
        image: "/social-media-marketing.webp",
        title: "Social Media Marketing",
        description:
            (<span>We create <span className="italic">scroll-stopping</span> content and manage your social media presence across platforms like <span className="font-semibold text-orange-50">Instagram</span>, <span className="font-semibold text-orange-50">Facebook</span>, and <span className="font-semibold text-orange-50">TikTok</span>. Our services include <span>custom content creation</span>, <span>hashtag strategy</span>, <span>post scheduling</span>, and <span>community engagement</span> to <span className="font-semibold text-orange-50">build your brand</span>, <span>grow your following</span>, and <span>drive real business results</span>. Whether you&apos;re looking to <span className="italic">increase brand awareness</span> or <span className="italic">generate leads</span>, we&apos;ll keep your socials <span>consistent</span>, <span className="italic">creative</span>, and <span>on-brand</span>.</span>),
    },
    {
        image: "/seo.webp",
        title: "Search Engine Optimisation",
        description:
            (<span><span className="italic">Want to be found on Google?</span> We optimise your website to improve its visibility on search engines, helping you attract more <span className="italic">organic traffic</span> and <span className="italic">high-quality leads</span>. Our SEO services cover in-depth <span className="font-semibold text-orange-50">keyword research</span>, on-page optimisation (meta tags, content, internal linking), <span className="font-semibold text-orange-50">technical SEO</span> (site speed, mobile performance, indexing), and <span className="font-semibold text-orange-50">local SEO</span> for location-based businesses. We use <span className="font-semibold text-orange-50">ethical, data-driven strategies</span> to increase your rankings and keep you ahead of competitors.</span>),
    },
    {
        image: "/email-marketing.webp",
        title: "Email Marketing",
        description:
            (<span>Email remains one of the <span className="italic">highest-ROI</span> marketing channels — and we help you make the most of it. We design engaging <span className="font-semibold text-orange-50">email campaigns</span>, write <span className="italic">persuasive copy</span>, and set up <span className="font-semibold text-orange-50">automation flows</span> that nurture leads, and increase customer retention. Our strategy includes <span className="font-semibold text-orange-50">list segmentation</span>, performance tracking, and <span className="font-semibold text-orange-50">A/B testing</span> to ensure your emails get <span className="italic">opened</span>, <span className="italic">read</span>, and <span className="italic">clicked</span>.</span>),
    },
    {
        image: "/social-media-ads.webp",
        title: "Google & Social Media Ads",
        description:
            (<span>Reach your <span className="italic">ideal customers</span> with highly targeted paid ads. We <span className="font-semibold text-orange-50">plan</span>, <span className="font-semibold text-orange-50">launch</span>, and <span className="font-semibold text-orange-50">manage</span> advertising campaigns on platforms like <span className="font-semibold text-orange-50">Google Ads</span>, <span className="font-semibold text-orange-50">Facebook</span>, <span className="font-semibold text-orange-50">Instagram</span>, and <span className="font-semibold text-orange-50">TikTok</span>. From strategic audience targeting and <span className="italic">ad copywriting</span> to split testing and <span className="font-semibold text-orange-50">budget optimisation</span>, we focus on driving measurable results — whether that&apos;s more <span className="italic">website traffic</span>, <span className="italic">leads</span>, or <span className="italic">online sales</span>.</span>),
    },
]