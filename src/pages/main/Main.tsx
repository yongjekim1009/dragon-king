import HeroSection from "./sections/HeroSection";
import SearchBar from "./../../components/common/search-bar/SearchBar";
import BasicSpacer from "./../../components/common/spacer/BasicSpacer";
import MainBanner from "./sections/MainBanner";
import PortfolioSection from "./sections/PortfolioSection";

export default function Main() {
  return (
    <main>
      <BasicSpacer />
      <HeroSection />
      <SearchBar />
      <MainBanner />
      <BasicSpacer />
      <PortfolioSection />
      <BasicSpacer />
    </main>
  );
}
