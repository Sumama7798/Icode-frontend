import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage"
import AboutPage from "./pages/aboutPage/AboutPage"
import CaseStudtyPage from "./pages/caseStudyPage/CaseStudyPage"
import ServicesPage from "./pages/servicesPage/ServicesPage"
import ContatPage from "./pages/contactPage/ContactPage"


import Navbar from "./components/Navbar"
import CaseStudyContents from "./pageContents/caseStudyPageContents/caseStudyContents/CaseStudyContents"
import ServicesContent from "./pageContents/servicesPageContents/ServicesContent"


function App() {
  

  return (
    <div className="relative min-h-screen bg-white text-black  overflow-hidden">
      
      
    <div className="  ">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        

        <Route path="/about" element={<AboutPage />} />
        <Route path="/case-studies" element={<CaseStudtyPage />} />
        <Route path="/case-studies/:id" element={<CaseStudyContents />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServicesContent />} />
        <Route path="/contact" element={<ContatPage />} />
      </Routes>
    </div>
      
    </div>
  )
}

export default App
