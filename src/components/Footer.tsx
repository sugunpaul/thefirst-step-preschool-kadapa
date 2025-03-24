import React from "react";
import { TreeDeciduous } from "lucide-react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { name: "facebook", icon: <Facebook />, url: "#" },
    { name: "instagram", icon: <Instagram />, url: "#" },
    { name: "twitter", icon: <Twitter />, url: "#" },
    { name: "youtube", icon: <Youtube />, url: "#" },
  ];
  return (
    <footer className="bg-primary text-white border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a
              href="#home"
              className="flex items-center space-x-2 text-primary mb-4"
            >
              <img
                src="/lovable-uploads/453777d0-2637-4795-9bb2-b0c697a62606.png"
                alt="FirstStep PreSchool Logo"
                className="h-14 md:h-16"
              />
            </a>
            <p className="text-white text-sm max-w-xs">
              Where young minds grow, explore, and prepare for a lifetime of
              learning in a warm, supportive environment.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                "Home",
                "About",
                "Classroom",
                "Testimonials",
                "Get in Touch",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white hover:text-black transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Programs</h4>
            <ul className="space-y-2">
              {[
                "Daycare (0-2 years)",
                "Preschool (2-3 years)",
                "Pre-KG (4-5 years)",
                "Junior KG (5-6 years)",
                "Senior KG (6-7 years)",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#contact"
                    className="text-white hover:text-black transition-colors text-sm"
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
              {socialLinks.map(({ name, icon, url }) => (
                <a
                  key={name}
                  href={url}
                  className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-black hover:bg-primary transition-colors"
                  aria-label={`Visit our ${name} page`}
                >
                  {icon}
                </a>
              ))}
            </div>{" "}
            <p className="text-white text-sm">
              Phone: 8125511911
              <p className="text-white text-sm">
                Email: thefirststeppreschoolkdp@gmail.com
              </p>
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm mb-4 md:mb-0">
            © {currentYear}The FirstStep Pre-School. All rights reserved.
          </p>
          {/* <div className="flex space-x-6">
            <a href="#" className="text-sm text-white ">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-white  ">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-white  ">
              Cookie Policy
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
