'use client';

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faBars, faCircleInfo, faHouse, faScrewdriverWrench, faXmark } from '@fortawesome/free-solid-svg-icons'
import Image from "next/image"
import { Sparkles } from "../TextSparkles"
import { Button } from "@heroui/button"
import Link from "next/link"
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { AnimatePresence, motion } from "framer-motion";

export default function MobileNav() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <>
            <div className="flex justify-between px-3 pt-2">
                <Image
                    src="/logo.png"
                    alt="Company Logo"
                    width={50}
                    height={50}
                />
                <Button
                    isIconOnly
                    variant="light"
                    aria-controls="mobile-navigation"
                    aria-expanded={isMenuOpen}
                    className="text-white"
                    onPress={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="h-6 w-6" />
                </Button>
            </div>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        aria-label="Mobile navigation menu"
                        id="mobile-navigation"
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "tween", duration: 0.4 }}
                    >
                        <Sparkles />
                        <h1 className="text-2xl pl-7 pb-3">Site</h1>
                        <div className="grid grid-rows-4 gap-4 px-5 mx-auto w-3/4">
                            {links.map((link) => (
                                <Button
                                    key={link.name}
                                    as={Link}
                                    href={link.href}
                                    className={clsx(
                                        "justify-start text-white bg-transparent border-1 border-slate-400",
                                        {
                                            'bg-blue-200 border-0': pathname === link.href,
                                        },
                                    )}
                                >
                                    <FontAwesomeIcon icon={link.icon} className='h-4 w-4' />
                                    {link.name}
                                </Button>
                            ))}
                        </div>
                        <div className='mt-10'></div>
                        <h1 className="text-2xl pl-7 pb-3">Socials</h1>
                        <div className="grid grid-rows-4 gap-4 px-5 mx-auto w-3/4">
                            {socials.map((social) => (
                                <Button
                                    key={social.name}
                                    as={Link}
                                    href={social.href}
                                    className="justify-start text-white bg-transparent border-1 border-slate-400"
                                >
                                    <FontAwesomeIcon icon={social.icon} className='h-4 w-4' />
                                    {social.name}
                                </Button>
                            ))}
                        </div>
                        <div className='flex justify-center gap-0 relative bottom-3'>
                            <span className='text-xs mx-2'>Copyright<FontAwesomeIcon icon={faCopyright} className='inline h-3 w-3 mx-1' />{new Date().getFullYear()} A&A Market and Web. All Rights Reserved.</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

const links = [
    { name: 'Home', href: '/', icon: faHouse },
    { name: 'Services', href: '/services', icon: faScrewdriverWrench },
    { name: 'About', href: '/about', icon: faCircleInfo },
    { name: 'Contact', href: '/contact', icon: faAddressBook },
];

const socials = [
    { name: 'Instagram', href: '/', icon: faInstagram },
    { name: 'Facebook', href: '/', icon: faFacebook },
];