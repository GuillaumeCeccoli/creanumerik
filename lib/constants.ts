import { TNavLinks, TReseaux } from "@/types/types";

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