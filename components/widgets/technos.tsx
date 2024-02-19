"use client";

import { TECHNOS } from "@/lib/constants";
import { useIntersectionObserver } from "@/lib/hooks/useIntersectionObserverHook";

export default function Technos() {
  const ref = useIntersectionObserver("animateX");
  return (
    <article className="flex flex-col items-center gap-10 pb-40">
      <h2 className="text-3xl py-20 font-bold">Mes compétences</h2>
      <div
        ref={ref}
        className="hide flex flex-row flex-wrap justify-around items-center md:w-3/5 lg:text-xl"
      >
        {TECHNOS.map((techno, id) => {
          return (
            <p
              key={id}
              className="p-3 m-4 bg-gray-200 rounded-xl shadow-xl cursor-default hover:bg-gray-300 transition duration-300 ease-in-out"
            >
              {techno.name}
            </p>
          );
        })}
      </div>
    </article>
  );
}

