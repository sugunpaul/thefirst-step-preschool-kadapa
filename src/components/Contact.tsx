import React from "react";
import AnimatedElement from "./AnimatedElement";
import ContactInfo from "./contact/ContactInfo";
import ContactForm from "./contact/ContactForm";
import PhoneCall from "./contact/PhoneCall";

const Contact = () => {
  const handlePhoneCall = () => {
    window.location.href = "tel:9493866446";
  };

  const contactDetails = {
    phoneNumber: "8125511911",
    email: "thefirststeppreschoolkdp@gmail.com",
    address: {
      line1: "123 Learning Lane",
      line2: "Irvine, CA 92618",
    },
    hours: {
      weekdays: "Monday - Friday: 7:00 AM - 6:00 PM",
      weekends: "Saturday - Sunday: Closed",
    },
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="section-container">
        <AnimatedElement animation="slide-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We'd love to hear from you! Contact us to schedule a tour or learn
              more about our programs.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedElement animation="slide-up" delay={100}>
            <ContactInfo
              phoneNumber={contactDetails.phoneNumber}
              email={contactDetails.email}
              address={contactDetails.address}
              hours={contactDetails.hours}
              onPhoneClick={handlePhoneCall}
            />
          </AnimatedElement>

          <AnimatedElement animation="slide-up" delay={200}>
            <ContactForm />
          </AnimatedElement>
        </div>

        <AnimatedElement animation="slide-up" delay={300}>
          <div className="mt-16">
            <PhoneCall phoneNumber={contactDetails.phoneNumber} />
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Contact;
