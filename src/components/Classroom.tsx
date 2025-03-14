
import React from "react";
import AnimatedElement from "./AnimatedElement";
import { Sparkles, Heart, Brain, Users } from "lucide-react";

const Classroom = () => {
  const features = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Creative Expression",
      description:
        "Art, music, and dramatic play that nurtures imagination and self-expression.",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Cognitive Development",
      description:
        "Age-appropriate activities that build problem-solving and critical thinking skills.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Emotional Growth",
      description:
        "Supporting children to understand and express their feelings in healthy ways.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Social Skills",
      description:
        "Learning to share, collaborate, and build meaningful friendships.",
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
                <div className="glass-card rounded-xl p-6 h-full hover:shadow-lg transition-all">
                  <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
                    {React.cloneElement(feature.icon, {
                      className: "h-6 w-6 text-primary",
                    })}
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
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
