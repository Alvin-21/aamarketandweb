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
                We are passionate about empowering
                businesses to thrive in the digital world. With a
                unique blend of marketing strategy and cutting-edge web development, we specialise in delivering tailored solutions that help you stand out, engage your audience, and drive growth.
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