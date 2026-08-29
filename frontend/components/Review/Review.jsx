"use client";

import { motion } from "framer-motion";
import "./Review.scss";

const reviews = {
  left: {
    image: {
      src: "/rev3.avif",
      name: "Maria Lopez",
      location: "🇺🇸 Denver, US",
      rating: "4.5",
    },
    text: "Been using Hibo for about two months now and it's genuinely changed how I think about spending. The category breakdowns are so clear and I actually look forward to checking it. Best finance app I've tried.",
    author: "Maria Lopez",
    date: "24/02/2026",
  },

  center: {
    image: {
      src: "/rev2.avif",
      name: "Taiwo Aina",
      location: "🇳🇬 Ibadan, Nigeria",
      rating: "5.0",
    },
    text: "Downloaded it on a whim and now I use it every single day. The interface is clean, nothing feels overcomplicated, and the insights it gives you are actually useful — not just numbers on a screen.",
    author: "Taiwo Aina",
    date: "24/02/2026",
  },

  right: {
    image: {
      src: "/rev1.avif",
      name: "Alex Rivera",
      location: "🇬🇧 Birmingham, UK",
      rating: "4.0",
    },
    text: "I've tried a lot of these apps and most of them either feel clunky or try to do too much. Hibo hits the right balance. Connects to all my accounts instantly and the news feed is a genuinely nice touch.",
    author: "Alex Rivera",
    date: "24/02/2026",
  },
};


/* =========================================================
   ANIMATION
========================================================= */

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


function ReviewImage({ image }) {
  return (
    <div className="review-image">
      <img src={image.src} alt={image.name} />

      <div className="review-image__overlay">
        <div className="review-image__person">
          <strong>{image.name}</strong>
          <span>{image.location}</span>
        </div>

        <div className="review-image__rating">
          <strong>{image.rating}</strong>
          <span>RATING</span>
        </div>
      </div>
    </div>
  );
}


function ReviewCard({ review }) {
  return (
    <article className="review-card">
      <div className="review-card__quote">
        <span>„</span>
      </div>

      <p className="review-card__text">
        {review.text}
      </p>

      <div className="review-card__footer">
        <span className="review-card__author">
          {review.author}
        </span>

        <span className="review-card__date">
          {review.date}
        </span>
      </div>
    </article>
  );
}


export default function Review() {
  return (
    <section className="reviews">
      <div className="reviews__container">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          className="reviews__header"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >

          <motion.div
            className="reviews__heading"
            variants={revealFromBottom}
          >
            <h2>
              What People
              <br />
              Say About Us.
            </h2>

            <p>
              Thousands of people already use
              Hibo to take control of their finances.
            </p>
          </motion.div>


          <motion.div
            className="reviews__app"
            variants={revealFromBottom}
          >

            <div className="reviews__rating">
              <strong>4.5</strong>

              <div className="reviews__stars">
                ★★★★★
              </div>

              <span>20.4k Installs</span>
            </div>

            <a
              href="#download"
              className="reviews__download"
            >
              <span className="reviews__apple">●</span>
              <span>Get</span>
            </a>

          </motion.div>

        </motion.div>


        {/* =================================================
            REVIEWS
        ================================================= */}

        <motion.div
          className="reviews__columns"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
        >

          {/* =========================
              LEFT COLUMN
          ========================= */}

          <motion.div
            className="reviews__column"
            variants={revealFromBottom}
          >
            <ReviewImage
              image={reviews.left.image}
            />

            <ReviewCard
              review={reviews.left}
            />
          </motion.div>


          {/* =========================
              CENTER COLUMN
          ========================= */}

          <motion.div
            className="reviews__column"
            variants={revealFromBottom}
          >
            <ReviewCard
              review={reviews.center}
            />

            <ReviewImage
              image={reviews.center.image}
            />
          </motion.div>


          {/* =========================
              RIGHT COLUMN
          ========================= */}

          <motion.div
            className="reviews__column"
            variants={revealFromBottom}
          >
            <ReviewImage
              image={reviews.right.image}
            />

            <ReviewCard
              review={reviews.right}
            />
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}