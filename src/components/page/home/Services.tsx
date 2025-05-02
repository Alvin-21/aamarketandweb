'use client';

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Services() {
    return (
        <article className="flex flex-col gap-4 p-4">
            <motion.h1
                initial={{ x: "-100%" }}
                whileInView={{ x: 0 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold"
            >
                Our Services
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "tween", duration: 0.5, delay: 1, ease: "easeIn" }}
                viewport={{ once: true }}
                className="text-xl tracking-wide leading-relaxed"
            >
                We provide several services to help <span className="italic">improve your business. </span>Among them is <span className="font-semibold text-blue-50">digital marketing</span>. In the <span className="italic">digital era</span> like today,
                <span className="font-semibold text-blue-50"> making a presence</span> is very important to <span className="font-semibold text-blue-50">grow your business </span>
                with a <span className="italic">special strategy</span> that <span className="font-semibold text-blue-50">we&apos;ll tailor just for you</span>.
            </motion.p>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ type: "tween", duration: 0.3, delay: 2, ease: "easeIn" }}
                viewport={{ once: true }}
            >
                <Button
                    as={Link}
                    href="/services"
                    variant="solid"
                    className="text-xl bg-blue-200 text-white rounded-lg"
                >
                    Intrigued? Oh Yes <FontAwesomeIcon icon={faArrowRight} className="animate-bounce ml-2" />
                </Button>
            </motion.div>
        </article>
    );
}