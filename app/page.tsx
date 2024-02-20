import About from "@/components/widgets/about";
import Accueil from "@/components/widgets/accueil";
import Background from "@/components/widgets/background";
import Contact from "@/components/widgets/contact";
import Footer from "@/components/widgets/footer";
import NavBar from "@/components/widgets/navbar";
import ProjectCards from "@/components/widgets/projectCards";
import Technos from "@/components/widgets/technos";

export default function Home() {
  return (
    <>
      <header className="bg-slate-100 fixed top-0 w-full z-10">
        <NavBar />
      </header>
      <section className="h-screen relative">
        <Accueil />
        <Background />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projets">
        <ProjectCards />
      </section>
      <section id="technos">
        <Technos />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

