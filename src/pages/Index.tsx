
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ChildrenActivities from "@/components/ChildrenActivities";
import Classroom from "@/components/Classroom";
import Testimonials from "@/components/Testimonials";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update the title for SEO
    document.title = "FirstStep Pre School - Nurturing Young Minds";

    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "FirstStep Pre School provides a nurturing environment for children to learn, play, and grow. Enroll your child today!"
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ChildrenActivities />
        <Classroom />
        <Testimonials />
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
