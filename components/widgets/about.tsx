"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("hide");
          entry.target.classList.add("animateY");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
      }
    );
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  return (
    <article className="flex flex-col items-center w-11/12 gap-20 mx-auto pt-20 pb-40">
      <h2 className="text-3xl text-black font-bold py-20">Qui suis-je ?</h2>
      <div
        ref={ref}
        className="hide flex flex-col items-center gap-10 md:flex-row md:justify-around xl:w-4/5 mx-auto"
      >
        <div className="flex flex-col items-center p-4 text-sm gap-8 border-2 border-slate-300 rounded-xl  md:w-2/4 xl:w-2/6">
          <p>
            J&apos;ai démarré ma carrière professionnelle comme menuisier dans
            une entreprise industrielle. Je suis parti de rien et j&apos;évolué
            au sein de l&apos;entreprise, tout en apprenant ce métier.
          </p>
          <p>
            Mais peu à peu, mes aspirations se sont tournées vers un tout autre
            domaine, qui est celui du développement web et de la programmation.
            En 2022 j&apos;ai pris la décision de me reconvertir, et depuis lors
            je ne cesse de poursuivre ma montée en compétences en réalisant des
            projets concrets. J&apos;ai fondé CreaNumerik04 en 2023, afin de
            poursuivre mon évolution et étancher ma soif de nouvelles
            connaissances.
          </p>
          <Button>En savoir plus</Button>
        </div>
        <div className="w-4/5 overflow-hidden rounded-lg md:w-2/6 xl:w-3/12">
          <Image
            src="/assets/homme.jpg"
            alt="Photo de quelqu'un entrain de travailler"
            width={300}
            height={300}
            className="object-cover w-full"
          />
        </div>
      </div>
    </article>
  );
}

