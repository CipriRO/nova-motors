import About from "@/components/About";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="my-5 flex flex-col gap-20 lg:my-10">
      <Hero />
      <About />
      <Featured />
    </main>
  );
}
