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
      <Tailwind>
        <Html>
          <Body>
            <Img src="/static/images/Logo-1.jpeg" alt="Company Logo" width="200" />
            <Section className="bg-gray-300 w-full h-0.5 rounded-[2px] mt-5" />
            <Heading className="text-2xl">New Message</Heading>
            <p>Dear <span className="text-blue-500 font-semibold">A&A</span>,</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare risus vel mollis pharetra. Aliquam feugiat mattis neque et efficitur.</p>
            <div className="flex flex-col gap-1">
                <span>Best Regards,</span>
                <span>John Doe</span>
            </div>
          </Body>
        </Html>
      </Tailwind>
    );
  }