import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "C++", "Java", "Python", "PHP", "JavaScript", "Rust"],
  },
  {
    title: "Frontend",
    skills: ["Vue.js", "React", "Preact", "AngularJS", "Bootstrap", "Tailwind CSS", "Material UI", "Quasar"],
  },
  {
    title: "Backend & Frameworks",
    skills: ["Laravel", "Lumen", "ASP.NET MVC", "Tauri", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MS-SQL", "MS-Access", "SQLite"],
  },
  {
    title: "Data Science & Analytics",
    skills: ["Power BI", "Tableau", "Advanced Excel", "Data Visualization", "Dashboard Creation"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub", "VS Code", "VSCodium", "Apache Server"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Skills & Technologies</h2>
            <p className="section-subheading mx-auto">
              Technologies I've been working with
            </p>
          </motion.div>

          <div className="space-y-10">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-primary code-font text-sm">{'<'}</span>
                  {category.title}
                  <span className="text-primary code-font text-sm">{'/>'}</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="skill-tag"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;