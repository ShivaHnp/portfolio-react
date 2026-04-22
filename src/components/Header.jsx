import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {

    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <motion.header
                className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div
                    className="max-w-7xl mx-auto flex items-center justify-between rounded-full px-8 py-4"
                    style={{
                        background: isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.8)",
                        boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.1)" : "0 2px 10px rgba(0,0,0,0.05)",
                    }}
                >
                    <span className="text-2xl font-bold">Shiva Hassanpour</span>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a 
                            href="#" 
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                            >Home
                            </a>
                        <a 
                            href="#about" 
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                            onClick={() => document.querySelector('#about')?.scrollIntoView({ behaviour: 'smooth' })}
                            >About
                            </a>
                        <a 
                            href="#projects" 
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                            onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behaviour: 'smooth' })}
                            >Projects
                            </a>
                        <a 
                            href="#contact" 
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behaviour: 'smooth' })}
                            >Contact
                            </a>
                    </nav>

                    <motion.button
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:block px-6 py-2 rounded-full text-white bg-gradient-to-br from-[#667eea] to-[#764ba2]"
                    >
                        Hire Me
                    </motion.button>

                    {/* Mobile Hamburger Button */}
                    <motion.button
                        className="block md:hidden"
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </motion.button>

                </div>
            </motion.header>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed top-24 left-6 right-6 z-40 md:hidden rounded-3xl p-6 bg-white shadow-lg"
                >
                    <nav className="flex flex-col gap-4">
                        <a href="#" className="px-4 py-3 rounded-2xl hover:bg-gray-100 transition-colors">Home</a>
                        <a href="#about" className="px-4 py-3 rounded-2xl hover:bg-gray-100 transition-colors">About</a>
                        <a href="#projects" className="px-4 py-3 rounded-2xl hover:bg-gray-100 transition-colors">Projects</a>
                        <a href="#contact" className="px-4 py-3 rounded-2xl hover:bg-gray-100 transition-colors">Contact</a>
                        <motion.button
                            whileTap={{ scale: 0.98 }}
                            className="px-6 py-3 rounded-2xl text-white text-center mt-2 bg-gradient-to-br from-[#667eea] to-[#764ba2]"
                        >
                            Hire Me
                        </motion.button>
                    </nav>
                </motion.div>
            )}
        </>
    )
}