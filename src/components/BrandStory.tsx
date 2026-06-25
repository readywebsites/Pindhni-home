const BrandStory = () => {
  return (
    <section className="py-10 bg-background-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
          {/* Image Item */}
          <div className="md:w-1/2 p-4">
            <div className="relative pb-[100%]"> {/* Aspect ratio 1:1 */}
              <img
                src="/images/GAIA_12-7-202529442.jpg"
                alt="Our Brand Story"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Item */}
          <div className="md:w-1/2 p-4 flex flex-col justify-center items-center md:items-start">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-text-primary">Our Brand Story</h2>
              <p className="text-sm text-text-primary leading-relaxed">
                The Pindhni collection is a tribute to the timeless beauty of
                traditional craftsmanship, reimagined for the modern wardrobe.
                Each piece is a harmonious blend of luxurious fabrics,
                intricate details, and contemporary silhouettes, designed to
                empower and inspire.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="/blogs/news/our-brand-story"
                className="px-6 py-3 bg-button-background text-button-text font-medium hover:bg-opacity-80 transition-colors"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;