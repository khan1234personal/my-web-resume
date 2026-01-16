import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Folder } from "lucide-react";

const projects = [
  // ===== FEATURED PROJECTS =====
  {
    title: "CampusSync Website",
    company: "Bilim Technologies",
    description:
      "Education & academic management platform built with Laravel and PostgreSQL, handling campus operations, students, and administration.",
    technologies: ["Laravel", "PHP", "PostgreSQL", "Blade", "Tailwind CSS"],
    featured: true,
    link: "https://www.campussync.in/",
  },
  {
    title: "CampusSync Desktop Application",
    company: "Bilim Technologies",
    description:
      "Cross-platform desktop ERP application for campus management. Currently working on this system as an employee at Bilim Technologies.",
    technologies: ["Tauri", "Rust", "React", "Laravel", "PostgreSQL"],
    featured: true,
    link: "https://www.campussync.in/",
  },
  {
    title: "Zinfotec E-Commerce Platform",
    company: "Intern Project (Mentored)",
    description:
      "Full-stack e-commerce platform with React frontend and Laravel backend. Implemented coupon system, email notifications, and complete product & order flow. Built under my guidance by interns.",
    technologies: ["React", "Laravel", "PHP", "SQLite", "Mail Integration"],
    featured: true,
    link: "https://zinfotec.com/",
  },

  // ===== OTHER PROJECTS =====
  {
    title: "Vehicle Tracking System",
    company: "Iotee Solution (Internship)",
    description:
      "Real-time vehicle tracking dashboard with live updates and map integration, developed during internship.",
    technologies: ["Vue.js", "Quasar", "API Integration"],
    featured: false,
  },
  {
    title: "Supremo Grippings",
    company: "Industrial Client",
    description:
      "Industrial tools website built as a static site with PHP backend for contact form email integration and client email management.",
    technologies: ["HTML", "CSS", "PHP"],
    featured: false,
    link: "https://supremogrippings.com/",
  },
  {
    title: "Hotel Great Annapurna",
    company: "Hospitality Client",
    description:
      "Hotel website with room booking system built using Lumen framework and SQLite database.",
    technologies: ["Lumen", "PHP", "SQLite"],
    featured: false,
    link: "https://hotelgreatannapurna.com/",
  },
  {
    title: "Education Expo",
    company: "Event Platform",
    description:
      "Expo and exhibition website developed in React with Laravel backend. Worked in a team focusing on performance and maintenance.",
    technologies: ["React", "Laravel", "Team Collaboration"],
    featured: false,
    link: "https://educationexpo.org/",
  },
  {
    title: "Rabita Pilgrimage",
    company: "Travel & Tours",
    description:
      "Travel booking platform built in Laravel with SQLite. Includes custom package builder allowing users to create or choose predefined travel packages.",
    technologies: ["Laravel", "PHP", "SQLite"],
    featured: false,
    link: "https://www.rabitapilgrimage.com/",
  },
  {
    title: "Jet Four Securities",
    company: "Security Services",
    description:
      "Corporate security services website with PHP-based contact and email integration system.",
    technologies: ["PHP", "HTML", "CSS", "Mail Integration"],
    featured: false,
    link: "https://www.jetfoursecurities.com/",
  },
  {
    title: "Minds in Motion Foundation",
    company: "NGO",
    description:
      "NGO website developed in Laravel with multiple pages and functional enhancements.",
    technologies: ["Laravel", "PHP", "Blade"],
    featured: false,
    link: "https://mindsinmotion.in/",
  },
  {
    title: "UrduBlog Platform",
    company: "Bilim Technologies (Internship)",
    description:
      "Bilingual Urdu & English blog platform built using Lumen during internship. Included admin dashboard and content management.",
    technologies: ["Lumen", "PHP", "SQLite", "Bootstrap"],
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
                className="project-card group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Folder className="text-primary" size={24} />
                  </div>
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
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
                    <span key={tech} className="text-xs code-font text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
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
                <div className="flex items-start justify-between mb-2">
  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
    {project.title}
  </h4>

  {project.link && (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      className="text-muted-foreground hover:text-primary transition-colors"
    >
      <ExternalLink size={16} />
    </motion.a>
  )}
</div>
                <p className="text-xs text-primary mb-2">{project.company}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs code-font text-muted-foreground">
                      {tech}
                    </span>
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

export default ProjectsSection;
