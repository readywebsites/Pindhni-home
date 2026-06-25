import { useEffect, useState } from "react";

const messages = [
  "Free Shipping on Orders Above ₹ 200 within Dubai",
  "Free shipping on orders above ₹ 300 across UAE",
];

const AnnouncementBar = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % messages.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? messages.length - 1 : prev - 1
    );
  };

  return (
    <aside className="sticky top-0 z-50 bg-[#1c1c1c] text-white">
      <div className="h-[34px] md:h-[36px] max-w-[1440px] mx-auto px-4">
        <div className="h-full flex items-center justify-center gap-4 md:gap-20">

          <button
            onClick={prev}
            className="flex items-center justify-center w-5 h-5"
            aria-label="Previous announcement"
          >
            <svg
              width="12"
              viewBox="0 0 16 18"
              fill="none"
              className="opacity-90"
            >
              <path
                d="M11 1 3 9l8 8"
                stroke="currentColor"
                strokeLinecap="square"
              />
            </svg>
          </button>

          <div className="flex-1 text-center overflow-hidden">
            <p
              className="
                text-[8px]
                md:text-[10px]
                font-medium
                tracking-[0.02em]
              "
            >
              {messages[current]}
            </p>
          </div>

          <button
            onClick={next}
            className="flex items-center justify-center w-5 h-5"
            aria-label="Next announcement"
          >
            <svg
              width="12"
              viewBox="0 0 16 18"
              fill="none"
              className="opacity-90"
            >
              <path
                d="m5 17 8-8-8-8"
                stroke="currentColor"
                strokeLinecap="square"
              />
            </svg>
          </button>

        </div>
      </div>
    </aside>
  );
};

export default AnnouncementBar;