import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "Company Website Revamp",
    company: "Bilim Technologies",
    description: "Rebuilt and optimized a responsive company website with improved UI and performance.",
    technologies: ["Laravel", "Tailwind CSS", "JavaScript", "PHP", "Blade"],
    featured: true,
  },
  {
    title: "Internal Dashboard System",
    company: "Bilim Technologies",
    description: "Developed admin dashboard with CRUD operations and role-based login for internal management.",
    technologies: ["Laravel", "PHP", "MySQL", "REST API"],
    featured: true,
  },
  {
    title: "Vehicle Tracking System",
    company: "Iotee Solution",
    description: "Developed a real-time tracking dashboard with map integration and live updates.",
    technologies: ["Vue.js", "Quasar Framework", "API Integration"],
    featured: true,
  },
  {
    title: "UrduBlog Platform",
    company: "Bilim Technologies",
    description: "Created a bilingual blog platform supporting Urdu & English content with complete admin dashboard.",
    technologies: ["PHP", "HTML/CSS", "SQLite", "Bootstrap"],
    featured: false,
  },
  {
    title: "CampusSync",
    company: "Bilim Technologies",
    description: "Maintained and enhanced website and desktop ERP system for campus management.",
    technologies: ["Laravel", "Tauri", "Rust", "PostgreSQL", "React Native"],
    featured: false,
  },
  {
    title: "E-Commerce Platform",
    company: "DSD Course Project",
    description: "Developed a complete e-commerce project with frontend, backend, and database integration.",
    technologies: ["AngularJS", "MySQL", "PHP", "Apache Server"],
    featured: false,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Featured Projects</h2>
            <p className="section-subheading mx-auto">
              Some of the notable projects I've worked on
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="project-card"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Folder className="text-primary" size={24} />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                  </motion.button>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-primary mb-3">{project.company}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs code-font text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))
                  }
                </div>
              </motion.div>
            ))
            }
          </div>

          {/* Other Projects */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold text-foreground">Other Projects</h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass-card p-5 rounded-lg hover:border-primary/50 transition-all group"
              >
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs text-primary mb-2">{project.company}</p>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs code-font text-muted-foreground">
                      {tech}
                    </span>
                  ))
                  }
                </div>
              </motion.div>
            ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
