import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex flex-row items-center justify-between p-2 lg:w-4/5 lg:mx-auto">
      <Image
        src="/assets/Logo.svg"
        alt="Le logo de creanumerik"
        width={60}
        height={60}
      />
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu size="40" />
          </SheetTrigger>
          <SheetContent>
            <ul className="flex flex-col items-start gap-5">
              {NAV_LINKS.map((link, id) => (
                <li key={id}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:block">
        <ul className="flex flex-row items-center justify-between gap-10 text-base">
          {NAV_LINKS.map((link, id) => (
            <li key={id}>{link.label}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

