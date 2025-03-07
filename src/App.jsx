
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './component/header-component/header-component.jsx'
import HeroSection from './component/header-component/hero-component/hero-component.jsx'
import { AboutUs } from './component/about-component/about-component'
import { Portfolio } from './component/portfolio-section/portfolio-section'
import { Service } from './component/service-component/service-component'
import { Gallery } from './component/gallary-component/gallary-component'
import { ContactUs } from './component/contact-component/contact-component'
import { Footer } from './component/footer-component/footer-component'
import { AboutUsPage } from './component/about-component/about-details'
import { Testimonials } from './component/testimonial-component/testimonial-section'
import { WhatsAppButton } from './component/whatsapp-component/whatapp-component'


function HomePage() {
  return (
    <>
      <HeroSection />
      <Service />
      <AboutUs />
      <Service />
      <Portfolio />
      <Gallery />

    </>
  );
}

function App() {


  return (

    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/services" element={<Service/>} />
        <Route path="/gallary" element={<Gallery/>} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/testimonials" element={<Testimonials />} />


      </Routes>
      <Footer />
      <WhatsAppButton/>
    </>

  )
}

export default App
