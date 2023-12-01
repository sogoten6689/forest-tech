import { useEffect, useState } from 'react';
import './App.css'
import { Navigation } from './components/navigation'
import { About } from './components/about';
import { AppDataType } from './data/DataType';
import JsonData from "./data/data.json";

import SmoothScroll from 'smooth-scroll';
import { Header } from './components/header';
import { Features } from './components/features';
import { Services } from './components/services';
import { Gallery } from './components/gallery';
import { Testimonials } from './components/testimonials';
import { Team } from './components/Team';
import { Contact } from './components/contact';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  const [landingPageData, setLandingPageData] = useState<AppDataType | null>(null);
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);


  return (
    <>
      <Navigation />
      <Header data={landingPageData?.Header} />
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

export default App
