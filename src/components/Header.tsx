
import React, { useState, useEffect } from "react";
import { Menu, X, TreeDeciduous, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Classroom", href: "#classroom" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center space-x-2 text-primary no-select"
          >
            <TreeDeciduous className="h-8 w-8" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl leading-none tracking-tight">
                FirstStep
              </span>
              <span className="text-sm font-medium leading-none tracking-wide">
                Pre School
              </span>
            </div>
          </a>

          {/* Contact Number */}
          <a 
            href="tel:9493866446" 
            className={cn(
              "flex items-center gap-1.5 text-sm font-medium",
              isMobile ? "ml-auto mr-4" : "hidden md:flex"
            )}
          >
            <Phone className="h-4 w-4 text-primary" />
            <span className="hidden sm:inline">949-386-6446</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-sm transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-sm z-40 transition-all duration-300 flex flex-col md:hidden pt-24",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center space-y-8 p-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-medium text-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="tel:9493866446" className="flex items-center gap-2 font-medium text-lg">
            <Phone className="h-5 w-5 text-primary" />
            <span>949-386-6446</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
