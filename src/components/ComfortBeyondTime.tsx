import comfortImg from "/images/bestseller2.webp";
import hourglassImg from "/images/banner4.webp";

export default function ComfortBeyondTime() {
  return (
    <section className="py-10 md:py-20 border-b border-[#e5e5e5] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-10">
        <div className="flex flex-col md:flex-row items-center md:justify-center gap-8 md:gap-10">
          {/* Column 1: Images */}
          <div className="flex items-center justify-center">
              <div className="w-[60%] md:w-[400px]">
                <img
                  src={comfortImg}
                  alt="Comfort Beyond Time"
                  className="w-full block"
                />
              </div>
              <div className="w-[50%] md:w-[320px] -ml-10 md:-ml-16">
                <img
                  src={hourglassImg}
                  alt="Hourglass"
                  className="w-full block"
                />
              </div>
          </div>

          {/* Column 2: Text */}
          <div className="w-full md:w-[300px]">
            <p
              style={{
                fontSize: "9px",
                fontWeight: 600,
                color: "#55657F",
                marginBottom: "10px",
              }}
            >
              <b>Pindhni</b>
            </p>

            <h2
              style={{
                fontSize: "24px",
                fontWeight: 400,
                lineHeight: "1.3",
                color: "#55657F",
                marginBottom: "20px",
              }}
            >
              Comfort beyond Time
            </h2>

            <p
              style={{
                fontSize: "10px",
                lineHeight: "1.9",
                color: "#55657F",
                fontWeight: 300,
              }}
            >
              Comfort beyond time embodies our commitment to creating
              clothing that feels like home, no matter the era. Our
              timeless designs and premium fabrics offer unparalleled
              comfort that stands the test of time, ensuring you always
              feel your best, now and forever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
