
import React from "react";
import { cn } from "@/lib/utils";
import { TreeDeciduous } from "lucide-react";
import AnimatedElement from "./AnimatedElement";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-[10%] h-64 w-64 rounded-full bg-primary/5 -z-10" />
      <div className="absolute top-40 right-[5%] h-96 w-96 rounded-full bg-secondary/5 -z-10" />
      <div className="absolute bottom-10 left-[20%] h-40 w-40 rounded-full bg-accent/5 -z-10" />

      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <AnimatedElement animation="slide-down" delay={100}>
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              <span className="mr-1">✨</span> Nurturing young minds
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide-up" delay={200}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Where{" "}
              <span className="text-gradient">Learning</span>{" "}
              Becomes an Adventure
            </h1>
          </AnimatedElement>

          <AnimatedElement animation="slide-up" delay={300}>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              At FirstStep Pre School, we create a joyful environment where
              curiosity thrives and every child's potential is celebrated.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide-up" delay={400}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-primary text-white font-medium transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
              >
                Enroll Now
              </a>
              <a
                href="#about"
                className="px-6 py-3 rounded-full bg-white border border-primary/20 font-medium transition-all hover:border-primary"
              >
                Learn More
              </a>
            </div>
          </AnimatedElement>
        </div>

        <div className="order-1 lg:order-2 flex justify-center items-center">
          <AnimatedElement animation="scale-in" delay={300} className="relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full animate-float" />
              <div className="absolute inset-4 bg-white rounded-full shadow-xl flex items-center justify-center">
                <TreeDeciduous className="h-24 w-24 md:h-32 md:w-32 text-primary" />
              </div>
              <div className="absolute -top-4 -right-4 bg-accent/10 p-3 rounded-full shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                <span className="text-3xl">🎨</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-secondary/10 p-3 rounded-full shadow-lg animate-float" style={{ animationDelay: "2s" }}>
                <span className="text-3xl">📚</span>
              </div>
              <div className="absolute top-1/2 -right-8 bg-primary/10 p-3 rounded-full shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
                <span className="text-3xl">🧩</span>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Hero;
