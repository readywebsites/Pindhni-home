export default function InfluencerSlider() {
  return (
    <section className="py-24 bg-[#fafafa]">

      <h2 className="text-center text-3xl mb-12">
        Influencers
      </h2>

      <div className="grid md:grid-cols-5 gap-6 max-w-[1400px] mx-auto px-8">

        {[1,2,3,4,5].map((item) => (
          <img
            key={item}
            src={`/influencer${item}.jpg`}
            className="rounded-xl"
          />
        ))}

      </div>

    </section>
  );
}