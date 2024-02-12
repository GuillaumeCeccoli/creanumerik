import { TNavLinks, TProject, TReseaux } from "@/types/types";

export const NAV_LINKS: TNavLinks[] = [
  {
    id: "home",
    label: "Accueil",
    href:"/"
  },
  {
    id: "about",
    label: "A propos",
    href: "/"
  },
  {
    id: "skills",
    label: "Compétences",
    href: "/"
  },
  {
    id: "projects",
    label: "Réalisations",
    href: "/"
  },
  {
    id: "contact",
    label: "Contact",
    href: "/"
  }
]

export const RESEAUX: TReseaux[] = [
  {
    id: "linkedin",
    icon: "/assets/linkedin.svg",
    alt: "Logo linkedin",
    href: "https://www.linkedin.com/in/guillaume-ceccoli/"
  },
  {
    id: "facebook",
    icon: "/assets/fb.svg",
    alt: "Logo facebook",
    href: "https://www.facebook.com/profile.php?id=61556432066012"
  },
  {
    id:"github",
    icon: "/assets/github.svg",
    alt: "Logo github",
    href: "https://github.com/GuillaumeCeccoli"
  },
]

export const PROJECTS: TProject[] = [
  {
    id: "psychologue",
    title: "Delphine - Psychologue",
    description: "Site vitrine pour une psychologue",
    img: "/assets/site-delphine.png",
    href: "/"
  },
  {
    id: "dev-up",
    title: "Dev Up ! - Plateforme d'entraide",
    description: "Site pour une plateforme d'entraide entre développeurs",
    img: "/assets/dev-up.png",
    href: "/"
  },
  {
    id: "imc",
    title: "Calculateur d'IMC",
    description: "Calculateur d'indice de masse corporelle",
    img: "/assets/imc.png",
    href: "/"
  },
  {
    id: "challenge",
    title: "Challenge - Landing page agence de voyage",
    description: "Landing page pour une agence de voyage fictive",
    img: "/assets/travel-agency.png",
    href: "/"
  }
]