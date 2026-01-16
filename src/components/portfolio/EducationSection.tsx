import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Dr. Babasaheb Ambedkar Marathwada University",
    location: "Aurangabad",
    period: "2023 – Present",
    current: true,
    details: "Relevant Courses: Diploma in Software Development (DSD), Data Science, PHP Development",
  },
  {
    degree: "HSC Board",
    institution: "Government College of Arts & Science",
    location: "Aurangabad",
    period: "2020 – 2021",
    current: false,
    details: null,
  },
  {
    degree: "SSC Board",
    institution: "Scholars' English School",
    location: "Aurangabad",
    period: "2018",
    current: false,
    details: null,
  },
];

const certifications = [
  {
    title: "Diploma in Software Development (DSD)",
    issuer: "Academy of Information Technology",
    date: "Dec 2024",
    description: "Practical full-stack development program focused on PHP, MySQL, frontend frameworks.",
  },
  {
    title: "PHP Development Certificate",
    issuer: "Academy of Information Technology",
    date: "April 2024",
    description: "Hands-on training covering PHP fundamentals, backend logic, and database operations.",
  },
  {
    title: "Data Science (Pursuing)",
    issuer: "Academy of Information Technology",
    date: "2024 – 2025",
    description: "Advanced analytics, data visualization, and machine learning fundamentals.",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Education & Certifications</h2>
            <p className="section-subheading mx-auto">
              My academic background and professional certifications
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-2 text-xl font-bold text-foreground mb-6"
              >
                <GraduationCap className="text-primary" size={24} />
                Education
              </motion.h3>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="glass-card p-5 rounded-xl hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                      {edu.current && (
                        <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-primary text-sm mb-1">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm mb-2">
                      {edu.location} • {edu.period}
                    </p>
                    {edu.details && (
                      <p className="text-muted-foreground text-sm">{edu.details}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-2 text-xl font-bold text-foreground mb-6"
              >
                <Award className="text-primary" size={24} />
                Certifications & Courses
              </motion.h3>

              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="glass-card p-5 rounded-xl hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="text-primary" size={16} />
                      <h4 className="font-semibold text-foreground">{cert.title}</h4>
                    </div>
                    <p className="text-primary text-sm mb-1">{cert.issuer}</p>
                    <p className="text-muted-foreground text-xs mb-2">{cert.date}</p>
                    <p className="text-muted-foreground text-sm">{cert.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;