import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <p className="text-indigo-600 font-medium mb-3">Hi, I'm</p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
          Your Name
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-500 font-medium">
          Software Engineer
        </p>
        <p className="mt-6 text-base text-gray-500 leading-relaxed">
          I build reliable, scalable software — from APIs and microservices to
          polished user interfaces. Passionate about clean code, developer
          experience, and shipping things that matter.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-400 transition"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:you@email.com"
            className="p-2.5 rounded-full border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-400 transition"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <motion.button
          onClick={() =>
            document
              .getElementById("skills")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-14 flex items-center gap-2 mx-auto text-sm text-gray-400 hover:text-gray-700 transition"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <ArrowDown size={16} />
          Scroll down
        </motion.button>
      </motion.div>
    </section>
  );
}
