"use client";

import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Web Development",
    description:
      (<span>We create <span className="font-semibold text-blue-50">modern</span>, <span className="italic">user-friendly</span> websites that are tailored to your brand and business goals. From custom design to responsive development, our <span className="font-semibold text-blue-50">web development</span> services ensure your site looks great and performs flawlessly on every device.</span>),
    content: (
      <figure className="h-full w-full">
        <Image
          src="/web-dev.webp"
          width={300}
          height={300}
          alt="Web development"
          className="h-full w-full"
        />
      </figure>
    ),
  },
  {
    title: "Web Hosting",
    description:
      (<span>Enjoy <span className="font-semibold text-blue-50">fast</span>, <span className="italic">secure</span>, and <span className="font-semibold text-blue-50">reliable hosting</span> that keeps your website online and running smoothly 24/7. We handle the technical side so you don&apos;t have to — with performance-optimised servers and minimal downtime.</span>),
    content: (
     <figure className="h-full w-full">
        <Image
          src="/web-hosting.webp"
          width={300}
          height={300}
          alt="Web hosting"
          className="h-full w-full"
        />
      </figure>
    ),
  },
  {
    title: "Web Maintenance",
    description:
      (<span>Our <span className="font-semibold text-blue-50">ongoing maintenance</span> service keeps your website <span className="italic">secure</span>, <span className="italic">updated</span>, and running at peak performance. From plugin updates to security checks, we make sure your digital presence stays polished and protected.</span>),
    content: (
      <figure className="h-full w-full">
        <Image
          src="/web-maintenance.webp"
          width={300}
          height={300}
          alt="Web maintenance"
          className="h-full w-full"
        />
      </figure>
    ),
  },
];

export function WebStickyScroll() {
  return (
    <figure className="hidden md:block w-full py-4">
      <StickyScroll content={content} heading="WEB SERVICES" />
    </figure>
  );
}