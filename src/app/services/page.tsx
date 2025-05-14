import MarketServices from "@/components/page/services/MarketServices";
import WebServices from "@/components/page/services/WebServices";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { MarketStickyScroll } from "@/components/ui/MarketStickyScroll";
import { MeteorsShow } from "@/components/ui/MeteorsShow";
import { WebStickyScroll } from "@/components/ui/WebStickyScroll";

export default function Page() {
    return (
        <>
            <BackgroundBeams />
            <WebServices />
            <WebStickyScroll />
            <div className="hidden sm:block w-full h-28"></div>
            <div
                className="bg-gradient-to-r from-blue-100 via-white to-orange h-0.5 w-3/4 my-8 flex justify-self-center rounded-3xl"
            ></div>
            <div className="hidden sm:block w-full h-28"></div>
            <MarketServices />
            <MarketStickyScroll />
            <section className="mb-5 grid justify-center">
                <MeteorsShow />
            </section>
        </>
    );
}