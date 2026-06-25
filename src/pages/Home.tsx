import BrandStory from "../components/BrandStory";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import ProductSection from "../components/ProductSection";
import InfluencerSlider from "../components/InfluencerSlider";
import ComfortBeyondTime from "../components/ComfortBeyondTime";
import Newsletter from "../components/Newsletter";
import Blogs from "../components/Blogs";
import Stores from "../components/Stores";
import Features from "../components/Features";
import Footer from "../components/Footer";
import AnnouncementBar from "../components/AnnouncementBar";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main id="main" className="anchor max-w-full overflow-x-hidden">
        <div className="w-full">
          <HeroSlider />
          <ProductSection title="NEW ARRIVALS" />
          {/* <BrandStory /> */}
          <ProductSection title="DAY WEARS" />
          <ProductSection title="SUIT" />
          <ProductSection title="BESTSELLERS" />

          {/* <InfluencerSlider /> */}
            <ComfortBeyondTime />
          
          <Newsletter />
          <Blogs />
          <Stores />
          <Features />
        </div>
      </main>
      <Footer />
    </>
  );
}