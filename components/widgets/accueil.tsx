import { Separator } from "@/components/ui/separator";
import { RESEAUX } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Accueil() {
  return (
    <article className="h-full flex flex-col items-center pt-40 md:pt-80 md:flex-row md:justify-evenly md:items-start lg:w-4/5 lg:mx-auto">
      <div className="overflow-hidden w-3/5 lg:w-2/5 animateX">
        <Image
          src="/assets/Guillaume.png"
          alt="Une photo du développeur"
          width={300}
          height={300}
          className="object-cover mx-auto"
        />
      </div>
      <div className="flex flex-col items-center w-4/5 gap-6 py-10 md:w-2/5 animateY">
        <h1 className="text-3xl">Guillaume</h1>
        <h2 className="text-xl">Développeur Web</h2>
        <Separator className="bg-slate-400 w-3/5" />
        <p className="italic text-slate-500 text-center w-4/5">
          Développeur web curieux et passionné.
        </p>

        <ul className="flex flex-row gap-5">
          {RESEAUX.map((reseau, id) => (
            <li key={id}>
              <Link href={reseau.href}>
                <Image
                  src={reseau.icon}
                  alt={reseau.alt}
                  width={40}
                  height={40}
                  className="hover:opacity-50 transition duration-300 ease-in-out"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

