
import React, { useState, useEffect, useRef } from "react";
import AnimatedElement from "./AnimatedElement";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Parent of Alex, Age 4",
    content:
      "FirstStep has been a blessing for our family. My son has flourished academically and socially. The teachers truly care about each child's development.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Parent of Emma, Age 3",
    content:
      "We've tried several preschools, but FirstStep is exceptional. The curriculum is engaging, and the staff creates such a warm environment. My daughter can't wait to go to school each day!",
    rating: 5,
  },
  {
    name: "Jennifer Lee",
    role: "Parent of Twins, Age 4",
    content:
      "As a parent of twins, I was concerned about individual attention. The teachers at FirstStep go above and beyond to nurture each child's unique personality and learning style.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Parent of Noah, Age 4",
    content:
      "The progress my son has made with his communication skills has been remarkable. The structured yet nurturing approach at FirstStep is exactly what he needed.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(nextTestimonial, 6000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  const handleIndicatorClick = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="section-container">
        <AnimatedElement animation="slide-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              What Our <span className="text-gradient">Happy Parents</span> Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Hear from families who've experienced the FirstStep difference
              in their children's early education journey.
            </p>
          </div>
        </AnimatedElement>

        <div className="relative max-w-4xl mx-auto">
          <div
            className={cn(
              "glass-card rounded-2xl p-8 md:p-12 transition-opacity duration-500",
              isAnimating ? "opacity-0" : "opacity-100"
            )}
          >
            <div className="flex space-x-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>

            <blockquote className="font-serif text-xl md:text-2xl mb-8">
              "{testimonials[currentIndex].content}"
            </blockquote>

            <div className="flex items-center">
              <div
                className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-lg font-semibold text-primary mr-4"
                aria-hidden="true"
              >
                {testimonials[currentIndex].name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  currentIndex === index
                    ? "w-8 bg-primary"
                    : "w-2 bg-primary/30"
                )}
                onClick={() => handleIndicatorClick(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            className="absolute top-1/2 left-0 -ml-4 md:-ml-6 -translate-y-1/2 h-10 w-10 bg-white rounded-full shadow-md flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            className="absolute top-1/2 right-0 -mr-4 md:-mr-6 -translate-y-1/2 h-10 w-10 bg-white rounded-full shadow-md flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
