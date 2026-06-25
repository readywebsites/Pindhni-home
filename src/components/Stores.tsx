import { useState } from "react";

const locations = [
  {
    title: "Mumbai Festival City Mall",
    lines: [
      "The Studio, Mumbai Festival City Mall",
      "Level 1 Mumbai Festival City",
      "Maharastra",
      "India",
    ],
  },
  {
    title: "Surat City Mall",
    lines: [
      "Pindhni",
      "Surat City Mall",
      "Gujarat",
      "India",
    ],
  },
];

export default function Stores() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="py-10 md:py-20 text-center" // Responsive padding
    >
      <h2
        style={{
          fontSize: "16px",
          fontWeight: 400,
          letterSpacing: "1px",
          color: "#555",
          marginBottom: "55px",
        }}
      >
        STORES
      </h2>

      {/* Tabs */}
      <div
        className="w-full max-w-[360px] mx-auto mb-[45px] flex border-b border-[#e6e6e6]" // Responsive width and margin
      >
        {locations.map((location, index) => (
          <button
            key={location.title}
            onClick={() => setActive(index)}
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              paddingBottom: "14px",
              cursor: "pointer",
              color: active === index ? "#555" : "#a3a3a3",
              fontSize: "14px",
              borderBottom:
                active === index
                  ? "1px solid #555"
                  : "1px solid transparent",
              marginBottom: "-1px",
            }}
          >
            {location.title}
          </button>
        ))}
      </div>

      {/* Address */}
      <div
        style={{
          color: "#555",
          fontSize: "15px",
          lineHeight: "1.8",
        }}
      >
        {locations[active].lines.map((line) => (
          <div key={line}>{line}</div>
        ))}

        <a
          href="#"
          style={{
            display: "inline-block",
            marginTop: "28px",
            color: "#555",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
            fontSize: "15px",
          }}
        >
          View On Google Map
        </a>
      </div>
    </section>
  );
}
