import { ShootingStarsAndStarsBackground } from "@/components/ui/ShootingStarsAndStarsBackground";
import Image from "next/image";
import Services from "@/components/page/home/Services";
import About from "@/components/page/home/About";
import { MeteorsShow } from "@/components/ui/MeteorsShow";

export default function Home() {
  return (
    <>
      <ShootingStarsAndStarsBackground />
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
      <section className="my-10 grid justify-center">
        <MeteorsShow />
      </section>
    </>
  );
}
