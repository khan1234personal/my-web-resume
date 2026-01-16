import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Bilim Technologies",
    location: "Aurangabad",
    period: "April 2025 – Present",
    current: true,
    points: [
      "Developing and maintaining company websites, dashboards, and internal tools",
      "Building responsive UI and backend modules using Laravel, PHP, and JavaScript",
      "Optimizing website performance and improving loading speed for users",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Bilim Technologies",
    location: "Aurangabad",
    period: "May 2024 – November 2024",
    current: false,
    points: [
      "Maintained core web services and added new feature modules",
      "Worked on UI updates, API integration, and testing workflows",
      "Wrote clean, reusable code to improve development efficiency",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Iotee Solution",
    location: "Remote",
    period: "July 2024 – August 2024",
    current: false,
    points: [
      "Developed frontend components using Quasar and Vue.js",
      "Contributed to a real-time Vehicle Tracking System with live map updates",
      "Built responsive UI screens and assisted with API integrations",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Work Experience</h2>
            <p className="section-subheading mx-auto">
              My professional journey in software development
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%] md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10 ${
                    exp.current ? "timeline-dot animate-glow-pulse" : "timeline-dot opacity-60"
                  }`}
                />

                {/* Card */}
                <div
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all">
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.current && (
                        <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                    
                    <div className={`flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}>
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} className="text-primary" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} className="text-primary" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} className="text-primary" />
                        {exp.period}
                      </span>
                    </div>

                    <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2"
                          style={{ justifyContent: index % 2 === 0 ? "flex-end" : "flex-start" }}
                        >
                          {index % 2 !== 0 && (
                            <span className="text-primary mt-1">▹</span>
                          )}
                          <span>{point}</span>
                          {index % 2 === 0 && (
                            <span className="text-primary mt-1">◃</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;