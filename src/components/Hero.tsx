import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Shield, Heart, Book, Calendar, CheckCircle } from "lucide-react";
import AnimatedElement from "./AnimatedElement";

const Hero = () => {
  const [showImage, setShowImage] = useState(false);
  useEffect(() => {
    const detectDesktopMode = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /android|iphone|ipad|ipod/.test(userAgent);
      const isDesktopView =
        window.innerWidth > 1024 ||
        window.innerWidth / window.outerWidth > 0.85;

      // Show image if either it's a desktop or mobile in "Desktop Site" mode
      setShowImage(!isMobile || isDesktopView);
    };

    detectDesktopMode();
    window.addEventListener("resize", detectDesktopMode);

    return () => window.removeEventListener("resize", detectDesktopMode);
  }, []);
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 bg-gradient-to-b from-blue-50 to-pink-50"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-100/50 animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-56 h-56 rounded-full bg-pink-100/50 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-yellow-100/50 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div>
          <AnimatedElement animation="scale-in" delay={100}>
            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <span className="mr-1">✨</span> Welcome to FirstStep Pre School
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide-up" delay={200}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Where Learning{" "}
              <span
                className="text-blue-600 animate-bouncy inline-block"
                style={{ animationDelay: "0.2s" }}
              >
                Begins
              </span>{" "}
              <br />
              With{" "}
              <span
                className="text-pink-500 animate-bouncy inline-block"
                style={{ animationDelay: "0.4s" }}
              >
                Love
              </span>
            </h1>
          </AnimatedElement>

          <AnimatedElement animation="slide-up" delay={300}>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              We provide a nurturing environment where children explore, learn,
              and grow through play and guided activities.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide-up" delay={400}>
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center space-x-2 transition-all hover:scale-105 duration-300">
                <div className="rounded-full bg-blue-100 p-1">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-muted-foreground">
                  Certified Teachers
                </span>
              </div>
              <div className="flex items-center space-x-2 transition-all hover:scale-105 duration-300">
                <div className="rounded-full bg-blue-100 p-1">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-muted-foreground">Small Classes</span>
              </div>
              <div className="flex items-center space-x-2 transition-all hover:scale-105 duration-300">
                <div className="rounded-full bg-blue-100 p-1">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                </div>

                <span className="text-muted-foreground">Hygiene First</span>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide-up" delay={500}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#get-in-touch"
                className="px-6 py-3 rounded-full bg-blue-500 text-white font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1"
              >
                Schedule a Visit
              </a>
              <a
                href="tel:9493866446"
                className="px-6 py-3 rounded-full bg-white border border-blue-500/30 font-medium transition-all hover:border-blue-500 flex items-center justify-center sm:justify-start"
              >
                <svg
                  className="w-5 h-5 mr-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                Call: 8125511911
              </a>
            </div>
          </AnimatedElement>
        </div>

        {/* Right Content - Hero Image */}
        <div className="hidden sm:block">
          <AnimatedElement
            animation="scale-in"
            delay={200}
            className="relative"
          >
            <div
              className="absolute -top-10 -left-10 w-24 h-24 bg-blue-100 rounded-full opacity-70 animate-float"
              style={{ animationDelay: "1.5s" }}
            />
            <div
              className="absolute -bottom-10 -right-10 w-32 h-32 bg-pink-100 rounded-full opacity-70 animate-float"
              style={{ animationDelay: "3s" }}
            />
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-700">
              <img
                src="/images/main.jpeg"
                alt="Preschool children engaged in learning activities"
                className=" w-full h-full object-cover" 
              />
            </div>
            <AnimatedElement
              animation="fade-in"
              delay={600}
              className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2"
            >
              <div
                className="bg-white rounded-full p-4 shadow-lg flex items-center justify-center animate-float"
                style={{ animationDelay: "2s" }}
              >
                <Calendar className="h-8 w-8 text-blue-500" />
              </div>
            </AnimatedElement>
            <AnimatedElement
              animation="fade-in"
              delay={800}
              className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4"
            >
              <div
                className="bg-white rounded-full p-4 shadow-lg flex items-center justify-center animate-float"
                style={{ animationDelay: "4s" }}
              >
                <Book className="h-8 w-8 text-pink-500" />
              </div>
            </AnimatedElement>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Hero;
