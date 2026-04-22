import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

export default function Journey() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const milestones = [
    {
        year: "2021",
        title: "BSc in Urban Planning",
        description: "Graduated from Azad University, Iran.",
        color: "var(--color-mint)",
    },
    {
        year: "2023",
        title: "Erasmus Program",
        description: "Studied at University of Amsterdam — my first international experience.",
        color: "var(--color-lavender)",
    },
    {
        year: "2024",
        title: "Research Intern",
        description: "Worked at TAU Lab, Politecnico di Milano — data processing and mapping with QGIS.",
        color: "var(--color-peach)",
    },
    {
        year: "2025",
        title: "MSc, Politecnico di Milano",
        description: "Graduated with a Master's in Urban Planning — and decided to follow my heart into code.",
        color: "var(--color-rose)",
    },
    {
        year: "2025",
        title: "Started Frontend Development",
        description: "Self-taught HTML, CSS, JavaScript, and React. Built my first real projects.",
        color: "var(--color-sky)",
    },
    {
        year: "2026",
        title: "Building & Growing",
        description: "Actively building projects with React, Tailwind, and Framer Motion. Open to opportunities. 🚀",
        color: "var(--color-cream)",
    },
]

    return (
        <section className="py-32 px-6" ref={ref}>
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl mb-6" style={{ fontWeight: "700" }}>
                        My Journey
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From designing cities to crafting digital experiences — here's how it all happened.
                    </p>
                </motion.div>

                <div className="relative">
                    

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={milestone.year + milestone.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="p-6 rounded-3xl shadow-lg transition-all"
                                style={{ background: "white" }}
                            >
                                <div className="inline-block px-3 py-1 rounded-full text-sm mb-3" style={{ background: milestone.color }}>
                                    {milestone.year}
                                </div>
                                <h3 className="text-xl mb-2" style={{ fontWeight: "600" }}>{milestone.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>

            </div>
            
        </section>
    )
}