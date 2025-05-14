import { MeteorsShow } from "@/components/ui/MeteorsShow";
import { SpotlightNew } from "@/components/ui/SpotligthNew";

export default function Page() {
    return (
        <>
            <SpotlightNew />
            <section className="px-4">
                <h1 className="text-4xl font-bold mb-10">About Us</h1>
                <p className="text-xl tracking-wide leading-relaxed mb-5">
                    We&apos;re <span className="italic">not just another digital agency</span> — we&apos;re your <span className="font-semibold text-blue-50">growth partner</span>. At <span className="font-semibold text-blue-50">A&A</span>, we blend <span className="font-semibold text-blue-50">creativity</span>, <span className="font-semibold text-blue-50">strategy</span>, and <span className="font-semibold text-blue-50">technology</span> to help businesses like yours <span className="font-semibold text-blue-50">build powerful brands</span>, <span className="italic">grow online</span>, and <span className="italic">connect with the right audience</span>.
                </p>
                <p className="text-xl tracking-wide leading-relaxed">
                    Whether it&apos;s <span className="italic">crafting a website that converts</span>, <span className="italic">launching ads that actually work</span>, or <span className="italic">managing social media that sparks conversation</span> — we do it all with <span className="font-semibold text-green-50">purpose</span> and <span className="font-semibold text-green-50">passion</span>.
                </p>
            </section>
            <section className="px-4">
                <h1 className="text-4xl font-bold my-10">What Makes Us Different</h1>
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <div className="h-6 w-6 flex justify-center items-center rounded-full border-2 border-green-50 shadow-[0px_0px_14px_2px_rgba(195,255,108,1)]">
                            <div className="h-2 w-2 bg-blue-50 rounded-full"></div>
                        </div>
                        <div className="text-xl w-11/12">
                            <p className=" mb-1 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-50 to-blue-50 to-65%">People-first approach</p>
                            <p>We build relationships before campaigns.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="h-6 w-6 flex justify-center items-center rounded-full border-2 border-blue-50 shadow-[0px_0px_14px_2px_rgba(108,195,255,1)]">
                            <div className="h-2 w-2 bg-green-50 rounded-full"></div>
                        </div>
                        <div className="text-xl w-11/12">
                            <p className=" mb-1 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-50 from-20% to-green-50">Tailored strategies</p>
                            <p>Everything is customised for your goals.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="h-6 w-6 flex justify-center items-center rounded-full border-2 border-green-50 shadow-[0px_0px_14px_2px_rgba(195,255,108,1)]">
                            <div className="h-2 w-2 bg-blue-50 rounded-full"></div>
                        </div>
                        <div className="text-xl w-11/12">
                            <p className=" mb-1 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-50 to-blue-50 to-75%">Creative meets technical</p>
                            <p>From sleek design to deep data, we blend beauty with brains.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="h-6 w-6 flex justify-center items-center rounded-full border-2 border-blue-50 shadow-[0px_0px_14px_2px_rgba(108,195,255,1)]">
                            <div className="h-2 w-2 bg-green-50 rounded-full"></div>
                        </div>
                        <div className="text-xl w-11/12">
                            <p className=" mb-1 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-50 from-40% to-green-50">Transparent collaboration</p>
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