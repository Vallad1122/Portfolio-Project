import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    // Replace with your EmailJS integration:
    // await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);
    console.log("Form data:", data);
    await new Promise((r) => setTimeout(r, 800)); // simulate async
    reset();
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900">Contact</h2>
          <p className="mt-2 text-gray-500">
            Have an opportunity or just want to say hi? I'd love to hear from
            you.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 space-y-5"
          noValidate
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-400 transition ${
                errors.name ? "border-red-400" : "border-gray-200"
              }`}
              placeholder="Jane Doe"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-400 transition ${
                errors.email ? "border-red-400" : "border-gray-200"
              }`}
              placeholder="jane@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-400 resize-none transition ${
                errors.message ? "border-red-400" : "border-gray-200"
              }`}
              placeholder="Your message..."
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-medium text-sm rounded-xl py-3 hover:bg-indigo-700 disabled:opacity-60 transition"
          >
            <Send size={15} />
            {isSubmitting ? "Sending…" : "Send Message"}
          </button>

          {isSubmitSuccessful && (
            <p className="text-center text-sm text-green-600 font-medium">
              Message sent! I'll get back to you soon.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
