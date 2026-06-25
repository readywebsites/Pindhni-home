import { Camera, Music, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-[#f5f5f5] border-t border-[#e7e7e7] py-8 md:py-10" // Responsive padding
    >
      <div
        className="max-w-[1800px] mx-auto px-4 sm:px-8 md:px-10" // Responsive padding
      >
        <div
          className="grid grid-cols-1 md:grid-cols-[300px_180px_180px_180px] gap-8 md:gap-10 justify-center md:justify-between items-start" // Responsive grid and gap
        >
          {/* Newsletter */}
          <div className="w-full md:w-[300px]"> {/* Responsive width */}
            <h4
              style={{
                fontSize: "12px",
                fontWeight: 600,
                marginBottom: "18px",
              }}
            >
              Get on the list
            </h4>

            <p
              style={{
                fontSize: "12px",
                lineHeight: "1.7",
                color: "#555",
                maxWidth: "280px",
                marginBottom: "22px",
              }}
            >
              Perks include <strong>10% off</strong> your first online order.
              Be the first to know about new collections, store launches,
              sales, and much more!
            </p>

            <input
              type="email"
              placeholder="E-mail"
              style={{
                width: "100%", // Responsive width
                maxWidth: "260px", // Max width for larger screens
                height: "42px",
                border: "1px solid #d8d8d8",
                background: "#f5f5f5",
                padding: "0 15px",
                fontSize: "13px",
                outline: "none",
              }}
            />

            <div style={{ marginTop: "18px" }}>
              <button
                style={{
                  width: "100%", // Responsive width
                  maxWidth: "140px", // Max width for larger screens
                  height: "42px",
                  background: "#666",
                  color: "#fff",
                  border: "none",
                  fontSize: "11px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                Subscribe
              </button>
            </div>

            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "32px",
                color: "#666",
              }}
            >
              <Camera size={20} strokeWidth={1.6} />
              <Music size={20} strokeWidth={1.6} />
              <MessageCircle size={20} strokeWidth={1.6} />
            </div>

            <div
              style={{
                marginTop: "30px",
                fontSize: "11px",
                color: "#666",
                lineHeight: "1.8",
              }}
            >
              <div>© Pindhni •</div>
              <div>Designed by Biz499 Marketing Agency</div>
            </div>
          </div>

          {/* Policies */}
          <div className="w-full md:w-auto"> {/* Responsive width */}
            <h4
              style={{
                fontSize: "12px",
                fontWeight: 600,
                marginBottom: "18px",
              }}
            >
              Our Policies
            </h4>

            {[
              "Search",
              "Privacy Policy",
              "Terms of Service",
              "Refund Policy",
            ].map((item) => (
              <div
                key={item}
                style={{
                  marginBottom: "14px",
                  fontSize: "12px",
                  color: "#555",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-auto"> {/* Responsive width */}
            <h4
              style={{
                fontSize: "12px",
                fontWeight: 600,
                marginBottom: "18px",
              }}
            >
              Quick Links
            </h4>

            {[
              "Home page",
              "About",
              "Contact",
              "Partners",
            ].map((item) => (
              <div
                key={item}
                style={{
                  marginBottom: "14px",
                  fontSize: "12px",
                  color: "#555",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Collections */}
          <div className="w-full md:w-auto"> {/* Responsive width */}
            <h4
              style={{
                fontSize: "12px",
                fontWeight: 600,
                marginBottom: "18px",
              }}
            >
              Shop By Collection
            </h4>

            {[
              "Pindhni Women",
              "Pindhni Blings",
              "Pindhni Strings",
              "Pindhni Sole",
              "Pindhni Home",
            ].map((item) => (
              <div
                key={item}
                style={{
                  marginBottom: "14px",
                  fontSize: "12px",
                  color: "#555",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
