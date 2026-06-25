import { useState } from "react";
import ProductCard from "./ProductCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';



interface ProductItem {
  image: string;
  name: string;
  price: string;
  originalPrice?: string;
  isSoldOut?: boolean;
  discountPercentage?: number;
}

type Props = {
  title: string;
};

// =========================
// Product Data
// =========================

const newArrivals: ProductItem[] = [
  {
    image: "/images/newarrival1.webp",
    name: "Beige Cotton Linen Co-ord Set with Vertical Stripe Print & Flowing Relaxed Silhouette | Virelle",
    price: "₹245.00",
  },
  {
    image: "/images/newarrival2.webp",
    name: "Cotton Striped Co-ord Set with Button-Down Shirt & Straight-Leg Trousers | Nyra",
    price: "₹185.00",
  },
  {
    image: "/images/newarrival3.webp",
    name: "Cotton Striped Co-ord Set with Long Sleeve Top, Waist Tie Detail & Straight-Leg Trousers | Selis",
    price: "₹185.00",
  },
  {
    image: "/images/newarrival4.webp",
    name: "Cotton Co-ord Set with Relaxed-Fit Top, Matching Pants & Side Pockets | Pure Cotton Co-ord Set",
    price: "₹162.50",
    originalPrice: "₹325.00",
    isSoldOut: true,
    discountPercentage: 50,
  },
];

const dayWears: ProductItem[] = [
  {
    image: "/images/cord1.webp",
    name: "Cotton Floral Print Maxi Dress with V-Neck, Long Sleeves & Gathered Bodice | Aveline",
    price: "₹259.09",
  },
  {
    image: "/images/cord2.webp",
    name: "Cotton Botanical Print Maxi Dress with V-Neck, Long Sleeves & Gathered Bodice | Solira",
    price: "₹259.09",
  },
  {
    image: "/images/cord3.webp",
    name: "Cotton Floral Print Maxi Dress with V-Neck, Long Sleeves & Gathered Bodice | Virelle",
    price: "₹259.09",
  },
  {
    image: "/images/cord4.webp",
    name: "Cotton Botanical Print Maxi Dress with V-Neck, Long Sleeves & Gathered Bodice | Arlena",
    price: "₹259.09",
  },
];

const suits: ProductItem[] = [
  {
    image: "/images/suit1.webp",
    name: "Pindhni Best Material Kurtis",
    price: "₹100.00",
  },
  {
    image: "/images/suit2.webp",
    name: "Pindhni Best Material Kurtis",
    price: "₹100.00",
  },
  {
    image: "/images/suit3.webp",
    name: "Pindhni Best Material Kurtis",
    price: "₹100.00",
  },
  {
    image: "/images/suit4.webp",
    name: "Pindhni Best Material Kurtis",
    price: "₹100.00",
  },
];

const bestsellers: ProductItem[] = [
  {
    image: "/images/bestseller1.webp",
    name: "Pindhni Best Material Bestsellers",
    price: "₹100.00",
  },
  {
    image: "/images/bestseller2.webp",
    name: "Pindhni Best Material Bestsellers",
    price: "₹100.00",
  },
  {
    image: "/images/bestseller3.webp",
    name: "Pindhni Best Material Bestsellers",
    price: "₹100.00",
  },
  {
    image: "/images/bestseller4.webp",
    name: "Pindhni Best Material Bestsellers",
    price: "₹100.00",
  },
];

const sectionProducts: Record<string, ProductItem[]> = {
  "NEW ARRIVALS": newArrivals,
  "DAY WEARS": dayWears,
  SUIT: suits,
  BESTSELLERS: bestsellers,
};

const titleMapping: Record<string, string> = {
  "NEW ARRIVALS": "New Arrivals",
  "DAY WEARS": "CO-ORD SETS",
  SUIT: "SUIT",
  BESTSELLERS: "BESTSELLERS",
};

const sectionTabs: Record<string, string[]> = {
  "CO-ORD SETS": [
    "Dresses",
    "Kurtas",
    "Co-ord Set",
    "Fusion wear",
    "Festive Wear",
    "Straight Kurtas",
    "A - Line Kurta",
    "Plus Size",
  ],
};

export default function ProductSection({ title }: Props) {
  const normalizedKey = title.toUpperCase();

  const productsList =
    sectionProducts[normalizedKey] || newArrivals;

  const displayTitle =
    titleMapping[normalizedKey] || title;

  const tabs =
    sectionTabs[displayTitle.toUpperCase()] || null;

  const [activeTab, setActiveTab] = useState(
    tabs ? tabs[0] : ""
  );

  return (
    <section
      style={{
        paddingTop: "50px",
        paddingBottom: "0px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "30px", // Smaller padding on mobile
          paddingRight: "30px", // Smaller padding on mobile
        }}
        className="sm:px-[25px]" // Apply original padding on small screens and up
      >
        {/* Heading */}
        <h2
          className="text-center font-light tracking-widest text-[#333333]"
          style={{
            fontSize: "14px",
            marginBottom: tabs ? "25px" : "50px",
          }}
        >
          {displayTitle}
        </h2>

        {/* Tabs */}
        {tabs && (
          <div
            className="text-[13px] text-gray-500 font-light tracking-wide"
            style={{
              marginBottom: "50px",
            }}
          >
            <Swiper
              slidesPerView={'auto'}
              centeredSlides={false}
              spaceBetween={5}
              breakpoints={{
                640: {
                  spaceBetween: 10,
                  centeredSlides: true,
                },
                768: {
                  spaceBetween: 15,
                },
                1024: {
                  spaceBetween: 20,
                },
              }}
              className="mySwiper"
            >
              {tabs.map((tab) => {
                const isActive = tab === activeTab;

                return (
                  <SwiperSlide key={tab} style={{ width: 'auto' }}>
                    <div className="flex justify-center">
                      <span
                        onClick={() => setActiveTab(tab)}
                        className={`cursor-pointer transition-colors duration-200 whitespace-nowrap px-2 ${
                          isActive
                            ? "text-black font-normal underline underline-offset-8 decoration-1"
                            : "hover:text-black"
                        }`}
                      >
                        {tab}
                      </span>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        )}

        {/* Products */}
        {/* Products (Desktop Grid) */}
        <div
          className="hidden md:grid grid-cols-2 md:grid-cols-4" // Hidden on mobile, grid on md and up
          style={{
            columnGap: "84px",
            rowGap: "104px",
          }}
        >
          {productsList.map((item, i) => (
            <ProductCard
              key={i}
              image={item.image}
              name={item.name}
              price={item.price}
              originalPrice={item.originalPrice}
              isSoldOut={item.isSoldOut}
              discountPercentage={item.discountPercentage}
            />
          ))}
        </div>

        {/* Products (Mobile Carousel) */}
        <div className="md:hidden"> {/* Visible only on mobile */}
          <Swiper
            slidesPerView={1.5}
            spaceBetween={40}
            className="mySwiper"
          >
            {productsList.map((item, i) => (
              <SwiperSlide key={i}>
                <ProductCard
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  originalPrice={item.originalPrice}
                  isSoldOut={item.isSoldOut}
                  discountPercentage={item.discountPercentage}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Button */}
       {/* View All Button */}
<div
  style={{
    marginTop: "55px",
    display: "flex",
    justifyContent: "center",
  }}
>
  <button
    style={{
      backgroundColor: "#666666",
      color: "#ffffff",
      width: "120px",
      height: "40px",
      border: "1px solid #7a7a7a",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "10px",
      letterSpacing: "3px",
      textTransform: "uppercase",
      cursor: "pointer",
      fontWeight: 400,
    }}
  >
    VIEW ALL
  </button>
</div>

{/* Full Width Divider */}
<div
  style={{
    marginTop: "80px",
    width: "100%",
    borderBottom: "1px solid #e5e5e5",
    marginLeft: "auto",
    marginRight: "auto",
  }}
/>
      </div>
    </section>
  );
}