import { useEffect, useState } from 'react';
import SmoothScroll from 'smooth-scroll';
import { Team } from '../components/Team';
import { About } from '../components/about';
import { Contact } from '../components/contact';
import { Features } from '../components/features';
import { Gallery } from '../components/gallery';
import { Hero } from '../components/hero';
import { Services } from '../components/services';
import { Testimonials } from '../components/testimonials';
import { AppDataType } from '../data/DataType';
import JsonDataEn from "../data/en/data.json";
import JsonDataVi from "../data/vi/data.json";
import i18n from '../i18n';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function Home() {
  const [landingPageData, setLandingPageData] = useState<AppDataType | null>(null);
  useEffect(() => {
    switch (i18n.language) {
      case "vi":
        setLandingPageData(JsonDataVi);
        break;

      default:
        setLandingPageData(JsonDataEn);

    }
  }, [i18n.language]);

  return (
    <>
      <Hero data={landingPageData?.Header} />
      <Features data={landingPageData?.Features} />
      <About data={landingPageData?.About} />
      <Services data={landingPageData?.Services} />
      <Gallery data={landingPageData?.Gallery} />
      <Testimonials data={landingPageData?.Testimonials} />
      <Team data={landingPageData?.Team} />
      <Contact data={landingPageData?.Contact} />
    </>
  )
}

export default Home
