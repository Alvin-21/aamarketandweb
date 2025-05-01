import ContactForm from "@/components/ui/ContactForm";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Page() {
    return (
        <div className="px-4 relative top-16">
            <h1 className="text-2xl font-bold">Reach Out</h1>
            <p className="text-lg tracking-wide leading-relaxed mt-5 w-full">Ready to grow your brand online? Whether you’re just starting out or looking to take things to the next level, we’re here to help. Drop us a message — no pressure, no jargon — just a friendly chat about how we can support your goals. Let’s create something great together!</p>
            <ContactForm />
            <h1 className="text-2xl mt-10 font-bold">Get in Touch</h1>
            <div className="flex mt-5 items-center text-lg">
                <FontAwesomeIcon icon={faPhoneSquare} className="h-7 w-7 pr-2" />
                <div className="flex flex-col gap-1">
                    <Link href="tel:+254-797-667-960" className="pr-1">+254-797-667-960</Link>
                    <Link href="tel:+254-705-987-745">+254-705-987-745</Link>
                </div>
            </div>
            <div className="flex mt-5 items-center text-lg">
                <FontAwesomeIcon icon={faWhatsapp} className="h-7 w-7 pr-2" />
                <div className="flex flex-col gap-1">
                    <Link href="https://wa.me/254797667960" target="_blank" className="pr-1">
                        +254-797-667-960
                    </Link>
                    <Link href="https://wa.me/254705987745" target="_blank">
                        +254-705-987-745
                    </Link>
                </div>
            </div>
            <div className="flex py-5 text-lg">
                <FontAwesomeIcon icon={faEnvelope} className="h-7 w-7 pr-2" />
                <span>
                    <Link href="mailto:aamarketandweb@gmail.com">aamarketandweb@gmail.com</Link>
                </span>
            </div>
        </div>
    );
}