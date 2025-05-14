'use client';

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input, Textarea } from "@heroui/react";
import { motion } from "framer-motion";

export default function ContactForm() {
    return (
        <form action="" className="flex flex-col gap-5 mt-8 max-w-lg mx-auto">
            <Input
                label="Name"
                type="text"
                variant="bordered"
                size="lg"
                classNames={{
                    label: [
                        "text-lg text-blue-50 group-data-[filled-within=true]:text-blue-50",
                    ],
                    inputWrapper: [
                        "focus-within:!border-slate-500",
                    ],
                    input: [
                        "text-lg",
                    ],
                }}
            />
            <Input
                label="Email"
                type="email"
                variant="bordered"
                size="lg"
                classNames={{
                    label: [
                        "text-lg text-blue-50 group-data-[filled-within=true]:text-blue-50",
                    ],
                    inputWrapper: [
                        "focus-within:!border-slate-500",
                    ],
                    input: [
                        "text-lg",
                    ],
                    errorMessage: [
                        "text-rose-200 text-sm",
                    ],
                }}
            />
            <Textarea
                label="Message"
                type="text"
                variant="bordered"
                minRows={3}
                isClearable
                classNames={{
                    label: [
                        "text-lg text-blue-50  group-data-[filled-within=true]:text-blue-50",
                    ],
                    inputWrapper: [
                        "focus-within:!border-slate-500",
                    ],
                    input: [
                        "text-lg",
                    ],
                }}
            />
            <div className="flex justify-center">
                <Button className="w-1/2 text-lg font-semibold bg-slate-300">
                    Send
                    <FontAwesomeIcon icon={faPaperPlane} className="h-4 w-4" />
                </Button>
            </div>
        </form>
    );
}