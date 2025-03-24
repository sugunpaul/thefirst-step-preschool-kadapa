import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Palette, Music, Shapes, BookOpen, Atom, Users } from "lucide-react";
import AnimatedElement from "./AnimatedElement";
import { Card, CardContent } from "@/components/ui/card";
import ActivityModal from "./ActivityModal";
import { ActivityType } from "@/types/activity";

const activities = [
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "Arts & Crafts",
    description:
      "Creative expression through various art mediums and crafting projects.",
    color: "bg-red-50 border-red-200", // 🎨 Soft Red Background
    tagline: "We Care for Your Children",
  },
  {
    icon: <Music className="h-8 w-8 text-primary" />,
    title: "Music & Movement",
    description:
      "Rhythm, dance, and musical instruments to develop coordination and expression.",
    color: "bg-blue-50 border-blue-200", // 🎵 Light Blue Background
    tagline: "Loving Your Children",
  },
  {
    icon: <Shapes className="h-8 w-8 text-secondary" />,
    title: "Sensory Play",
    description:
      "Tactile experiences that stimulate cognitive development and curiosity.",
    color: "bg-yellow-50 border-yellow-200", // 🟡 Soft Yellow Background
    tagline: "We Care for Your Children",
  },
  {
    icon: <BookOpen className="h-8 w-8 text-secondary" />,
    title: "Story Time",
    description:
      "Language development through engaging stories and interactive reading.",
    color: "bg-purple-50 border-purple-200", // 📖 Light Purple Background
    tagline: "Loving Your Children",
  },
  {
    icon: <Atom className="h-8 w-8 text-accent" />,
    title: "Science Exploration",
    description:
      "Age-appropriate experiments that introduce scientific concepts in fun ways.",
    color: "bg-green-50 border-green-200", // 🔬 Light Green Background
    tagline: "We Care for Your Children",
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: "Social Play",
    description:
      "Guided activities to develop social skills, sharing, cooperation and Engaging activities",
    color: "bg-orange-50 border-orange-200", // 👫 Light Orange Background
    tagline: "Loving Your Children",
  },
];

const ChildrenActivities = () => {
  const [selectedActivity, setSelectedActivity] = useState<ActivityType | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openActivityModal = (activity: ActivityType) => {
    setSelectedActivity(activity);
    setIsModalOpen(true);
  };

  const closeActivityModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="activities" className="py-20 relative overflow-hidden">
      {/* Animated background with diverse children illustration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-[300px] h-[300px] top-10 left-10 rounded-full bg-blue-300 animate-float blur-3xl"></div>
        <div
          className="absolute w-[200px] h-[200px] bottom-10 right-20 rounded-full bg-green-200 animate-float blur-3xl"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute w-[250px] h-[250px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-200 animate-float blur-3xl"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="section-container relative z-10">
        <AnimatedElement animation="slide-up" delay={100}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Children's <span className="text-gradient">Activities</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We offer a wide range of engaging activities designed to nurture
              different aspects of your child's development.
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
              <Card
                className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${activity.color} border-2 cursor-pointer`}
                onClick={() => openActivityModal(activity)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="p-3 rounded-full bg-white shadow-sm mr-4">
                      {activity.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-2">
                        {activity.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm italic text-right font-medium text-primary mt-4">
                    {activity.tagline}
                  </p>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>

        {/* <AnimatedElement animation="slide-up" delay={600}>
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
            <p className="text-muted-foreground italic font-serif text-lg">
              "Our curriculum is designed to engage, inspire, and develop well-rounded individuals."
            </p>
          </div>
        </AnimatedElement> */}
      </div>

      {/* Activity Modal */}
      <ActivityModal
        activity={selectedActivity}
        isOpen={isModalOpen}
        onClose={closeActivityModal}
      />
    </section>
  );
};

export default ChildrenActivities;
