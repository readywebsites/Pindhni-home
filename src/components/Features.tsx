import {
  Truck,
  MessageCircleMore,
  Shield,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free shipping",
    text: "Free shipping within Dubai on orders above ₹ 200",
  },
  {
    icon: MessageCircleMore,
    title: "Customer service",
    text: "We are available from Monday to Friday to answer your questions.",
  },
  {
    icon: Shield,
    title: "Secure payment",
    text: "Your payment information is processed securely.",
  },
  {
    icon: Star,
    title: "Ethical Style",
    text: "Slow and Sustainable Fashion",
  },
];

export default function Features() {
  return (
    <section
      style={{
        background: "#f5f5f5",
        borderTop: "1px solid #e7e7e7",
        padding: "55px 0",
      }}
    >
      <div
        className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8" // Responsive grid and padding
        style={{
          // gridTemplateColumns: "repeat(4, minmax(280px, 1fr))", // Removed fixed grid
          // gap: "20px", // Handled by tailwind classes
          alignItems: "start",
          textAlign: "center",
        }}
      >
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Icon
                size={24}
                strokeWidth={1.6}
                color="#111"
                style={{
                  marginBottom: "18px",
                }}
              />

              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#111",
                  marginBottom: "12px",
                }}
              >
                {feature.title}
              </h3>

              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.7",
                  color: "#555",
                  maxWidth: "260px",
                  margin: 0,
                }}
              >
                {feature.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
