'use client';

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function DesktopNav() {
    const pathname = usePathname();

    return (
        <>
            <div className="hidden md:block fixed w-full z-30">
                <div className="flex items-center justify-between max-w-2xl mx-auto mt-8 rounded-full p-4 bg-[#0071E6] font-semibold">
                    <Link href="/" className="flex items-center gap-3 ml-3">
                        <Image
                            src="/logo.png"
                            alt="Company Logo"
                            width={30}
                            height={30}
                        />
                        <p className={clsx(
                            "hover:text-slate-400",
                            { "border-b-2 border-b-orange": pathname === '/' },
                        )}>Home</p>
                    </Link>
                    <Link
                        href="/services"
                        className={clsx(
                            "hover:text-slate-400",
                            { "border-b-2 border-b-orange": pathname === '/services' },
                        )}
                    >
                        Services
                    </Link>
                    <Link
                        href="/about"
                        className={clsx(
                            "hover:text-slate-400",
                            { "border-b-2 border-b-orange": pathname === '/about' },
                        )}
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className={clsx(
                            "mr-3 hover:text-slate-400",
                            { "border-b-2 border-b-orange": pathname === '/contact' },
                        )}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </>
    );
}