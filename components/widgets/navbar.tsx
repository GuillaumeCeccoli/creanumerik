import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex flex-row items-center justify-between p-2 sm:mx-auto lg:w-4/5">
      <Image
        src="/assets/Logo.svg"
        alt="Le logo de creanumerik"
        width={50}
        height={50}
      />
      <div className="sm:hidden">
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
      <div className="hidden sm:block sm:mr-4">
        <ul className="flex flex-row items-center justify-between gap-10 text-sm lg:text-base">
          {NAV_LINKS.map((link, id) => (
            <li key={id} className="underline-from-center">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

