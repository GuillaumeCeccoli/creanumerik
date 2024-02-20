"use client";

import { PROJECTS } from "@/lib/constants";
import { useIntersectionObserver } from "@/lib/hooks/useIntersectionObserverHook";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Card, CardContent } from "../ui/card";

export default function ProjectCards() {
  const ref = useIntersectionObserver("animateX");
  return (
    <div className="flex flex-col items-center py-10">
      <h2 className="text-3xl text-black font-bold py-20">Mes réalisations</h2>
      <div
        ref={ref}
        className="hide flex flex-col items-center gap-16 pt-20 pb-40 w-4/5 md:flex-row md:justify-around md:flex-wrap md:w-full"
      >
        {PROJECTS.map((project, id) => {
          return (
            <Card
              key={id}
              className="overflow-hidden w-full md:w-2/5 borderAnimation"
            >
              <Accordion type="single" collapsible>
                <AccordionItem value={project.id}>
                  <CardContent className="w-full relative flex flex-col items-center">
                    <Image
                      src={project.img}
                      alt={project.title}
                      width={1000}
                      height={1000}
                      className="object-cover w-full"
                    />
                    <div className="absolute bottom-4 bg-white bg-opacity-50 rounded-full animate-bounce">
                      <AccordionTrigger></AccordionTrigger>
                    </div>
                  </CardContent>
                  <AccordionContent className="flex">
                    <Link
                      href={`/projects/${project.id}`}
                      className="my-6 mx-auto hover:bg-gray-300 p-4 bg-gray-200 rounded-lg"
                    >
                      En savoir plus
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

