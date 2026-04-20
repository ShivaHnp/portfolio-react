import { motion, useInView } from "motion/react"
import { section } from "motion/react-client"
import { useRef } from "react"
import { Heart, Palette, Lightbulb } from 'lucide-react'

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, {once:true, margin: "-100px"})

    const values = [
        {
            icon: Heart,
            title: "Following My Heart",
            description: "I made the bold decision to transition from urban planning to web design, guided by the passion and creativity.",
            color: "var(--color-rose)",
        },
        {
            icon: Palette,
            title: "Obsessed with Colors",
            description: "Soft, pastel colors are my  canvas. I believe the right color palette can evoke emotions and create memorable experiences.",
            color: "var(--color-lavender",
        },
        {
            icon: Lightbulb,
            title: "Creative Solutions",
            description: "My background in urban planning taught me to think holistically and solve complex problems with innovative design.",
            color: "var(--color-mint)",
        },
    ]

    return (
        <section className="py-32 px-6" ref={ref}>
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial= {{ opacity:0, y: 30}}
                    animate = {isInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.8}}
                    className="text-center mb-20"
                >
                    
                    <h2 className="text-5xl md:text-6xl mb-6 " style={{ fontWeight: "700"}}>
                        About Me
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From blueprint to pixels, my journey has been about creating spaces-physical and digital-that inspires and delight.
                    </p>
                </motion.div>
                {/* value parts after about me  */}
                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all"
                            style={{ background: "white" }}
                        >
                            <motion.div
                                className="opacity-60 w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                                style={{ background: value.color}}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                <value.icon className="w-8 h-8 text-gray-700" />
                            </motion.div>
                            <h3 className="text-2xl mb-4">{value.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}