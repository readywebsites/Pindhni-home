export default function Newsletter() {
  return (
    <section
      style={{
        background: "#1f1f1f",
        color: "#fff",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: "12px",
          letterSpacing: "2px",
          marginBottom: "8px",
          color: "#bdbdbd",
        }}
      >
        Stay updated
      </p>

      <h2
        style={{
          fontSize: "28px",
          fontWeight: 400,
          marginBottom: "15px",
        }}
      >
        Newsletter
      </h2>

      <p
        style={{
          maxWidth: "650px",
          margin: "0 auto 30px",
          fontSize: "14px",
          color: "#cfcfcf",
        }}
      >
        Subscribe to our newsletter and receive updates on new arrivals,
        collections and exclusive offers.
      </p>

      <form
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="email"
          placeholder="Email address"
          style={{
            width: "100%",
            maxWidth: "300px",
            height: "45px",
            padding: "0 15px",
            border: "none",
          }}
        />

        <button
          style={{
            background: "#5c5c5c",
            color: "#fff",
            border: "none",
            padding: "0 30px",
            height: "45px",
            letterSpacing: "2px",
            cursor: "pointer",
          }}
        >
          SUBSCRIBE
        </button>
      </form>
    </section>
  );
}