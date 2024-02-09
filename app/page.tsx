import Accueil from "@/components/widgets/accueil";
import NavBar from "@/components/widgets/navbar";

export default function Home() {
  return (
    <>
      <header className="bg-slate-100 fixed top-0 w-full">
        <NavBar />
      </header>
      <section className="h-screen">
        <Accueil />
      </section>
    </>
  );
}

