import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Info from "@/components/Info";
import TechB from "@/components/TechB";
import TrustWorthyLLMs from "@/components/TrustWorthyLLMs";
import Header from "../components/Header";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";

function page() {
  return (
    <div className="tb-primary text-white">
      <Header />
      <main>
        <Hero />
        <TechB />
        <Info />
        <HowItWorks />
        {/* <WhyUs /> */}
        <TrustWorthyLLMs />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
}

export default page;
