import About from "@/components/widgets/about";
import Accueil from "@/components/widgets/accueil";
import NavBar from "@/components/widgets/navbar";
import ProjectCards from "@/components/widgets/projectCards";

export default function Home() {
  return (
    <>
      <header className="bg-slate-100 fixed top-0 w-full z-10">
        <NavBar />
      </header>
      <section className="h-screen">
        <Accueil />
      </section>
      <section>
        <About />
      </section>
      <section>
        <ProjectCards />
      </section>
    </>
  );
}

