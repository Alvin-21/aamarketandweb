import { ShootingStarsAndStarsBackground } from "@/components/ui/ShootingStarsAndStarsBackground";
import Image from "next/image";
import Services from "@/components/page/home/Services";
import About from "@/components/page/home/About";

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
    </>
  );
}
