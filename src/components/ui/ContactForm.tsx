'use client';

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input, Textarea } from "@heroui/react";
import { motion } from "framer-motion";

export default function ContactForm() {
    return (
        <form action="" className="flex flex-col gap-5 mt-8 max-w-lg mx-auto">
            {/* <motion.div
                initial={{ x: "-110%" }}
                animate={{ x: 0 }}
                transition={{ type: "tween", duration: 0.5, ease: "easeIn" }}
            > */}
                <Input
                    label="Name"
                    type="text"
                    variant="faded"
                    classNames={{
                        label: [
                            "text-lg",
                        ],
                    }}
                />
            {/* </motion.div> */}
            {/* <motion.div
                initial={{ x: "110%" }}
                animate={{ x: 0 }}
                transition={{ type: "tween", duration: 0.5, ease: "easeIn" }}
            > */}
                <Input
                    label="Email"
                    type="email"
                    variant="faded"
                    classNames={{
                        label: [
                            "text-lg",
                        ],
                    }}
                />
            {/* </motion.div> */}
            {/* <motion.div
                initial={{ x: "-110%" }}
                animate={{ x: 0 }}
                transition={{ type: "tween", duration: 0.5, ease: "easeIn" }}
            > */}
                <Textarea
                    label="Message"
                    type="text"
                    variant="faded"
                    minRows={3}
                    isClearable
                    classNames={{
                        label: [
                            "text-lg",
                        ],
                    }}
                />
            {/* </motion.div> */}
            <div className="flex justify-center">
                <Button className="w-1/2 text-lg font-semibold">
                    Send
                    <FontAwesomeIcon icon={faPaperPlane} className="h-4 w-4" />
                </Button>
            </div>
        </form>
    );
}