import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import About from "@/components/About";
import Services from "@/components/Services";
import Pledge from "@/components/Pledge";
import Support from "@/components/Support";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Vision />
        <About />
        <Services />
        <Pledge />
        <Support />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
