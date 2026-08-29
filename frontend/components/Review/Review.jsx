import "./Review.scss";

const reviews = {
  left: {
    image: {
      src: "/review-maria.png",
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
      src: "/review-taiwo.png",
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
      src: "/review-alex.png",
      name: "Alex Rivera",
      location: "🇬🇧 Birmingham, UK",
      rating: "4.0",
    },
    text: "I've tried a lot of these apps and most of them either feel clunky or try to do too much. Hibo hits the right balance. Connects to all my accounts instantly and the news feed is a genuinely nice touch.",
    author: "Alex Rivera",
    date: "24/02/2026",
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

      <p className="review-card__text">{review.text}</p>

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

        {/* =========================
            HEADER
        ========================= */}
        <div className="reviews__header">

          <div className="reviews__heading">
            <h2>
              What People
              <br />
              Say About Us.
            </h2>

            <p>
              Thousands of people already use
              <br />
              Hibo to take control of their finances.
            </p>
          </div>

          <div className="reviews__app">

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

          </div>

        </div>


        {/* =========================
            REVIEWS
        ========================= */}
        <div className="reviews__columns">

          {/* LEFT */}
          <div className="reviews__column">
            <ReviewImage image={reviews.left.image} />

            <ReviewCard
              review={reviews.left}
            />
          </div>


          {/* CENTER */}
          <div className="reviews__column">
            <ReviewCard
              review={reviews.center}
            />

            <ReviewImage image={reviews.center.image} />
          </div>


          {/* RIGHT */}
          <div className="reviews__column">
            <ReviewImage image={reviews.right.image} />

            <ReviewCard
              review={reviews.right}
            />
          </div>

        </div>

      </div>
    </section>
  );
}