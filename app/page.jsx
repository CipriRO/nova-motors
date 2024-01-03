import About from "@/components/About";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="my-5 flex flex-col gap-20 lg:gap-36 lg:my-10">
      <Hero />
      <About />
      <Featured />
      <Services />
      <Testimonials />
    </main>
  );
}
