import { About } from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

import { FaEnvelope, FaFolderOpen, FaHome, FaInfoCircle } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "About", link: "#about", icon: <FaInfoCircle /> },
            { name: "Projects", link: "#projects", icon: <FaFolderOpen /> },
            { name: "Contact", link: "#contact", icon: <FaEnvelope /> },
          ]}
        />

        <Hero />
        <About />
        <Grid />
        <Experience />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}
