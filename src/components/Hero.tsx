export default function Hero() {
  return (
    <section className="relative h-[650px]">
      <img
        src="/hero.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/10" />

      <div className="absolute top-1/2 left-20 -translate-y-1/2">
        <p className="tracking-[0.5em] uppercase">
          Conscious
        </p>

        <h1 className="text-7xl font-light">
          Glamour
        </h1>

        <button className="mt-8 px-8 py-3 bg-black text-white">
          Shop Now
        </button>
      </div>
    </section>
  );
}