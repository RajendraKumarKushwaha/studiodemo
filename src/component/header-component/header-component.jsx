import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about-us" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Gallary", href: "/gallary" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact-us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <Link to="/" className="text-xl font-bold">StudioName</Link>
      
      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <Link key={link.name} to={link.href} className="text-gray-700 hover:text-black">
            {link.name}
          </Link>
        ))}
      </nav>
      
      <Button className="hidden md:block bg-black text-white px-4 py-2 rounded-lg">
        contact us
      </Button>
      
      {/* Mobile Menu */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden">
            <Menu size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className="text-lg" onClick={() => setOpen(false)}>
                {link.name}
              </Link>
            ))}
          </nav>
          <Button className="mt-4 w-full bg-black text-white px-4 py-2 rounded-lg">
            contact us
          </Button>
        </SheetContent>
      </Sheet>
    </header>
  );
}
