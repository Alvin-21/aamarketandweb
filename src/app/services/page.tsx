import MarketServices from "@/components/page/services/MarketServices";
import WebServices from "@/components/page/services/WebServices";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { StickyScrollReveal } from "@/components/ui/StickyScroll";

export default function Page() {
    return (
        <>
            <BackgroundBeams />
            {/* <StickyScrollReveal /> */}
            <WebServices />
            <div
                className="sm:hidden bg-gradient-to-r from-blue-100 via-white to-orange h-0.5 w-3/4 my-8 flex justify-self-center rounded-3xl"
            ></div>
            <MarketServices />
        </>
    );
}