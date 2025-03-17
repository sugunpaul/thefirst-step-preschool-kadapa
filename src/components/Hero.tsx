
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
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
        <img
          src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Happy children playing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-white" />
      </div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-[10%] h-64 w-64 rounded-full bg-primary/5 -z-5" />
      <div className="absolute top-40 right-[5%] h-96 w-96 rounded-full bg-secondary/5 -z-5" />
      <div className="absolute bottom-10 left-[20%] h-40 w-40 rounded-full bg-accent/5 -z-5" />

      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 z-10">
          <AnimatedElement animation="slide-down" delay={100}>
            <div className="inline-flex items-center rounded-full bg-white/80 backdrop-blur-sm px-3 py-1 text-sm font-medium text-primary mb-6 shadow-sm">
              <span className="mr-1">✨</span> Nurturing young minds
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide-up" delay={200}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
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
            <div className="flex flex-wrap gap-4 mb-8">
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
          
          {/* Children Images */}
          <AnimatedElement animation="scale-in" delay={500}>
            <div className="flex justify-start gap-3 overflow-hidden">
              <div className="h-16 w-16 md:h-20 md:w-20 bg-white rounded-full border-2 border-primary/20 overflow-hidden shadow-md hover:scale-105 transition-transform">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80"
                  alt="Child learning with technology"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-16 w-16 md:h-20 md:w-20 bg-white rounded-full border-2 border-secondary/20 overflow-hidden shadow-md hover:scale-105 transition-transform">
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80"
                  alt="Children in group activity"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-16 w-16 md:h-20 md:w-20 bg-white rounded-full border-2 border-accent/20 overflow-hidden shadow-md hover:scale-105 transition-transform">
                <img
                  src="https://images.unsplash.com/photo-1517022812141-3ac40a15d1ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80"
                  alt="Children playing outdoors"
                  className="h-full w-full object-cover"
                />
              </div>
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
