import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const blogs = [
  {
    image: "/images/cord3.webp",
    title: "Best Handmade Clothing Collections for Stylish Women",
  },
  {
    image: "/images/Untitled_design_4_a90fed18-e72a-417c-94e7-2d2b4f4bcd73.png",
    title: "Printed Co-Ord Sets For Women: Style Guide",
  },
  {
    image: "/images/newarrival3.webp",
    title: "Handcrafted Fashion Trends To Watch",
  },
];

export default function Blogs() {
  return (
    <section
      style={{
        padding: "70px 0",
        borderBottom: "1px solid #e7e7e7",
      }}
    >
      <div
        className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-10" // Responsive padding
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "50px",
            fontWeight: 400,
            color: "#555",
          }}
        >
          Blogs
        </h2>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Swiper
            slidesPerView={1.5}
            spaceBetween={30}
            className="mySwiper"
          >
            {blogs.map((blog, index) => (
              <SwiperSlide key={index}>
                <div>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    style={{
                      width: "100%",
                      display: "block",
                      marginBottom: "20px",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "#555",
                      marginBottom: "15px",
                    }}
                  >
                    {blog.title}
                  </h3>
                  <button
                    style={{
                      background: "#5c5c5c",
                      color: "#fff",
                      border: "none",
                      padding: "12px 25px",
                      fontSize: "11px",
                      letterSpacing: "2px",
                    }}
                  >
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div
          className="hidden md:grid grid-cols-3 gap-8"
        >
          {blogs.map((blog, index) => (
            <div key={index}>
              <img
                src={blog.image}
                alt={blog.title}
                style={{
                  width: "100%",
                  display: "block",
                  marginBottom: "20px",
                }}
              />

              <h3
                style={{
                  fontSize: "15px",
                  lineHeight: "1.6",
                  color: "#555",
                  marginBottom: "15px",
                }}
              >
                {blog.title}
              </h3>

              <button
                style={{
                  background: "#5c5c5c",
                  color: "#fff",
                  border: "none",
                  padding: "12px 25px",
                  fontSize: "11px",
                  letterSpacing: "2px",
                }}
              >
                READ MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
