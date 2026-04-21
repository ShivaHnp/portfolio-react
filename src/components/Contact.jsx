import { motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'
import { Mail, Send } from 'lucide-react'

export default function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    // submit handling
    const handleSubmit = () => {
        alert("Thank you for your message! I'll get back to you soon.")
        setFormData()
    }

    return (
        <section id="contact" className="py-32 px-6 relative overflow-hidden" ref={ref}>
            <motion.div
                className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
                style={{ background: "var(--color-mint)" }}
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 20, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
                style={{ background: "var(--color-rose)" }}
                animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
                transition={{ duration: 25, repeat: Infinity }}
            />
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl mb-6" style={{ fontWeight: "700" }}>
                        Let's Create Together
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        I'm currently looking for new opportunities as a frontend developer. Let's connect and create something amazing!
                    </p>
                </motion.div>
                {/* form */}
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div 
                        initial= {{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{duration: 0.8}}
                        className='space-y-6'
                    >
                        <div>
                            <div>
                                <label className="block mb-2 text-gray-700">Your Name</label>
                                <input 
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-purple-400 outline-none transition-colors"
                                    placeholder="Shiva Hassanpour"
                                />

                            </div>
                            <div>
                                <label className="block mb-2 text-gray-700">Your Email</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-purple-400 outline-none transition-colors"
                                    placeholder="shiva@example.com"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-gray-700">Your Message</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={6}
                                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-purple-400 outline-none transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                        </div>
                        <motion.button
                            onClick={handleSubmit}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full px-8 py-4 rounded-2xl text-white flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                            style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}
                        >
                            <span>Send Message</span>
                            <Send className="w-5 h-5" />
                        </motion.button>
                    </motion.div>



                    {/* 3 get in touch buttons: linkedIn, Email and Github */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="p-8 rounded-3xl" style={{ background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                            <h3 className="text-2xl mb-6" style={{ fontWeight: "600" }}>
                                Get in Touch
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                I'm passionate about creating beautiful, functional designs that make a difference. Whether you have a project in mind or just want to chat, I'd love to hear from you!
                            </p>

                            <div className='space-y-4 mt-8'>
                                <motion.a 
                                    href="mailto:shivahp75@gmail.com"
                                    whileHover={{x: 10}}
                                    className='flex items-center gap-4 p-4 rounded-2xl'
                                    style={{background: "var(--color-peach)"}}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/50 flex items-center justify-center">
                                        <Mail className='w-6 h-6 text-gray-700'/>
                                    </div>
                                    <span className='text-gray-800' style={{fontWeight: "500"}}>Email</span>

                                </motion.a>


                                <motion.a 
                                    href="https://linkedin.com/in/shiva-hassanpour-8335081ba"
                                    whileHover={{x: 10}}
                                    className='flex items-center gap-4 p-4 rounded-2xl'
                                    style={{background: "var(--color-sky)"}}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/50 flex items-center justify-center">
                                        <span className="font-bold text-gray-700">in</span>
                                    </div>
                                    <span className='text-gray-800' style={{fontWeight: "500"}}>LinkedIn</span>

                                </motion.a>
                                <motion.a 
                                    href="https://linkedin.com/in/shiva-hassanpour-8335081ba"
                                    whileHover={{x: 10}}
                                    className='flex items-center gap-4 p-4 rounded-2xl '
                                    style={{background: "var(--color-lavender)"}}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/50 flex items-center justify-center">
                                        <span className="font-bold text-gray-700">gh</span>
                                    </div>
                                    <span className='text-gray-800' style={{fontWeight: "500"}}>Github</span>

                                </motion.a>
                            </div>



                        </div>
                        <motion.div
                            className="p-8 rounded-3xl text-center"
                            style={{ background: "linear-gradient(135deg, var(--color-lavender), var(--color-mint))" }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <p className="text-xl" style={{ fontWeight: "600" }}>
                                Available for freelance work and full-time positions
                            </p>
                            <p className="text-gray-700 mt-2">Let's make something beautiful together! ✨</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

        </section>
    )
}