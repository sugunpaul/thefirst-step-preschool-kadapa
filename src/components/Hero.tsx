
import React from "react";
import { cn } from "@/lib/utils";
import { Shield, Heart, Book, Calendar, CheckCircle } from "lucide-react";
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
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=80"
          alt="Happy school children in uniform walking together"
          className="w-full h-full object-cover"
          onError={(e) => {
            console.error("Image failed to load");
            e.currentTarget.src = "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
      </div>
      
      {/* Floating images of children */}
      <div className="absolute left-[5%] top-[25%] animate-float" style={{ animationDelay: "0s" }}>
        <img 
          src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=250&h=250&auto=format&fit=crop&q=80" 
          alt="Happy child" 
          className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white shadow-lg"
          onError={(e) => {
            console.error("Child image 1 failed to load");
            e.currentTarget.src = "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=250&h=250&auto=format&fit=crop&q=80";
          }}
        />
      </div>
      
      <div className="absolute right-[10%] top-[20%] animate-float" style={{ animationDelay: "1.5s" }}>
        <img 
          src="https://images.unsplash.com/photo-1554474051-0256b98c36f8?w=250&h=250&auto=format&fit=crop&q=80" 
          alt="Joyful child" 
          className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white shadow-lg"
          onError={(e) => {
            console.error("Child image 2 failed to load");
            e.currentTarget.src = "https://images.unsplash.com/photo-1554474051-0256b98c36f8?w=250&h=250&auto=format&fit=crop&q=80";
          }}
        />
      </div>
      
      <div className="absolute left-[20%] bottom-[25%] animate-float" style={{ animationDelay: "0.7s" }}>
        <img 
          src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=250&h=250&auto=format&fit=crop&q=80" 
          alt="Smiling child" 
          className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-white shadow-lg"
          onError={(e) => {
            console.error("Child image 3 failed to load");
            e.currentTarget.src = "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=250&h=250&auto=format&fit=crop&q=80";
          }}
        />
      </div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-[10%] h-64 w-64 rounded-full bg-primary/5 -z-5 animate-pulse" style={{ animationDuration: "6s" }} />
      <div className="absolute top-40 right-[5%] h-96 w-96 rounded-full bg-secondary/5 -z-5 animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="absolute bottom-10 left-[20%] h-40 w-40 rounded-full bg-accent/5 -z-5 animate-pulse" style={{ animationDuration: "7s" }} />

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

          {/* Trusted by families section */}
          <AnimatedElement animation="slide-up" delay={350}>
            <div className="flex flex-col items-center mt-4 mb-8">
              <div className="text-sm font-medium text-muted-foreground mb-3">
                Trusted by families across the community
              </div>
              <div className="flex items-center justify-center space-x-2 md:space-x-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star}
                    className="w-5 h-5 text-yellow-400" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-sm font-medium text-muted-foreground ml-1">
                  5.0 (200+ reviews)
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <div className="flex items-center bg-green-50 rounded-full px-3 py-1">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-xs font-medium">Licensed Facility</span>
                </div>
                <div className="flex items-center bg-blue-50 rounded-full px-3 py-1">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-1" />
                  <span className="text-xs font-medium">Certified Teachers</span>
                </div>
                <div className="flex items-center bg-purple-50 rounded-full px-3 py-1">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-1" />
                  <span className="text-xs font-medium">Health & Safety Compliant</span>
                </div>
              </div>
            </div>
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
