import Blogs from "../Blogs/Blogs";
import CompanySection from "./CompanySection";
import FAQs from "./FAQs";
import HeroSaction from "./HeroSaction";
import NewsLetter from "./NewsLetter";
import Pricing from "./Pricing";
import Service from "./Service";
import Tastimonials from "./Tastimonials";
import TemeSection from "./TemeSection";
import ToolsSection from "./ToolsSection";

const Home = () => {
  return (
    <>
      <HeroSaction></HeroSaction>
      <ToolsSection></ToolsSection>
      <CompanySection />
      <Service />
      <Tastimonials />
      <Blogs />
      <TemeSection />
      <Pricing />
      <FAQs />
      <NewsLetter />
    </>
  );
};
export default Home;
