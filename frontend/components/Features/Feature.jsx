"use client";

import { motion } from "framer-motion";
import "./Feature.scss";

const features = [
  {
    id: 1,
    title: "Lightning Fast Accommodation and Support.",
    description:
      "Designed for speed at every level. Open your workspace and get to work in under a second.",
    image: "/feature1.avif",
    imagePosition: "bottom",
    className: "feature-card--large",
  },
  {
    id: 2,
    title: "100+ Integrations",
    description:
      "Connect to the tools you already use. Slack, Notion, GitHub, Linear, and more.",
    image: "/feature2.avif",
    imagePosition: "top",
    className: "feature-card--tall",
  },
  {
    id: 3,
    title: "Smart Analytics",
    description:
      "Understand your productivity patterns with beautiful, actionable insights built in.",
    image: "/feature3.avif",
    imagePosition: "bottom",
    className: "feature-card--large",
  },
  {
    id: 4,
    title: "Built for Your Goals",
    description:
      "Set meaningful goals and keep track of the progress that matters most to you.",
    image: "/feature4.avif",
    imagePosition: "top",
    className: "feature-card--small",
  },
  {
    id: 5,
    title: "Simple Team Management",
    description:
      "Bring your team together with simple tools designed to keep everyone aligned.",
    image: "/feature5.png",
    imagePosition: "bottom",
    className: "feature-card--medium",
  },
  {
    id: 6,
    title: "Everything in One Place",
    description:
      "Keep your work, insights, and important information organized in one simple space.",
    image: "/feature6.avif",
    imagePosition: "top",
    className: "feature-card--small",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 22,
    scaleY: 0.85,
    transformOrigin: "top",
  },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageVariants = {
  top: {
    hidden: {
      opacity: 0,
      y: -70,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },

  bottom: {
    hidden: {
      opacity: 0,
      y: 70,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
};

export default function Feature() {
  return (
    <section className="features" id="feature">
      <div className="features__container">

        {/* =========================
            SECTION HEADER
        ========================= */}

        <motion.div
          className="features__header"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={containerVariants}
        >
          <motion.h2 variants={textVariants}>
            Built for the Way
            
            Modern Teams Work.
          </motion.h2>

          <motion.p variants={textVariants}>
            Intuitive tools that get out of your way, so
            
            you can focus on what actually matters.
          </motion.p>
        </motion.div>

        {/* =========================
            FEATURE GRID
        ========================= */}

        <motion.div
          className="features__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={containerVariants}
        >
          {features.map((feature) => (
            <motion.article
              key={feature.id}
              className={`feature-card ${feature.className}`}
              variants={cardVariants}
            >

              {/* CONTENT */}

              <motion.div
                className="feature-card__content"
                variants={textVariants}
              >
                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </motion.div>

              {/* IMAGE */}

              <motion.div
                className={`feature-card__visual feature-card__visual--${feature.imagePosition}`}
                variants={imageVariants[feature.imagePosition]}
              >
                <img
                  src={feature.image}
                  alt=""
                  loading="lazy"
                />
              </motion.div>

            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}