"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "./Process.scss";

const processItems = [
  {
    number: "01.",
    title: "Bury Confidentially",
    description:
      "Intuitive tools that get out of your way, so you can focus on what actually matters. and financial data that help you stand up to competition",
  },
  {
    number: "02.",
    title: "Stay Upwork",
    description:
      "Money meant for important purposes should be kept with a company that is trust worthy and reputable.",
  },
  {
    number: "03.",
    title: "Be there",
    description:
      "Geographical barrier is a joke, we help you send money to clinets, friends and families to anywhere around the globe.",
  },
  {
    number: "04.",
    title: "Zero Charges",
    description:
      "Unlike other fintech companies we do not charge you on every transaction, we help you do the work at zero cost",
  },
];

/* =========================================================
   ANIMATION SETTINGS
========================================================= */

const revealFromBottom = {
  hidden: {
    opacity: 0,
    y: 70,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Process() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section className="process" id="process">
      <div className="process__container">

        {/* =========================
            HEADER
        ========================= */}

        <motion.div
          className="process__header"
          variants={revealFromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <h2>How it Works.</h2>
        </motion.div>


        {/* =========================
            CONTENT
        ========================= */}

        <motion.div
          className="process__content"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >

          {/* =========================
              ACCORDION
          ========================= */}

          <motion.div
            className="process__accordion"
            variants={revealFromBottom}
          >
            {processItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  className={`process__item ${
                    isOpen ? "process__item--active" : ""
                  }`}
                  key={item.number}
                >

                  <button
                    className="process__trigger"
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                  >

                    <div className="process__trigger-content">

                      <span className="process__number">
                        {item.number}
                      </span>

                      <h3>{item.title}</h3>

                    </div>

                    <span className="process__icon">
                      {isOpen ? "−" : "+"}
                    </span>

                  </button>


                  <div
                    className="process__answer"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="process__answer-inner">
                      <p>{item.description}</p>
                    </div>
                  </div>

                </div>
              );
            })}
          </motion.div>


          {/* =========================
              IMAGE
          ========================= */}

          <motion.div
            className="process__visual"
            variants={revealFromBottom}
          >
            <img
              src="/process.png"
              alt="Hibo mobile application"
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}