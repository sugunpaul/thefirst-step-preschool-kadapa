
import React from "react";
import { cn } from "@/lib/utils";
import { Shield, Heart } from "lucide-react";
import AnimatedElement from "./AnimatedElement";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/lovable-uploads/7c7be02d-904d-4b1d-ba75-0694a4f68af7.png"
          alt="Happy children playing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
      </div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-[10%] h-64 w-64 rounded-full bg-primary/5 -z-5" />
      <div className="absolute top-40 right-[5%] h-96 w-96 rounded-full bg-secondary/5 -z-5" />
      <div className="absolute bottom-10 left-[20%] h-40 w-40 rounded-full bg-accent/5 -z-5" />

      <div className="section-container grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
        <div className="z-10 text-center mx-auto max-w-4xl">
          <AnimatedElement animation="scale-in" delay={100}>
            <div className="inline-flex items-center rounded-full bg-blue-100/80 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary mb-6 shadow-sm">
              <span className="mr-1">✨</span> Welcome to FirstStep Pre School
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide-up" delay={200}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Where Learning{" "}
              <span className="text-blue-400">Begins</span>{" "}
              <br />With{" "}
              <span className="text-pink-400">Love</span>
            </h1>
          </AnimatedElement>

          <AnimatedElement animation="slide-up" delay={300}>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
              We provide a nurturing environment where children explore, learn,
              and grow through play and guided activities.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide-up" delay={400}>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="bg-blue-50/90 backdrop-blur-sm rounded-lg p-6 flex items-start shadow-md">
                <div className="rounded-full bg-blue-100 p-3 mr-4">
                  <Shield className="h-6 w-6 text-blue-500" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-blue-500 mb-2">Child Safety</h3>
                  <p className="text-gray-600">Secure environment with trained staff and safety protocols.</p>
                </div>
              </div>
              
              <div className="bg-pink-50/90 backdrop-blur-sm rounded-lg p-6 flex items-start shadow-md">
                <div className="rounded-full bg-pink-100 p-3 mr-4">
                  <Heart className="h-6 w-6 text-pink-500" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-pink-500 mb-2">Loving Care</h3>
                  <p className="text-gray-600">Nurturing educators dedicated to your child's development and happiness.</p>
                </div>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide-up" delay={500}>
            <div className="flex justify-center gap-4 mt-10">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-blue-500 text-white font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1"
              >
                Schedule a Visit
              </a>
              <a
                href="tel:833-384-9661"
                className="px-6 py-3 rounded-full bg-white border border-blue-500/30 font-medium transition-all hover:border-blue-500 flex items-center"
              >
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Call: 833-384-9661
              </a>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Hero;
