
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ActivityType } from "@/types/activity";

interface ActivityModalProps {
  activity: ActivityType | null;
  isOpen: boolean;
  onClose: () => void;
}

const ActivityModal = ({ activity, isOpen, onClose }: ActivityModalProps) => {
  if (!activity) return null;

  // Sample images for each activity
  const getActivityImages = (title: string) => {
    const baseImages = [
      "https://images.unsplash.com/photo-1564429097439-875865858c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1476234251651-f353703a034d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1615627121117-e3278bc8b61b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ];
    
    return baseImages;
  };

  const images = getActivityImages(activity.title);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[50%] w-[95%] max-h-[80vh] overflow-y-auto animate-scale-in">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif flex items-center gap-3">
            <span className="inline-block p-2 rounded-full bg-white shadow-sm">
              {activity.icon}
            </span> 
            {activity.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Activity description */}
          <div className="text-lg text-muted-foreground">
            <p className="mb-4">{activity.description}</p>
            <p className="mb-4">
              At FirstStep Pre School, we believe that {activity.title.toLowerCase()} plays a vital role in developing your child's cognitive, social, and physical abilities. Our trained educators guide children through engaging and age-appropriate activities designed to foster creativity, critical thinking, and joy in learning.
            </p>
            <p className="italic font-medium text-primary">
              {activity.tagline}
            </p>
          </div>
          
          {/* Image carousel */}
          <div className="w-full">
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-lg aspect-video">
                        <img 
                          src={image} 
                          alt={`${activity.title} activity ${index + 1}`} 
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="relative static left-0 translate-x-0 translate-y-0 mr-2" />
                <CarouselNext className="relative static right-0 translate-x-0 translate-y-0 ml-2" />
              </div>
            </Carousel>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ActivityModal;
