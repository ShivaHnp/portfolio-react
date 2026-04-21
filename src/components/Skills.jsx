import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";






export default function Skills () {

    const ref = useRef(null)
    const isInView = useInView (ref, { once:true, margin: "-100px" })


    const skills = [
        {name: "HTML/CSS", level: 90, color: "var(--color-mint)"},
        {name: "JavaScript", level: 72, color: "var(--color-rose)"},
        {name: "React", level: 50, color: "var(--color-sky)"},
        {name: "Responsive Design", level: 90, color: "var(--color-peach)"},
        {name: "Color Theory", level: 94, color: "var(--color-cream)"},
        {name: "TailwindCSS/ Bootstrap", level: 83, color: "var(--color-lavender)"},
    ]

    return(
        <section className="py-32 px-6" ref = {ref}>
            <div className="max-w-6xl mx-auto">
                {/* description */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl mb-6" style={{ fontWeight: "700" }}>
                        Skills & Expertise
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A blend of technical skills and creative vision, refined through passion and continuous learning.
                    </p>
                </div>
                {/* progress bar */}
                <div className="grid md:grid-cols-2 gap-y-8 gap-x-8">
                    {skills.map((skill) => (
                        <div key= {skill.name}>

                            {/* name and percentage */}
                            <div className="flex justify-between mb-3">
                                <span className="text-lg" style= {{ fontWeight: "600" }}>
                                    {skill.name}
                                </span>
                                <span className="text-gray-500">{skill.level}%</span>
                            </div>
                            {/* gray background */}
                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                <motion.div 
                                className="h-full rounded-full"
                                style= {{ background: skill.color }}
                                initial={{ width: 0 }}
                                animate={isInView ? { width: `${skill.level}%` } : {}}
                                transition={{ duration: 1, delay: 0.2 }}
                                >

                                </motion.div>
                            </div>
                        </div>
                    ))

                    }
                </div>
                {/* numbers */}
                <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
                  {[
                    { label: "Projects Completed", value: "2+" },
                    { label: "Months of Learning", value: "14+" },
                    { label: "Cups of Coffee", value: "∞" },
                  ].map((stat) => (
                    <motion.div
                      key={stat.label}
                      whileHover={{ scale: 1.05 }}
                      className="p-8 rounded-3xl"
                      style={{ background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
                    >
                      <div className="text-5xl mb-3" style={{ fontWeight: "700", color: "#667eea" }}>
                        {stat.value}
                      </div>
                      <div className="text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
            </div>
        </section>
    )
}