"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "./Faq.scss";
import { Call } from "iconsax-react";
import { ArrowUp2, ArrowDown2 } from "iconsax-react";

const faqItems = [
  {
    number: "01.",
    question: "Is it safe to connect my bank accounts to Hibo?",
    answer:
      "Yes. Hibo uses open banking — a regulated framework that lets you securely share your financial data without ever giving us your banking credentials. You stay in control and can disconnect at any time.",
  },
  {
    number: "02.",
    question: "How do i start using your finance analytics platform",
    answer:
      "Getting started is simple. Create your Hibo account, connect your financial accounts securely, and you can immediately begin viewing your financial activity and insights.",
  },
  {
    number: "03.",
    question:
      "What help can you offer in terms of advance loans, mortgage and pensions",
    answer:
      "Hibo helps you understand your financial position and provides useful insights to help you make better financial decisions.",
  },
  {
    number: "04.",
    question: "How long does it take to set up my Hibo account?",
    answer:
      "Setting up your Hibo account only takes a few minutes. Once your account is created, you can connect your financial accounts and start using the platform.",
  },
];

// =========================================================
// ANIMATION
// =========================================================

const revealFromBottom = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// =========================================================
// FAQ ITEM
// =========================================================

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      className={`faq__item ${isOpen ? "faq__item--active" : ""}`}
      variants={revealFromBottom}
    >
      <button
        type="button"
        className="faq__trigger"
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
      >
        <div className="faq__trigger-content">
          <span className="faq__number">{item.number}</span>

          <h3>{item.question}</h3>
        </div>

        <span className="faq__icon">
          {isOpen ? (
            <ArrowUp2 size="16" variant="Linear" color="#000000"/>
          ) : (
            <ArrowDown2 size="16" variant="Linear" color="#000000"/>
          )}
        </span>
      </button>

      <div
        className="faq__answer"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
        }}
      >
        <div className="faq__answer-inner">
          <p>{item.answer}</p>
        </div>
      </div>
    </motion.div>
  );
}

// =========================================================
// FAQ
// =========================================================

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section className="faq">
      <div className="faq__container">
        <div className="faq__content">
          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <motion.div
            className="faq__left"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={staggerContainer}
          >
            <motion.div className="faq__heading" variants={revealFromBottom}>
              <h2>
                Frequently Asked
                <br />
                Questions.
              </h2>
            </motion.div>

            {/* CONTACT CARD */}
            <motion.div className="faq__contact" variants={revealFromBottom}>
              {/* LEFT */}
              <div className="faq__contact-left">
                <div className="faq__contact-icon">
                  <Call size="22" color="#0087ca" variant="Linear" />
                </div>

                <h3>
                  Book a
                  <br />
                  Demo
                </h3>
              </div>

              {/* RIGHT */}
              <div className="faq__contact-right">
                <p>
                  Send an email and we'll get back to you as soon as possible.
                </p>

                <a href="#contact" className="faq__contact-button">
                  Contact us
                </a>
              </div>
            </motion.div>
          </motion.div>
          {/* =================================================
              RIGHT SIDE — ACCORDION
          ================================================= */}

          <motion.div
            className="faq__accordion"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.12,
            }}
            variants={staggerContainer}
          >
            {faqItems.map((item, index) => (
              <FAQItem
                key={item.number}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={handleToggle}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
