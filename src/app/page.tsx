import Capabilities from "@/components/Capabilities";
import Credentials from "@/components/Credentials";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Capabilities />
      <Experience />
      <Credentials />
      <Works />
      <Footer />
    </main>
  );
}
