import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RecentPost from "./components/RecentPost";
import Featurework from "./components/FeatureWork";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="mx-auto w-[1440px] h-[2453px] bg-[#CFA6A61C]">
   <Navbar />
   <Hero />
   <RecentPost />
   <Featurework/>
   <Footer />
  </div>
  
  
  
  );
}
