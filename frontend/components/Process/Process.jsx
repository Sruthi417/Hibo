"use client";

import { useState } from "react";
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

export default function Process() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section className="process">
      <div className="process__container">
        {/* =========================
            HEADER
        ========================= */}
        <div className="process__header">
          <h2>How it Works.</h2>
        </div>

        {/* =========================
            CONTENT
        ========================= */}
        <div className="process__content">
          {/* ACCORDION */}
          <div className="process__accordion">
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
                      <span className="process__number">{item.number}</span>
                     
                      <h3>{item.title}</h3>
                    </div>

                    <span className="process__icon">{isOpen ? "−" : "+"}</span>
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
          </div>

          {/* =========================
              IMAGE
          ========================= */}
          <div className="process__visual">
            <img src="/process.png" alt="Hibo mobile application" />
          </div>
        </div>
      </div>
    </section>
  );
}
