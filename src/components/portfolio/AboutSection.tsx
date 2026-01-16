import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Palette, Server } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend",
    description: "Vue.js, React, Tailwind CSS",
  },
  {
    icon: Server,
    title: "Backend",
    description: "Laravel, PHP, REST APIs",
  },
  {
    icon: Database,
    title: "Database",
    description: "MySQL, PostgreSQL, SQLite",
  },
  {
    icon: Palette,
    title: "Data Viz",
    description: "Power BI, Tableau",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">About Me</h2>
            <p className="section-subheading mx-auto">
              Passionate about creating impactful digital experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a <span className="text-foreground font-medium">Full Stack Developer</span> currently 
                working at <span className="text-primary">Bilim Technologies</span> in Aurangabad. 
                I specialize in building responsive, user-friendly web applications and internal tools.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My journey began with a strong foundation in computer science, followed by 
                hands-on experience through internships and professional roles. I've worked on 
                diverse projects ranging from company websites and admin dashboards to 
                real-time vehicle tracking systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing my <span className="text-foreground font-medium">Bachelor of Science 
                in Computer Science</span> while working professionally, I'm constantly 
                learning and adapting to new technologies. My goal is to create efficient, 
                scalable solutions that make a real difference.
              </p>
            </motion.div>

            {/* Highlights grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;