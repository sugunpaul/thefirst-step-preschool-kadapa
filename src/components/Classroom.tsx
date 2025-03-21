
import React from "react";
import AnimatedElement from "./AnimatedElement";
import { Sparkles, Heart, Brain, Users, X } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

const Classroom = () => {
  const features = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Creative Expression",
      description:
        "Art, music, and dramatic play that nurtures imagination and self-expression.",
      detailedInfo: "Our creative expression program encourages children to explore different art forms, music styles, and dramatic play scenarios. Through these activities, children develop fine motor skills, build confidence in expressing themselves, and learn to appreciate various forms of artistic expression. Activities include finger painting, puppet shows, musical instrument exploration, and imaginative play in our themed corners."
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Cognitive Development",
      description:
        "Age-appropriate activities that build problem-solving and critical thinking skills.",
      detailedInfo: "Our cognitive development curriculum is designed to stimulate children's natural curiosity and thinking abilities. Through purposeful play, guided exploration, and hands-on activities, children develop essential problem-solving skills, logical reasoning, and memory capabilities. We incorporate puzzles, sorting games, pattern recognition activities, and early mathematics concepts in fun, engaging ways that make learning a joy."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Emotional Growth",
      description:
        "Supporting children to understand and express their feelings in healthy ways.",
      detailedInfo: "Emotional intelligence is a cornerstone of our program. We help children identify and name their feelings, develop self-regulation skills, and build empathy for others. Through storytelling, role-playing, and guided discussions, children learn to navigate their emotions in constructive ways. Our teachers provide a safe, supportive environment where all feelings are acknowledged and children develop positive self-esteem and resilience."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Social Skills",
      description:
        "Learning to share, collaborate, and build meaningful friendships.",
      detailedInfo: "Strong social skills form the foundation for lifelong relationships and success. Our curriculum encourages collaboration, sharing, turn-taking, and conflict resolution through guided group activities and supervised play. Children learn to communicate effectively, respect differences, and develop genuine friendships. We facilitate positive peer interactions while teaching important social boundaries and cooperation skills that will serve them throughout life."
    },
  ];

  return (
    <>
      <section id="about" className="py-20 bg-white">
        <div className="section-container">
          <AnimatedElement animation="slide-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Our Approach to{" "}
                <span className="text-gradient">Early Learning</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                We believe each child is unique and deserves a nurturing
                environment that supports their individual journey of growth and
                discovery.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedElement
                key={index}
                animation="slide-up"
                delay={index * 100}
              >
                <Sheet>
                  <SheetTrigger asChild>
                    <div className="glass-card rounded-xl p-6 h-full hover:shadow-lg transition-all cursor-pointer">
                      <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
                        {React.cloneElement(feature.icon, {
                          className: "h-6 w-6 text-primary",
                        })}
                      </div>
                      <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </SheetTrigger>
                  <SheetContent className="sm:max-w-[50%]">
                    <SheetHeader>
                      <SheetTitle className="flex items-center gap-2 text-2xl">
                        {React.cloneElement(feature.icon, {
                          className: "h-6 w-6 text-primary",
                        })}
                        {feature.title}
                      </SheetTitle>
                      <SheetDescription className="text-base text-foreground">
                        {feature.description}
                      </SheetDescription>
                    </SheetHeader>
                    <div className="mt-6 space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.detailedInfo}
                      </p>
                    </div>
                  </SheetContent>
                </Sheet>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <section id="classroom" className="py-20 bg-muted/50">
        <div className="section-container">
          <AnimatedElement animation="slide-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Our Engaging{" "}
                <span className="text-gradient">Learning Environment</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Explore our thoughtfully designed classroom where children learn,
                play, and grow together in a safe and stimulating space.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement animation="slide-up" delay={100}>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                <div className="h-full w-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🧸 🎨 📚</div>
                    <p className="text-lg font-medium">
                      Classroom image will appear here
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slide-up" delay={200}>
              <div className="space-y-6">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold">
                  A Space Designed for Curious Minds
                </h3>
                <p className="text-muted-foreground">
                  Our classroom is thoughtfully organized into learning centers
                  that encourage exploration, creativity, and independence.
                  Children move freely between areas for reading, art, building,
                  dramatic play, and science discovery.
                </p>
                <ul className="space-y-3">
                  {[
                    "Bright, open spaces that inspire creativity",
                    "Age-appropriate materials that promote independence",
                    "Cozy reading corners for literacy development",
                    "Dedicated areas for sensory play and exploration",
                    "Outdoor learning spaces that connect children with nature",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </>
  );
};

export default Classroom;
