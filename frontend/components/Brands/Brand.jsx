import "./Brand.scss";

const brands = [
  {
    name: "Jura",
    src: "/brand1.png",
  },
  {
    name: "Unify",
    src: "/brand2.png",
  },
  {
    name: "Logic",
    src: "/brand3.png",
  },
  {
    name: "Pera",
    src: "/brand4.png",
  },
  {
    name: "Bamboo",
    src: "brand5.png",
  },
];

export default function Brands() {
  // Duplicate the logos so the marquee can loop seamlessly.
  const marqueeBrands = [...brands, ...brands];

  return (
    <section className="brands">
      <div className="brands__container">
        <p className="brands__eyebrow">
          Trusted by Teams at
        </p>

        <div className="brands__marquee">
          <div className="brands__track">
            {marqueeBrands.map((brand, index) => (
              <div
                className="brands__item"
                key={`${brand.name}-${index}`}
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="brands__logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}