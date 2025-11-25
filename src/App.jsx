import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Industries from "./pages/Services"
import ServiceDetail from "./pages/ServiceDetail"
import CaseStudies from "./pages/CaseStudies"
import CaseStudyDetail from "./pages/CaseStudyDetail"
import SuccessStories from "./pages/SuccessStories"
import SuccessStoryDetail from "./pages/SuccessStoryDetail"
import Pricing from "./pages/Pricing"
import Contact from "./pages/Contact"
import Clients from "./pages/Clients"

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-detail/:id" element={<ServiceDetail />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/success-stories/:id" element={<SuccessStoryDetail />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
      <Footer />
    </Router>
  )
}
