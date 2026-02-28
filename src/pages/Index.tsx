import Navbar from '@/components/wrapwala/Navbar';
import Hero from '@/components/wrapwala/Hero';
import MarqueeStrip from '@/components/wrapwala/MarqueeStrip';
import FeaturedDishes from '@/components/wrapwala/FeaturedDishes';
import GalleryBand from '@/components/wrapwala/GalleryBand';
import OurStory from '@/components/wrapwala/OurStory';
import PullQuote from '@/components/wrapwala/PullQuote';
import FullMenu from '@/components/wrapwala/FullMenu';
import FindUs from '@/components/wrapwala/FindUs';
import Reviews from '@/components/wrapwala/Reviews';
import FeedbackForm from '@/components/wrapwala/FeedbackForm';
import Subscribe from '@/components/wrapwala/Subscribe';
import Footer from '@/components/wrapwala/Footer';

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <FeaturedDishes />
      <GalleryBand />
      <OurStory />
      <PullQuote />
      <FullMenu />
      <FindUs />
      <Reviews />
      <FeedbackForm />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Index;