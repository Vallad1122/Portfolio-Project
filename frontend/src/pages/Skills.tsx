import { motion } from "framer-motion";
import { skills } from "../data";

const CATEGORIES = ["frontend", "backend", "tools"] as const;

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools & DevOps",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
          <p className="mt-2 text-gray-500">Technologies I work with.</p>
        </motion.div>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 p-6"
            >
              <h3 className="font-semibold text-gray-700 mb-4">
                {categoryLabels[cat]}
              </h3>
              <ul className="space-y-3">
                {skills
                  .filter((s) => s.category === cat)
                  .map((skill) => (
                    <li key={skill.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-indigo-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                        />
                      </div>
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
