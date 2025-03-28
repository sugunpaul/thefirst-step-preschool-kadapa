import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
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
    { label: "Get in Touch", href: "#get-in-touch" },
    // { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    // Prevent background scrolling when the modal is open
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isMobileMenuOpen
          ? "bg-white shadow-md" // Apply when mobile menu is open
          : isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm" // Apply when scrolled
          : "bg-transparent" // Default
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center space-x-2 text-primary no-select"
          >
            <img
              src="/lovable-uploads/453777d0-2637-4795-9bb2-b0c697a62606.png"
              alt="FirstStep PreSchool Logo"
              className="h-14 md:h-16"
            />
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
            <span className="hidden sm:inline">8125511911</span>
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
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Modal Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          {/* Modal Content */}
          <div className=" w-full h-full flex items-center justify-center bg-white rounded-lg shadow-xl w-11/12 max-w-sm p-6 relative sm:hidden">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            {/* Navigation Links */}
            <nav className="flex flex-col items-center space-y-6 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-lg font-medium text-gray-800 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              {/* Contact Number */}
              <a
                href="tel:9493866446"
                className="flex items-center gap-2 text-lg font-medium text-gray-800"
              >
                <Phone className="h-5 w-5 text-primary" />
                <span>8125511911</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
