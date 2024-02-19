import { TNavLinks, TProject, TReseaux, TTechnos } from "@/types/types";

export const NAV_LINKS: TNavLinks[] = [
  {
    id: "home",
    label: "Accueil",
    href:"/"
  },
  {
    id: "about",
    label: "A propos",
    href: "/#about"
  },
  {
    id: "projects",
    label: "Réalisations",
    href: "/#projets"
  },
  {
    id: "skills",
    label: "Compétences",
    href: "/#technos"
  },
  {
    id: "contact",
    label: "Contact",
    href: "/#contact"
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
    title: "Cabinet de psychologie",
    description: "Ce site vitrine a été réalisé pour une psychologue libérale basée aux Pennes-Mirabeau, dans les Bouches-du-Rhône, dans le but de présenter ses services et de faciliter le contact avec de futurs patients. C'était mon premier projet réalisé en totale autonomie. En collaboration avec la cliente, nous avons créé un site à son image, passant par la conception de maquettes sur Figma, puis par l'intégration sur Next.js une fois le design validé. J'ai rencontré plusieurs défis, notamment la mise en place d'un formulaire de contact avec la bibliothèque Zod pour le contrôle des données, ainsi que la création d'une API côté serveur pour gérer ces données, et les renvoyer sur son adresse mail, via le service SendGrid. J'ai également utilisé react-hook-form et des composants de ShadCN/UI. Pour le déploiement, j'ai choisi Vercel et configuré le site pour pointer vers le nom de domaine acheté sur Infomaniak. Ce projet m'a permis d'approfondir mes compétences et d'apprendre de nouvelles techniques. Il reste encore à développer une partie blog avec la création et la gestion d'une base de données pour que la cliente puisse publier du contenu sur son site.",
    img: "/assets/site-delphine.png",
    href: "https://www.ceccoli-delphine.fr/"
  },
  {
    id: "dev-up",
    title: "Plate-forme d'entraide",
    description: "Ce premier projet en collaboration avec d'autres développeurs passionnés, a été l'occasion pour moi d'apprendre à me servir de Next.js. Nous avions mis en place un système d'authentification avec NextAuth et créé une base de données SQL avec l'ORM Prisma. En ce qui concerne la logique et le design, nous avions utilisé Typescript, afin de rendre notre code type-safe et tailwind pour le design CSS. Autant d'éléments nouveaux, m'ont permis d'approfondir mes connaissances et de travailler ma logique. Ce projet a été réalisé sous la tutelle d'un développeur expérimenté, qui nous a servi de mentor pour toute la durée du projet. Nous avions également utilisé GitHub pour la gestion de version et le travail en équipe. Ce projet a été une expérience enrichissante et m'a permis de découvrir de nouvelles méthodes de travail. Ce projet open-source n'est pas encore achevé, mais j'espère que nous pourrons le finaliser.",
    img: "/assets/dev-up.png",
    href: "https://dev-up.vercel.app/"
  },
  {
    id: "imc",
    title: "Calculateur d'IMC",
    description: "Ce petit projet développé en HTML, CSS et JavaScript, m'a permis de mettre en pratique mes connaissances en JavaScript. J'ai utilisé des conditions pour vérifier les données entrées par l'utilisateur, et j'ai créé une fonction pour calculer l'IMC. J'ai également utilisé des événements pour déclencher le calcul et afficher le résultat. Ce projet m'a permis de comprendre le fonctionnement de JavaScript et de m'entraîner à manipuler le DOM. J'ai également utilisé Git pour versionner mon code et GitHub pour le stocker. Ce projet est un bon exemple de ce que je suis capable de réaliser en JavaScript.",
    img: "/assets/imc.png",
    href: "https://imc-calculator-iota.vercel.app/"
  },
  {
    id: "challenge",
    title: "Challenge - Landing page agence de voyage",
    description: "Ce challenge réalisé pour \"La minute de code\" a été réalisé avec Next.js. J'ai utilisé Typescript pour la logique et tailwindcss pour le design. Le but était de créer une landing page pour une agence de voyage fictive. J'ai choisi la scandinavie, car je suis un grand fan de la culture viking et scandinave.",
    img: "/assets/travel-agency.png",
    href: "https://challenge-travel-agency.vercel.app/"
  }
]

export const TECHNOS: TTechnos[] = [
  {
    id: "htmlcss",
    name: "HTML & CSS"
  },
  {
    id: "jsts",
    name: "JavaScript / TypeScript"
  },
  {
    id: "react",
    name: "React"
  },
  {
    id: "next",
    name: "Next.js"
  },
  {
    id: "tailwind",
    name: "Tailwind CSS"
  },
  {
    id: "git",
    name: "Git"
  },
  {
    id: "github",
    name: "GitHub"
  },
  {
    id: "node",
    name: "Node.js"
  },
  {
    id: "figma",
    name: "Figma"
  },
  {
    id: "affinity",
    name: "Affinity Designer"
  }
]