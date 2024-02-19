import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col items-center w-full bg-gray-50 py-10 gap-4">
      <p>Créé par Guillaume Ceccoli - CreaNumerik04</p>
      <p>Tous droits réservés - 2024</p>
      <Link href="/mentions" className="text-gray-500 hover:text-gray-400">
        Mentions Légales
      </Link>
    </div>
  );
}

