import Footer from "@/components/widgets/footer";
import NavBar from "@/components/widgets/navbar";

export default function Mentions() {
  return (
    <>
      <header className="bg-slate-100 fixed top-0 w-full z-10">
        <NavBar />
      </header>
      <section className="w-full flex flex-col items-start mx-auto py-20 gap-5 sm:py-40 md:items-center">
        <h1 className="text-gray-600 font-bold">Mentions légales : </h1>
        <h2 className="underline">Editeur du site : </h2>
        <p>
          <strong>Nom et prénom :</strong> Guillaume Ceccoli
        </p>
        <p>
          <strong>Entreprise : </strong>CréaNumerik04
        </p>
        <p>
          <strong>Adresse : </strong>
          86 chemin de la muraille neuve 04230 Saint-Etienne-Les-Orgues
        </p>
        <p>
          <strong>Pays : </strong>France
        </p>
        <p>
          <strong>Courriel : </strong>guiceccoli@gmail.com
        </p>
        <p>
          <strong>Téléphone : </strong>06 75 97 31 18
        </p>
        <p>
          <strong>SIRET :</strong> 98036273500014
        </p>
        <p>
          <strong>Non assujetti à la TVA</strong>
        </p>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

