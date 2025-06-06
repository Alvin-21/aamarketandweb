import ContactForm from "@/components/ui/ContactForm";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Page() {
    return (
        <div className="px-4 relative top-16">
            <div className="flex flex-col lg:mx-auto lg:pb-10 lg:max-w-4xl">
                <h1 className="text-2xl font-bold">Reach Out</h1>
                <p className="text-lg tracking-wide leading-relaxed mt-5 w-full">
                    <span className="font-semibold text-blue-50">Ready to grow your brand online?</span> Whether you&apos;re <span className="italic">just starting out</span> or <span className="italic">looking to take things to the next level</span>, we&apos;re here to help. <span className="font-semibold text-blue-50">Drop us a message</span> — <span className="italic">no pressure, no jargon</span> — just a <span className="italic">friendly chat</span> about how we can support your goals. <span className="font-semibold text-blue-50">Let&apos;s create something great together!</span>
                </p>
            </div>
            <ContactForm />
            <h1 className="text-2xl mt-10 font-bold">Get in Touch</h1>
            <div className="md:flex md:items-center md:justify-between md:pb-5">
                <div className="flex mt-5 items-center text-lg">
                    <FontAwesomeIcon icon={faPhoneSquare} className="h-7 w-7 pr-2" />
                    <div className="flex flex-col gap-1">
                        <Link href="tel:+254-797-667-960" className="pr-1 hover:border-b-1 hover:border-b-blue-50">+254-797-667-960</Link>
                        <Link href="tel:+254-789-598-259" className="hover:border-b-1 hover:border-b-blue-50">+254-789-598-259</Link>
                    </div>
                </div>
                <div className="flex mt-5 items-center text-lg">
                    <FontAwesomeIcon icon={faWhatsapp} className="h-7 w-7 pr-2" />
                    <div className="flex flex-col gap-1">
                        <Link href="https://wa.me/254797667960" target="_blank" className="pr-1 hover:border-b-1 hover:border-b-blue-50">
                            +254-797-667-960
                        </Link>
                        <Link href="https://wa.me/254789598259" target="_blank" className="hover:border-b-1 hover:border-b-blue-50">
                            +254-789-598-259
                        </Link>
                    </div>
                </div>
                <div className="flex py-5 text-lg">
                    <FontAwesomeIcon icon={faEnvelope} className="h-7 w-7 pr-2" />
                    <span>
                        <Link href="mailto:aamarketandweb@gmail.com" className="hover:border-b-1 hover:border-b-blue-50 hover:pb-1">aamarketandweb@gmail.com</Link>
                    </span>
                </div>
            </div>
        </div>
    );
}