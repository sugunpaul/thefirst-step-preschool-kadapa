
import React, { useState } from "react";
import { Mail, Phone, Clock, Calendar, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { cn } from "@/lib/utils";

const GetInTouch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log({ name, email, date, message });
  };

  const handleCall = () => {
    window.location.href = "tel:9493866446";
  };

  const handleEmail = () => {
    window.location.href = "mailto:info@firststeppreschool.com";
  };

  return (
    <section id="get-in-touch" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
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
                <p className="text-lg font-medium text-primary">(949) 386-6446</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Our friendly staff is ready to assist you
                </p>
              </CardContent>
              <CardFooter>
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
                <p className="text-lg font-medium text-primary">info@firststeppreschool.com</p>
                <p className="text-sm text-muted-foreground mt-2">
                  We'll respond within 24 hours
                </p>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={handleEmail} 
                  className="w-full"
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
                <p className="text-lg font-medium text-primary">7:00 AM - 6:00 PM</p>
                <p className="text-sm font-medium mt-2">Saturday - Sunday:</p>
                <p className="text-primary">Closed</p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full"
                  variant="outline"
                  onClick={() => window.open("https://calendar.google.com", "_blank")}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  View Calendar
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
                <CardDescription>Fill out the form below to schedule a tour</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        placeholder="John Smith" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
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
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="mt-1"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="date">Preferred Visit Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal mt-1",
                              !date && "text-muted-foreground"
                            )}
                            id="date"
                          >
                            <Calendar className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <CalendarComponent
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            className="p-3 pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="I'm interested in touring the facility..." 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.4260100960224!2d-117.7398848!3d33.6464145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dce7df1745b6f9%3A0xf7a0f511ae0aa750!2s21420%20Magnolia%20St%2C%20Huntington%20Beach%2C%20CA%2092646%2C%20USA!5e0!3m2!1sen!2sus!4v1708901234567!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
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
                  className="w-full"
                  onClick={() => window.open("https://maps.app.goo.gl/TZNRv6qmf5AJwKaE7", "_blank")}
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
