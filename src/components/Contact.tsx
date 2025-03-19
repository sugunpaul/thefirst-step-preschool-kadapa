
import React, { useState } from "react";
import AnimatedElement from "./AnimatedElement";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Alert, AlertDescription } from "./ui/alert";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: ""
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:9493866446";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: "" });

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: "error",
        message: "Please fill out all required fields"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Submit to Supabase
      const { error } = await supabase
        .from("contact_submissions")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message
          }
        ]);

      if (error) throw error;

      // Success
      setFormStatus({
        type: "success",
        message: "Thank you! We'll be in touch soon."
      });
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus({
        type: "error",
        message: "Something went wrong. Please try again later."
      });
      
      toast({
        title: "Submission Failed",
        description: "There was a problem sending your message.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
              
              {formStatus.type && (
                <Alert 
                  className={`mb-6 ${formStatus.type === "success" ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}
                >
                  <AlertDescription className={formStatus.type === "success" ? "text-green-700" : "text-red-700"}>
                    {formStatus.message}
                  </AlertDescription>
                </Alert>
              )}
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name *
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      className="w-full"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      className="w-full"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    className="w-full"
                    placeholder="(123) 456-7890"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    className="w-full"
                    placeholder="I'm interested in scheduling a tour..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></Textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-primary text-white font-medium transition-all hover:shadow-lg hover:shadow-primary/20"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
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
