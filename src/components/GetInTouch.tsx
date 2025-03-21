import React, { useState } from "react";
import { Mail, Phone, Clock, Calendar, Send, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Map } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import AnimatedElement from "./AnimatedElement";
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  selected_class: string;
}
const GetInTouch = () => {
  const { toast } = useToast();

  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    selected_class: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: "" });

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: "error",
        message: "Please fill out all required fields",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Submit to Supabase
      const { error } = await supabase.from("contact_submissions").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          selected_class: formData.selected_class,
        },
      ]);

      if (error) throw error;

      // Success
      setFormStatus({
        type: "success",
        message: "Thank you! We'll be in touch soon.",
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
        message: "",
        selected_class: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });

      toast({
        title: "Submission Failed",
        description: "There was a problem sending your message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCall = () => {
    window.location.href = "tel:9493866446";
  };

  const handleEmail = () => {
    window.location.href = "mailto:thefirststeppreschoolkdp@gmail.com";
  };

  return (
    <section
      id="get-in-touch"
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
    >
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {/* Contact Card 1: Call Us */}
          <AnimatedElement animation="slide-up" delay={100}>
            <Card className="h-full bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Call Us</CardTitle>
                  <CardDescription>We're just a call away</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium text-primary">8125511911</p>
                <p className="text-lg font-medium text-primary">7207001911</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Our friendly staff is ready to assist you
                </p>
              </CardContent>
              <CardFooter className="w-full flex items-center justify-center">
                <Button
                  onClick={handleCall}
                  className="w-full"
                  variant="outline"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </CardFooter>
            </Card>
          </AnimatedElement>

          {/* Contact Card 2: Email Us */}
          <AnimatedElement animation="slide-up" delay={200}>
            <Card className="h-full bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Email Us</CardTitle>
                  <CardDescription>Send us a message</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <p className="text-lg font-medium text-primary overflow-hidden text-ellipsis whitespace-nowrap">
                      thefirststeppreschoolkdp@gmail.com
                    </p>
                  </TooltipTrigger>
                  <TooltipContent>
                    thefirststeppreschoolkdp@gmail.com
                  </TooltipContent>
                </Tooltip>
                <p className="text-sm text-muted-foreground mt-2">
                  We'll respond within 24 hours
                </p>
              </CardContent>
              <CardFooter className="w-full flex items-center justify-center">
                <Button
                  onClick={handleEmail}
                  className="w-full mt-10 "
                  variant="outline"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
              </CardFooter>
            </Card>
          </AnimatedElement>

          {/* Contact Card 3: Hours */}
          <AnimatedElement animation="slide-up" delay={300}>
            <Card className="h-full bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Hours</CardTitle>
                  <CardDescription>When you can visit us</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">Monday - Friday:</p>
                <p className="text-lg font-medium text-primary">
                  7:00 AM - 6:00 PM
                </p>
                <p className="text-sm font-medium mt-2">Saturday - Sunday:</p>
                <p className="text-primary">Closed</p>
              </CardContent>
              <CardFooter className="w-full flex items-center justify-center">
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() =>
                    window.open("https://calendar.google.com", "_blank")
                  }
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  View Calendar
                </Button>
              </CardFooter>
            </Card>
          </AnimatedElement>

          <AnimatedElement animation="slide-up" delay={400}>
            <Card className="h-full bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Branches</CardTitle>
                  <CardDescription>Find us at these locations</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">Main Branch:</p>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <p className="text-lg font-medium text-primary overflow-hidden text-ellipsis whitespace-nowrap">
                      Road no:1, Balaji Nagar-2, ITI Circle, Dist, beside ITI
                      Circle, Tilak Nagar, balaji bridge, Kadapa, Andhra Pradesh
                      516003
                    </p>
                  </TooltipTrigger>
                  <TooltipContent>
                    Road no:1, Balaji Nagar-2, ITI Circle, Dist, beside ITI
                    Circle, Tilak Nagar, balaji bridge, Kadapa, Andhra Pradesh
                    516003
                  </TooltipContent>
                </Tooltip>
                <p className="text-sm font-medium mt-2">Additional Branches:</p>
                <ul className="list-disc list-inside text-primary">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <li className="text-lg font-medium text-primary overflow-hidden text-ellipsis whitespace-nowrap">
                        Reddy Colony, N.G.O Colony, Kadapa, Andhra Pradesh
                        516003
                      </li>
                    </TooltipTrigger>
                    <TooltipContent>
                      Reddy Colony, N.G.O Colony, Kadapa, Andhra Pradesh 516003
                    </TooltipContent>
                  </Tooltip>
                </ul>
              </CardContent>
              <CardFooter className="w-full flex items-center justify-center">
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() =>
                    window.open("https://maps.google.com", "_blank")
                  }
                >
                  <Map className="h-4 w-4 mr-2" />
                  View on Map
                </Button>
              </CardFooter>
            </Card>
          </AnimatedElement>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Form Column */}
          <AnimatedElement animation="slide-up" delay={400}>
            <Card className="bg-white/80 backdrop-blur-sm shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Schedule a Visit</CardTitle>
                <CardDescription>
                  Fill out the form below to schedule a tour
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
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
                      <Label htmlFor="class">Select Class</Label>
                      <Select
                        value={formData.selected_class}
                        onValueChange={(value) =>
                          setFormData((prev) => ({
                            ...prev,
                            selected_class: value,
                          }))
                        }
                      >
                        <SelectTrigger id="class" className="w-full mt-1">
                          <SelectValue placeholder="Select a class" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Sr KG">Sr KG</SelectItem>
                          <SelectItem value="Jr KG">Jr KG</SelectItem>
                          <SelectItem value="Pre KG">Pre KG</SelectItem>
                          <SelectItem value="Play School">
                            Play School
                          </SelectItem>
                          <SelectItem value="Day Care">Day Care</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="I'm interested in touring the facility..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="mt-1"
                        rows={4}
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Send Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedElement>

          {/* Map Column */}
          <AnimatedElement animation="slide-up" delay={500}>
            <Card className="bg-white/80 backdrop-blur-sm shadow-sm overflow-hidden h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Visit Our Location</CardTitle>
                <CardDescription>The First Step School</CardDescription>
              </CardHeader>
              <CardContent className="p-0 aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d30906.389368700322!2d78.8433098!3d14.4675315!3m2!1i1024!2i768!4f13.1!2m1!1sthe%20first%20step%20school%20kadapa!5e0!3m2!1sen!2sin!4v1742559483477!5m2!1sen!2sin"
                  width="100%"
                  height="500px"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The First Step School Location"
                  className="w-full h-full"
                ></iframe>
              </CardContent>
              <CardFooter className="bg-muted/20">
                <Button
                  variant="outline"
                  className="w-full mt-4"
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/TZNRv6qmf5AJwKaE7",
                      "_blank"
                    )
                  }
                >
                  Get Directions
                </Button>
              </CardFooter>
            </Card>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
