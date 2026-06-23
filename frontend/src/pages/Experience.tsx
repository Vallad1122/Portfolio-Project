import { motion } from "framer-motion";
import { experiences } from "../data";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
          <p className="mt-2 text-gray-500">Where I've worked.</p>
        </motion.div>

        <div className="mt-10 space-y-8 relative before:absolute before:left-5 before:top-2 before:bottom-0 before:w-px before:bg-gray-200">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="pl-14 relative"
            >
              <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-500">
                <Briefcase size={16} />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-gray-900">{exp.role}</h3>
                  <p className="text-sm text-indigo-600 font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="text-xs text-gray-400 font-medium">
                  {exp.period}
                </span>
              </div>
              <ul className="mt-3 space-y-1.5">
                {exp.description.map((item, j) => (
                  <li
                    key={j}
                    className="text-sm text-gray-500 pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
