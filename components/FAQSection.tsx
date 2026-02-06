"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What trading courses do you offer?",
    answer: "We offer comprehensive trading courses covering various aspects including technical analysis, fundamental analysis, risk management, and trading psychology. Our courses are designed for both beginners and advanced traders.",
  },
  {
    question: "Are the courses suitable for beginners?",
    answer: "Yes, absolutely! We have courses specifically designed for beginners that start from the basics and gradually build up to advanced concepts. Our structured approach ensures that anyone can learn trading regardless of their background.",
  },
  {
    question: "How long do I have access to the courses?",
    answer: "Once you enroll in a course, you get lifetime access to all course materials, including any future updates. You can learn at your own pace and revisit the content whenever you need.",
  },
  {
    question: "Do you provide support during the course?",
    answer: "Yes, we provide comprehensive support through our community forum, regular Q&A sessions, and direct access to course instructors. We're committed to your success and are here to help whenever you need assistance.",
  },
  {
    question: "What makes your courses different from others?",
    answer: "Our courses are created by experienced traders who have a proven track record. We focus on practical, real-world strategies rather than just theory. Additionally, our community support and continuous updates ensure you stay current with market trends.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "We offer a satisfaction guarantee. If you're not happy with your course within the first 30 days, we'll provide a full refund. We're confident in the quality of our content and want to ensure you're completely satisfied.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-black">
            Frequently Asked <span style={{ color: "rgb(168, 110, 56)" }}>Questions</span>
          </h2>
          <p className="text-lg text-black">
            Find answers to common questions about our courses
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-black">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  style={{ color: "rgb(168, 110, 56)" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-black leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

