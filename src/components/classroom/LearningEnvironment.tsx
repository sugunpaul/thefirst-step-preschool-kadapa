
import React from "react";
import AnimatedElement from "../AnimatedElement";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

const LearningEnvironment = () => {
  const classroomImages = [
    "/images/classRoom-1.jpeg",
    "/images/classRoom-2.jpeg",
    "/images/classRoom-3.jpeg",
    "/images/classRoom-4.jpg",
    "/images/classRoom-5.jpg",
  ];

  return (
    <section id="classroom" className="py-20 bg-muted/50">
      <div className="section-container">
        <AnimatedElement animation="slide-up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Our Engaging{" "}
              <span className="text-gradient">Learning Environment</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore our thoughtfully designed classroom where children
              learn, play, and grow together in a safe and stimulating space.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement animation="slide-up" delay={100}>
            <div className="relative w-full max-w-2xl mx-auto">
              <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                speed={1200}
                loop={true}
                modules={[Navigation, Pagination, Autoplay]}
                className="w-full rounded-xl overflow-hidden shadow-xl h-96"
              >
                {classroomImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Classroom environment ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => console.error(`Failed to load image: ${image}`)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <button className="swiper-button-prev absolute top-1/2 -left-6 transform -translate-y-1/2 bg-black/50 w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-black z-10">
                <ChevronLeft size={20} />
              </button>
              <button className="swiper-button-next absolute top-1/2 -right-6 transform -translate-y-1/2 bg-black/50 w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-black z-10">
                <ChevronRight size={20} />
              </button>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide-up" delay={200}>
            <div className="space-y-6">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold">
                A Space Designed for Curious Minds
              </h3>
              <p className="text-muted-foreground">
                Our classroom is thoughtfully organized into learning centers
                that encourage exploration, creativity, and independence.
                Children move freely between areas for reading, art, building,
                dramatic play, and science discovery.
              </p>
              <ul className="space-y-3">
                {[
                  "Bright, open spaces that inspire creativity",
                  "Age-appropriate materials that promote independence",
                  "Cozy reading corners for literacy development",
                  "Dedicated areas for sensory play and exploration",
                  "Outdoor learning spaces that connect children with nature",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default LearningEnvironment;
