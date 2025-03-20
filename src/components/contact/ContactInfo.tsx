
import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactCard from "./ContactCard";
import AnimatedElement from "../AnimatedElement";

interface ContactInfoProps {
  phoneNumber: string;
  email: string;
  address: {
    line1: string;
    line2: string;
  };
  hours: {
    weekdays: string;
    weekends: string;
  };
  onPhoneClick: () => void;
}

const ContactInfo = ({ phoneNumber, email, address, hours, onPhoneClick }: ContactInfoProps) => {
  return (
    <div className="space-y-8">
      <ContactCard icon={Phone} title="Call Us">
        <button
          onClick={onPhoneClick}
          className="text-lg font-medium text-primary hover:underline"
        >
          {phoneNumber}
        </button>
        <p className="text-sm text-muted-foreground mt-1">
          Tap to call directly from mobile devices
        </p>
      </ContactCard>

      <ContactCard icon={Mail} title="Email Us">
        <a
          href={`mailto:${email}`}
          className="text-primary hover:underline"
        >
          {email}
        </a>
        <p className="text-sm text-muted-foreground mt-1">
          We'll respond within 24 hours
        </p>
      </ContactCard>

      <ContactCard icon={MapPin} title="Visit Us">
        <p>{address.line1}</p>
        <p>{address.line2}</p>
      </ContactCard>

      <ContactCard icon={Clock} title="Hours">
        <p>{hours.weekdays}</p>
        <p>{hours.weekends}</p>
      </ContactCard>
    </div>
  );
};

export default ContactInfo;
