type Props = {
  image: string;
  name: string;
  price: string;
  originalPrice?: string;
  isSoldOut?: boolean;
  discountPercentage?: number;
};

export default function ProductCard({
  image,
  name,
  price,
  originalPrice,
  isSoldOut,
  discountPercentage,
}: Props) {
  return (
    <div className="group cursor-pointer w-full text-center">

      {/* Product Image */}
      <div 
        className="relative overflow-hidden bg-[#f7f7f7]"
        style={{ width: '100%', aspectRatio: '5/8' }}
      >

        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="w-full h-full transition-all duration-700 group-hover:scale-[1.03]"
          aria-label={name}
        >
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">

          {isSoldOut && (
            <span className="bg-[#efefef] text-[#555] text-[11px] font-medium px-3 py-1 uppercase tracking-wide">
              Sold Out
            </span>
          )}

          {discountPercentage && (
            <span className="bg-[#e53935] text-white text-[11px] font-semibold px-3 py-1 uppercase tracking-wide">
              Save {discountPercentage}%
            </span>
          )}

        </div>

        {/* Hover Plus */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">

          <div className="bg-white w-10 h-10 flex items-center justify-center shadow-md hover:bg-black hover:text-white transition-colors duration-200">

            <span className="text-2xl font-light leading-none mb-0.5">
              +
            </span>

          </div>

        </div>

      </div>

      {/* Product Name */}
      <h3 className="mt-7 text-[10px] text-[#555555] leading-[1.7] font-normal transition-colors duration-300 group-hover:text-black line-clamp-2">

        {name}

      </h3>

      {/* Price */}
      <div className="mt-5 flex items-center justify-center gap-3 text-[10px]">

        {originalPrice ? (
          <>
            <span className="text-[#e53935] font-medium">
              {price}
            </span>

            <span className="text-[#9a9a9a] line-through font-light">
              {originalPrice}
            </span>
          </>
        ) : (
          <span className="text-[#8a8a8a] font-light">
            {price}
          </span>
        )}

      </div>

    </div>
  );
}