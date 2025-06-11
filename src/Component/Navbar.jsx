import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {

    const navItems = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Skill", href: "#skills" },
        { name: "Project", href: "#projects" },
        { name: "Contact", href: "#contact" },


    ]
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const handleScrolled = () => {
        setIsScrolled(window.screenY > 10);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScrolled);

        return window.removeEventListener("scroll", handleScrolled);
    })

    return (
        <nav className={cn(
            "fixed z-40 w-full transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between">
                {/* logo */}
                <a href="#hero" className="text-xl font-bold text-primary flex items-center">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Snehasish</span>{" "} Sahoo
                    </span>
                </a>




                {/* desktop Nav */}
                <div className="hidden md:flex space-x-8 ">
                    {
                        navItems.map((nav, index) => (
                            <a key={index} href={nav.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">{nav.name}</a>

                        ))
                    }
                </div>
                {/* mobile Nav */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
                </button>
                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        {
                            navItems.map((nav, index) => (
                                <a key={index} href={nav.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">{nav.name}</a>

                            ))
                        }
                    </div>
                </div>

            </div>



        </nav>
    );
}

export default Navbar;