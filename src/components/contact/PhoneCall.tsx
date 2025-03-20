
import React from "react";
import { Phone } from "lucide-react";

interface PhoneCallProps {
  phoneNumber: string;
}

const PhoneCall = ({ phoneNumber }: PhoneCallProps) => {
  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber.replace(/[^0-9]/g, '')}`;
  };

  return (
    <div className="text-center">
      <button
        onClick={handlePhoneCall}
        className="inline-flex items-center px-6 py-3 rounded-full bg-accent text-white font-medium transition-all hover:shadow-lg hover:-translate-y-1 gap-2"
      >
        <Phone className="h-5 w-5" />
        <span>Call {phoneNumber}</span>
      </button>
      <p className="text-sm text-muted-foreground mt-2">
        Mobile users can tap to call directly
      </p>
    </div>
  );
};

export default PhoneCall;
