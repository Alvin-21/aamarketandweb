import { MeteorsShow } from "@/components/ui/MeteorsShow";
import { SpotlightNew } from "@/components/ui/SpotligthNew";


export default function Page() {
    return (
        <>
            <SpotlightNew />
            <section className="px-4">
                <h1 className="text-4xl font-bold mb-10">About Us</h1>
                <p className="text-xl tracking-wide leading-relaxed mb-5">We’re not just another digital agency — we’re your growth partner. At A&A, we blend creativity, strategy, and technology to help businesses like yours build powerful brands, grow online, and connect with the right audience.</p>
                <p className="text-xl tracking-wide leading-relaxed">Whether it’s crafting a website that converts, launching ads that actually work, or managing social media that sparks conversation — we do it all with purpose and passion.</p>
            </section>
            <section className="px-4">
                <h1 className="text-4xl font-bold my-10">What Makes Us Different</h1>
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <div className="h-6 w-6 flex justify-center items-center rounded-full border-2">
                            <div className="h-2 w-2 bg-white rounded-full"></div>
                        </div>
                        <div className="text-xl w-11/12">
                            <p className="font-semibold">People-first approach</p>
                            <p>We build relationships before campaigns.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="h-6 w-6 flex justify-center items-center rounded-full border-2">
                            <div className="h-2 w-2 bg-white rounded-full"></div>
                        </div>
                        <div className="text-xl w-11/12">
                            <p className="font-semibold">Tailored strategies</p>
                            <p>Everything is customised for your goals.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="h-6 w-6 flex justify-center items-center rounded-full border-2">
                            <div className="h-2 w-2 bg-white rounded-full"></div>
                        </div>
                        <div className="text-xl w-11/12">
                            <p className="font-semibold">Creative meets technical</p>
                            <p>From sleek design to deep data, we blend beauty with brains.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="h-6 w-6 flex justify-center items-center rounded-full border-2">
                            <div className="h-2 w-2 bg-white rounded-full"></div>
                        </div>
                        <div className="text-xl w-11/12">
                            <p className="font-semibold">Transparent collaboration</p>
                            <p>We keep you in the loop, always. No fluff, just results.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-16 grid justify-center">
                <MeteorsShow />
            </section>
        </>
    );
}