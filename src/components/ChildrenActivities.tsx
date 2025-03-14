
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Palette, Music, Shapes, BookOpen, Atom, Users } from "lucide-react";
import AnimatedElement from "./AnimatedElement";

const activities = [
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "Arts & Crafts",
    description: "Creative expression through various art mediums and crafting projects.",
  },
  {
    icon: <Music className="h-8 w-8 text-primary" />,
    title: "Music & Movement",
    description: "Rhythm, dance, and musical instruments to develop coordination and expression.",
  },
  {
    icon: <Shapes className="h-8 w-8 text-secondary" />,
    title: "Sensory Play",
    description: "Tactile experiences that stimulate cognitive development and curiosity.",
  },
  {
    icon: <BookOpen className="h-8 w-8 text-secondary" />,
    title: "Story Time",
    description: "Language development through engaging stories and interactive reading.",
  },
  {
    icon: <Atom className="h-8 w-8 text-accent" />,
    title: "Science Exploration",
    description: "Age-appropriate experiments that introduce scientific concepts in fun ways.",
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: "Social Play",
    description: "Guided activities to develop social skills, sharing, and cooperation.",
  },
];

const ChildrenActivities = () => {
  return (
    <section id="activities" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="section-container">
        <AnimatedElement animation="slide-up" delay={100}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Children's <span className="text-gradient">Activities</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We offer a wide range of engaging activities designed to nurture different aspects of your child's development.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <AnimatedElement 
              key={index} 
              animation="scale-in" 
              delay={150 + index * 50}
            >
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-start mb-4">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    {activity.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-2">{activity.title}</h3>
                    <p className="text-muted-foreground">{activity.description}</p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement animation="slide-up" delay={600}>
          <div className="mt-16 text-center">
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Avatar className="h-14 w-14 border-2 border-primary/20">
                <AvatarImage src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80" />
                <AvatarFallback>CH</AvatarFallback>
              </Avatar>
              <Avatar className="h-14 w-14 border-2 border-secondary/20">
                <AvatarImage src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80" />
                <AvatarFallback>CH</AvatarFallback>
              </Avatar>
              <Avatar className="h-14 w-14 border-2 border-accent/20">
                <AvatarImage src="https://images.unsplash.com/photo-1517022812141-3ac40a15d1ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80" />
                <AvatarFallback>CH</AvatarFallback>
              </Avatar>
            </div>
            <p className="text-muted-foreground italic">
              "Our curriculum is designed to engage, inspire, and develop well-rounded individuals."
            </p>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default ChildrenActivities;
