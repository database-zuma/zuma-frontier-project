"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the Frontier Project?",
    answer: "The Frontier Project is Zuma Indonesia's initiative to integrate AI across all operations. We're building intelligent systems, automating workflows, and creating AI assistants to transform how we work.",
  },
  {
    question: "Who can access the AI tools?",
    answer: "Currently, the AI tools and applications are available to Zuma Indonesia employees. Each department has tailored solutions designed for their specific workflows and needs.",
  },
  {
    question: "How does this benefit our day-to-day work?",
    answer: "AI handles repetitive tasks, provides instant insights from data, and assists with complex decisions. This means less manual work, fewer errors, and more time for strategic thinking.",
  },
  {
    question: "Is our data secure?",
    answer: "Absolutely. All AI systems operate within Zuma's secure infrastructure. We use enterprise-grade security, data stays within our controlled environment, and all access is logged and monitored.",
  },
  {
    question: "When will new features be available?",
    answer: "We're rolling out capabilities in phases. The Branch Super App is already live. Warehouse and AI assistants are in development. Check the Roadmap section for detailed timelines.",
  },
  {
    question: "How can my department get involved?",
    answer: "Contact the Continuous Improvement Team through the form below or reach out directly. We're always looking for departments ready to pilot new AI solutions.",
  },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-white/10 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="text-base font-normal text-white pr-4 group-hover:text-[#00E273] transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-white/50 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-sm text-white/50 font-light leading-relaxed pb-5">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs text-[#00E273] uppercase tracking-[0.2em] mb-4 font-light">FAQ</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-6 font-mono">
            common
            <br />
            <span className="text-[#00E273]">questions</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/40 max-w-xl mx-auto font-light">
            Everything you need to know about the Frontier Project.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
