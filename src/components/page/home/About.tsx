'use client';

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
    return (
        <article className="flex flex-col gap-4 p-4">
            <motion.h1
                initial={{ x: "-100%" }}
                whileInView={{ x: 0 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.5, delay: 2.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold"
            >
                Who We Are
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "tween", duration: 0.5, delay: 1, ease: "easeIn" }}
                viewport={{ once: true }}
                className="text-xl tracking-wide leading-relaxed"
            >
                We are <span className="italic">passionate</span> about <span className="font-semibold text-blue-50">empowering
                </span> businesses to <span className="">thrive in the digital world</span>. With a <span className="italic">unique blend</span> of <span className="font-semibold text-blue-50">marketing strategy</span> and <span className="italic">cutting-edge</span><span className="font-semibold text-blue-50"> web development</span>, we specialise in delivering <span className="font-semibold text-blue-50">tailored solutions</span> that help you <span className="font-semibold text-blue-50">stand out</span>, <span className="italic">engage your audience</span>, and <span className="font-semibold text-blue-50">drive growth</span>.
            </motion.p>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ type: "tween", duration: 0.3, delay: 2, ease: "easeIn" }}
                viewport={{ once: true }}
            >
                <Button
                    as={Link}
                    href="/about"
                    variant="solid"
                    className="text-xl bg-blue-200 text-white rounded-lg"
                >
                    Know More<FontAwesomeIcon icon={faArrowRight} className="animate-bounce ml-2" />
                </Button>
            </motion.div>
        </article>
    );
}