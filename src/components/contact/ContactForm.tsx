
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Alert, AlertDescription } from "../ui/alert";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
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
  );
};

export default ContactForm;
