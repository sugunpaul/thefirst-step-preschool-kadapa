
import React from "react";
import AnimatedElement from "./AnimatedElement";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const handlePhoneCall = () => {
    window.location.href = "tel:9493866446";
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
            <div className="space-y-8">
              <div className="glass-card rounded-xl p-6 hover:shadow-md transition-all">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                    <button
                      onClick={handlePhoneCall}
                      className="text-lg font-medium text-primary hover:underline"
                    >
                      (949) 386-6446
                    </button>
                    <p className="text-sm text-muted-foreground mt-1">
                      Tap to call directly from mobile devices
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 hover:shadow-md transition-all">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                    <a
                      href="mailto:info@firststeppreschool.com"
                      className="text-primary hover:underline"
                    >
                      info@firststeppreschool.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 hover:shadow-md transition-all">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                    <p>123 Learning Lane</p>
                    <p>Irvine, CA 92618</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 hover:shadow-md transition-all">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Hours</h3>
                    <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                    <p>Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide-up" delay={200}>
            <div className="glass-card rounded-xl p-8 h-full">
              <h3 className="font-serif text-2xl font-semibold mb-6">
                Schedule a Visit
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="I'm interested in scheduling a tour..."
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full px-6 py-3 rounded-lg bg-primary text-white font-medium transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  Send Message
                </button>
              </form>
            </div>
          </AnimatedElement>
        </div>

        <AnimatedElement animation="slide-up" delay={300}>
          <div className="mt-16 text-center">
            <button
              onClick={handlePhoneCall}
              className="inline-flex items-center px-6 py-3 rounded-full bg-accent text-white font-medium transition-all hover:shadow-lg hover:-translate-y-1 gap-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call (949) 386-6446</span>
            </button>
            <p className="text-sm text-muted-foreground mt-2">
              Mobile users can tap to call directly
            </p>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Contact;
