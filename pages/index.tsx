import Head from 'next/head';
import Footer from '@/components/footer';
import Navbar from '@/components/Navbar/Navbar';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import BottomSection from '@/components/BottomSection/BottomSection';
import Products from '@/components/Products';
import ProductsMovile from '@/components/ProductsMovile';
export default function Home() {
  return (
    <>
      <Head>
        <title>GOBEYOND</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <HeroBanner />
        <Products />
        <ProductsMovile />
        <BottomSection />
        <Footer />
      </div>
    </>
  );
}
