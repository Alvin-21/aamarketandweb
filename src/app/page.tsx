import { ShootingStarsAndStarsBackground } from "@/components/ui/ShootingStarsAndStarsBackground";
import Image from "next/image";
import Services from "@/components/page/home/Services";
import About from "@/components/page/home/About";
import { MeteorsShow } from "@/components/ui/MeteorsShow";

export default function Home() {
  return (
    <>
      <ShootingStarsAndStarsBackground />
      {/* Mobile Version */}
      <div className="lg:hidden">
        <section>
          <figure>
            <Image
              src="/landing.webp"
              alt="Image for services section"
              width={360}
              height={300}
              className="w-full h-auto"
            />
          </figure>
          <Services />
        </section>
        <section>
          <About />
        </section>
      </div>
      {/* Desktop Version */}
      <div className="hidden lg:block">
        <section>
          <figure className="lg:w-1/3 lg:mx-auto">
            <Image
              src="/landing.webp"
              alt="Image for services section"
              width={360}
              height={300}
              className="w-full h-auto lg:mt-10"
            />
          </figure>
        </section>
        <div className="lg:flex lg:justify-center lg:mt-10">
          <Services />
          <About />
        </div>
      </div>
      <section className="my-10 lg:mt-20 grid justify-center">
        <MeteorsShow />
      </section>
    </>
  );
}
