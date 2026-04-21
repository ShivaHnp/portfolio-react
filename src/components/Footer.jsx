import { motion } from "motion/react";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6" style={{ background: "var(--color-lavender)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-700 flex items-center justify-center gap-2">
            Designed with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
            >
              <Heart className="w-5 h-5 fill-red-400 text-red-400" />
            </motion.span>{" "}
            and passion for colors
          </p>
          <p className="text-gray-600 mt-2">© 2026 Shiva Hassanpour. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
