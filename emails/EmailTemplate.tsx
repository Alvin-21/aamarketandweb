import {
    Html,
    Body,
    Heading,
    Img,
    Section,
} from "@react-email/components";
import * as React from "react";
import { Tailwind } from "@react-email/tailwind";

export default function EmailTemplate() {
    return (
        <Tailwind
            config={{
                theme: {
                    extend: {
                        colors: {
                            'blue-200': '#2e95ff',
                        },
                    },
                },
            }}
        >
            <Html>
                <Body>
                    <a href="https://aamarketandweb.vercel.app/" target="_blank">
                        <Img src="/static/images/Logo-1.jpeg" alt="Company Logo" width="200" />
                    </a>
                    <Section className="bg-blue-200 w-full h-[1px] rounded-[2px] mt-5" />
                    <Heading className="text-2xl text-blue-200">New Message</Heading>
                    <p className="text-lg">Dear <span className="text-blue-500 font-semibold">A&A</span>,</p>
                    <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare risus vel mollis pharetra. Aliquam feugiat mattis neque et efficitur.</p>
                    <div className="grid gap-1 text-lg">
                        <span>Best Regards,</span>
                        <span>John Doe</span>
                    </div>
                </Body>
            </Html>
        </Tailwind>
    );
}