
import React from "react";
import { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  iconColor?: string;
}

const ContactCard = ({ icon: Icon, title, children, iconColor = "text-primary" }: ContactCardProps) => {
  return (
    <div className="glass-card rounded-xl p-6 hover:shadow-md transition-all">
      <div className="flex items-start">
        <div className="bg-primary/10 p-3 rounded-lg mr-4">
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
