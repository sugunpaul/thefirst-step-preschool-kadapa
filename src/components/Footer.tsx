
import React from "react";
import { TreeDeciduous } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a
              href="#home"
              className="flex items-center space-x-2 text-primary mb-4"
            >
              <TreeDeciduous className="h-6 w-6" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg leading-none">
                  FirstStep
                </span>
                <span className="text-xs font-medium leading-none">
                  Pre School
                </span>
              </div>
            </a>
            <p className="text-muted-foreground text-sm max-w-xs">
              Where young minds grow, explore, and prepare for a lifetime of
              learning in a warm, supportive environment.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Classroom", "Testimonials", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Programs</h4>
            <ul className="space-y-2">
              {[
                "Toddler Program (2-3 years)",
                "Preschool (3-4 years)",
                "Pre-Kindergarten (4-5 years)",
                "Summer Camp",
                "Enrichment Activities",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#contact"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              {["facebook", "instagram", "twitter", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                  aria-label={`Visit our ${social} page`}
                >
                  <span className="capitalize">{social[0]}</span>
                </a>
              ))}
            </div>
            <p className="text-muted-foreground text-sm">
              Phone: (949) 386-6446
              <br />
              Email: info@firststeppreschool.com
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} FirstStep Pre School. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
