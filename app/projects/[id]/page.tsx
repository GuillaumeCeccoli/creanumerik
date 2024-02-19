"use client";

import Footer from "@/components/widgets/footer";
import NavBar from "@/components/widgets/navbar";
import { PROJECTS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Project() {
  const params = useParams<{ id: string }>();
  if (!params) {
    return <div>Projet inconnu</div>;
  }
  const { id } = params;

  const project = PROJECTS.find((project) => project.id === id);

  if (!project) {
    return <div>Ce projet n&apos;existe pas</div>;
  }
  return (
    <>
      <header className="bg-slate-100 fixed top-0 w-full z-10">
        <NavBar />
      </header>
      <section className="w-11/12 flex flex-col items-center mx-auto gap-5 my-40">
        <h1 className="text-xl font-bold pb-20">{project.title}</h1>
        <div className="flex flex-col items-center w-full">
          <Image
            src={project.img}
            alt={project.title}
            width={1000}
            height={1000}
            className="rounded-lg border border-black shadow-xl xl:w-3/5"
          />
          <p className="w-4/5 my-20 p-5 rounded-lg border border-black shadow-xl xl:w-3/5">
            {project.description}
          </p>
          <Link
            href={project.href}
            className="text-2xl font-bold hover:text-gray-500"
          >
            Lien vers le site
          </Link>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

