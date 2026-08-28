import "./Hero.scss";

const stars = [
  { left: "5%", top: "12%", delay: "0.2s", duration: "0.4s", size: 1.5 },
  { left: "9%", top: "28%", delay: "0.8s", duration: "0.8s", size: 2 },
  { left: "14%", top: "42%", delay: "0.3s", duration: "0.2s", size: 1.5 },
  { left: "19%", top: "18%", delay: "1.1s", duration: "0.6s", size: 2 },
  { left: "24%", top: "34%", delay: "0.5s", duration: "0.3s", size: 1.5 },
  { left: "29%", top: "12%", delay: "1.7s", duration: "0.5s", size: 2 },
  { left: "34%", top: "26%", delay: "0.4s", duration: "0.1s", size: 1.5 },
  { left: "39%", top: "44%", delay: "1.3s", duration: "0.7s", size: 2 },
  { left: "44%", top: "17%", delay: "0.7s", duration: "0.4s", size: 1.5 },
  { left: "49%", top: "31%", delay: "1.8s", duration: "0.2s", size: 2 },

  { left: "54%", top: "10%", delay: "0.2s", duration: "0.6s", size: 1.5 },
  { left: "59%", top: "25%", delay: "1s", duration: "0.3s", size: 2 },
  { left: "64%", top: "40%", delay: "0.6s", duration: "0.5s", size: 1.5 },
  { left: "69%", top: "16%", delay: "1.5s", duration: "0.1s", size: 2 },
  { left: "74%", top: "34%", delay: "0.3s", duration: "0.7s", size: 1.5 },
  { left: "79%", top: "12%", delay: "1.2s", duration: "0.4s", size: 2 },
  { left: "84%", top: "27%", delay: "0.5s", duration: "0.2s", size: 1.5 },
  { left: "89%", top: "43%", delay: "1.6s", duration: "0.5s", size: 2 },
  { left: "94%", top: "19%", delay: "0.8s", duration: "0.3s", size: 1.5 },

  { left: "7%", top: "55%", delay: "1.4s", duration: "0.6s", size: 1.5 },
  { left: "16%", top: "65%", delay: "0.4s", duration: "0.2s", size: 2 },
  { left: "28%", top: "58%", delay: "1.8s", duration: "0.5s", size: 1.5 },
  { left: "40%", top: "63%", delay: "0.6s", duration: "0.3s", size: 2 },
  { left: "19%", top: "55%", delay: "1.1s", duration: "0.7s", size: 1.5 },
  { left: "21%", top: "65%", delay: "0.2s", duration: "0.4s", size: 2 },
  { left: "28%", top: "57%", delay: "1.5s", duration: "0.2s", size: 1.5 },
  { left: "31%", top: "64%", delay: "0.7s", duration: "0.6s", size: 2 },
];

const shootingStars = [
  {
    left: "12%",
    top: "18%",
    delay: "0s",
    duration: "14s",
  },
  {
    left: "38%",
    top: "10%",
    delay: "3s",
    duration: "16s",
  },
  {
    left: "22%",
    top: "22%",
    delay: "7s",
    duration: "15s",
  },
  {
    left: "78%",
    top: "14%",
    delay: "11s",
    duration: "17s",
  },
  {
    left: "90%",
    top: "12%",
    delay: "15s",
    duration: "14s",
  },
];
export default function Hero() {
  return (
    <section className="hero">
      {/* Sky background */}
      <div className="hero__background" />

      {/* Moving grain */}
      <div className="hero__grain" />

      {/* Blinking stars */}
      <div className="hero__stars">
        {stars.map((star, index) => (
          <span
            key={index}
            className="hero__star"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      <div className="hero__shooting-stars">
        {shootingStars.map((star, index) => (
          <span
            key={index}
            className="hero__shooting-star"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="hero__content">
        <p className="hero__eyebrow">YOUR MONEY. YOUR WAY.</p>

        <h1 className="hero__title">
          Think Money
          <br />
          Differently.
        </h1>

        <p className="hero__subtitle">
        Track, understand, and grow your finances with tools built for the way people actually live — not the way banks want you to.
        </p>

        <div className="hero__buttons">
          <a href="#get-started" className="hero__button hero__button--primary">
            Download App
          </a>

          <a
            href="#learn-more"
            className="hero__button hero__button--secondary"
          >
            Learn more
          </a>
        </div>
      </div>

     {/* =========================================================
    MOBILE PHONE
========================================================= */}

<div className="hero__phone">
  <div className="hero__device">

    {/* Screen area */}
    <div className="hero__screen">
      <video
        className="hero__video"
        src="/hero-mobile.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>

    {/* Phone outline */}
    <img
      className="hero__mobile-frame"
      src="/hero-mob.avif"
      alt=""
      aria-hidden="true"
    />

  </div>
</div>
    </section>
  );
}
