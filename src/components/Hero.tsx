
import React from "react";
import { cn } from "@/lib/utils";
import { Shield, Heart, Book, Calendar, CheckCircle } from "lucide-react";
import AnimatedElement from "./AnimatedElement";
import { AspectRatio } from "./ui/aspect-ratio";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background With Illustration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1576404425487-3c0ba7da0fdf?auto=format&fit=crop&w=1400&q=80"
            alt="Colorful preschool classroom with children engaged in activities"
            className="w-full h-full object-cover opacity-20"
            onError={(e) => {
              console.error("Image failed to load");
              e.currentTarget.src = "https://images.unsplash.com/photo-1576404425487-3c0ba7da0fdf?auto=format&fit=crop&w=1400&q=80";
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
      </div>
      
      {/* Main Illustration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-full max-w-4xl px-4 md:px-0 z-5">
        <AspectRatio ratio={16/9} className="rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1526634332515-d56c5fd16991?auto=format&fit=crop&w=1400&q=80" 
            alt="Vibrant preschool with diverse children enjoying learning activities" 
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error("Preschool illustration failed to load");
              e.currentTarget.src = "https://images.unsplash.com/photo-1526634332515-d56c5fd16991?auto=format&fit=crop&w=1400&q=80";
            }} 
          />
        </AspectRatio>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-[10%] h-64 w-64 rounded-full bg-blue-100/30 -z-5 animate-pulse" style={{ animationDuration: "6s" }} />
      <div className="absolute top-40 right-[5%] h-96 w-96 rounded-full bg-pink-100/30 -z-5 animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="absolute bottom-10 left-[20%] h-40 w-40 rounded-full bg-yellow-100/30 -z-5 animate-pulse" style={{ animationDuration: "7s" }} />
      
      {/* Animated Decorative Icons */}
      <div className="absolute left-[5%] top-[15%] animate-float" style={{ animationDelay: "0s" }}>
        <div className="bg-blue-100 p-3 rounded-full shadow-lg">
          <Book className="h-6 w-6 text-blue-500" />
        </div>
      </div>
      
      <div className="absolute right-[10%] top-[20%] animate-float" style={{ animationDelay: "1.5s" }}>
        <div className="bg-pink-100 p-3 rounded-full shadow-lg">
          <Heart className="h-6 w-6 text-pink-500" />
        </div>
      </div>
      
      <div className="absolute left-[15%] bottom-[15%] animate-float" style={{ animationDelay: "0.7s" }}>
        <div className="bg-yellow-100 p-3 rounded-full shadow-lg">
          <Shield className="h-6 w-6 text-yellow-500" />
        </div>
      </div>

      <div className="section-container grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
        <div className="z-10 text-center mx-auto max-w-4xl mt-16 md:mt-24 pt-32 md:pt-40">
          <AnimatedElement animation="scale-in" delay={100}>
            <div className="inline-flex items-center rounded-full bg-blue-100/80 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary mb-6 shadow-sm">
              <span className="mr-1">✨</span> Welcome to FirstStep Pre School
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide-up" delay={200}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Where Learning{" "}
              <span className="text-blue-400 animate-bouncy" style={{ animationDelay: "0.2s" }}>Begins</span>{" "}
              <br />With{" "}
              <span className="text-pink-400 animate-bouncy" style={{ animationDelay: "0.4s" }}>Love</span>
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
              <div className="bg-blue-50/90 backdrop-blur-sm rounded-lg p-6 flex items-start shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                <div className="rounded-full bg-blue-100 p-3 mr-4">
                  <Shield className="h-6 w-6 text-blue-500" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-blue-500 mb-2">Child Safety</h3>
                  <p className="text-gray-600">Secure environment with trained staff and safety protocols.</p>
                </div>
              </div>
              
              <div className="bg-pink-50/90 backdrop-blur-sm rounded-lg p-6 flex items-start shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
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
            <div className="flex flex-col md:flex-row justify-center md:gap-4 gap-3 mt-10">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-blue-500 text-white font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1"
              >
                Schedule a Visit
              </a>
              <a
                href="tel:9493866446"
                className="px-6 py-3 rounded-full bg-white border border-blue-500/30 font-medium transition-all hover:border-blue-500 flex items-center justify-center md:justify-start"
              >
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Call: 949-386-6446
              </a>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Hero;
