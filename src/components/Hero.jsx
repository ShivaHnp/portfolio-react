import { motion } from 'motion/react'
import { Sparkles, ArrowDown } from 'lucide-react'



export default function Hero() {
    return (
        // starting with animated circles
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
            <motion.div
                className='absolute top-20 left-10 w-64 h-64 rounded-full opacity-50'
                style= {{ background: "var(--color-lavender)" }}
                animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 right-20 w-80 h-80 rounded-full opacity-50"
                style={{ background: "var(--color-mint)" }}
                animate={{ y: [0, -40, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full opacity-50"
                style={{ background: "var(--color-peach)" }}
                animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-3 left-1/4 w-56 h-56 rounded-full opacity-50"
                style={{ background: "var(--color-rose)" }}
                animate={{ x: [0, -20, 0], y: [0, 20, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* details and titles */}
            <div className="relative z-10 text-center max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                    style={{ background: "var(--color-cream)" }}
                >
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm">Urban Planner → Frontend Developer</span>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-6"
                    style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", lineHeight: "1.1", fontWeight: "700" }}
                >
                    Designing with{" "}
                    <span style={{
                        background: "linear-gradient(135deg, var(--color-lavender), var(--color-rose))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}>
                        Colors
                    </span>
                    <br /> & Creativity
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl mb-12 text-gray-600 max-w-3xl mx-auto"
                >
                    I followed my heart from urban planning to frontend development. 
                    Now I craft colorful, engaging digital experiences that captivate and inspire.
                </motion.p>

                {/* work and get in touch buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-5 justify-center items-center"
                >
                    <motion.button
                        onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behaviour: 'smooth' })}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-full text-white shadow-lg hover:shadow-xl transition-shadow"
                        style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}
                    >
                        View My Work
                    </motion.button>

                    <motion.a
                        href='CV-Hassanpour-Shiva.pdf'
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-colors"
                    >
                        Download CV
                    </motion.a>
                </motion.div>
            </div>
            {/* Arrow */}
             <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ArrowDown className="w-6 h-6 text-gray-400" />
            </motion.div>
        </section>
    )
}