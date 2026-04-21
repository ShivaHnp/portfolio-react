import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Personal Portfolio",
      category: "Frontend Development",
      description: "A colorful, animated portfolio built with React, Tailwind CSS, and Framer Motion.",
      image: "public/images/portfolio-img.png",
      color: "var(--color-lavender)",
    },
    {
      title: "Todo App",
      category: "JavaScript",
      description: "A fully functional todo app built with vanilla JavaScript with local storage persistence.",
      image: "public/images/Todo-app.png",
      color: "var(--color-sky)",
    },
    // {
    //   title: "Design System Library",
    //   category: "UI/UX Design",
    //   description: "A comprehensive design system featuring soft colors and modern components for seamless user experiences.",
    //   image: "https://images.unsplash.com/photo-1666693038485-b3a060067809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBjb2xvcmZ1bCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzM0Mzg5NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    //   color: "var(--color-mint)",
    // },
    // {
    //   title: "Color Palette Generator",
    //   category: "Creative Tool",
    //   description: "An interactive tool for designers to explore and create beautiful pastel color combinations.",
    //   image: "https://images.unsplash.com/photo-1766341044100-c842c518b425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBjb2xvciUyMHBhbGV0dGUlMjBhYnN0cmFjdHxlbnwxfHx8fDE3NzM0Mzg5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    //   color: "var(--color-peach)",
    // },
    // {
    //   title: "Minimalist Portfolio",
    //   category: "Personal Branding",
    //   description: "A clean, modern portfolio showcasing work with elegant typography and subtle animations.",
    //   image: "https://images.unsplash.com/photo-1622579521534-8252f7da47fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MzM3NjU0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    //   color: "var(--color-cream)",
    // },
    // {
    //   title: "Typography Showcase",
    //   category: "Visual Design",
    //   description: "Exploring the art of typography with creative layouts and harmonious color schemes.",
    //   image: "https://images.unsplash.com/photo-1523837157348-ffbdaccfc7de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHR5cG9ncmFwaHklMjBkZXNpZ258ZW58MXx8fHwxNzczNDIyNzAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    //   color: "var(--color-rose)",
    // },
  ];

  return (
    <section id="portfolio" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontWeight: "700" }}>
            My Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects that showcase my passion for colors, creativity, and user-centered design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  className="absolute inset-0"
                  style={{ background: "rgba(0,0,0,0.4)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 text-white"
                initial={{ y: 20 }}
                animate={{ y: hoveredIndex === index ? 0 : 20 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs mb-3"
                  style={{ background: project.color }}
                >
                  {project.category}
                </div>
                <h3 className="text-2xl mb-2" style={{ fontWeight: "600" }}>
                  {project.title}
                </h3>
                <p className="text-sm text-gray-200 mb-4">{project.description}</p>
                <motion.div
                  className="flex items-center gap-2 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.div>
              </motion.div>

              {/* Colored accent on top */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-2"
                style={{ background: project.color }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
