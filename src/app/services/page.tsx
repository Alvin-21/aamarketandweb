import WebServices from "@/components/page/services/WebServices";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { StickyScrollReveal } from "@/components/ui/StickyScroll";

export default function Page() {
    return (
        <>
            <BackgroundBeams />
            {/* <StickyScrollReveal /> */}
            <WebServices />
        </>
    );
}