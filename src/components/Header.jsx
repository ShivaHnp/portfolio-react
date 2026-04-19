import { motion } from 'motion/react'
import { useEffect, useState } from 'react'


export default function Header(){

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.header 
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        >
            <div className="max-w-7xl mx-auto flex item-center justify-between  rounded-full px-8 py-6"
            style={{
                    background: isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.8)",
                    boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.1)" : "0 2px 10px rgba(0,0,0,0.05)",
                }}
            >
                <span className="">Shiva Hassanpour</span>
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
                </nav>
                <motion.button
                className="hidden md:block px-6 py-2 rounded-full text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                
                style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}
                >
                    Hire Me
                </motion.button>
            </div>
        </motion.header>
    )
}