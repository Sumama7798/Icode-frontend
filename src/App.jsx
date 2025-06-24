import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage"
import AboutPage from "./pages/aboutPage/AboutPage"
import BlogPage from "./pages/blogPage/BlogPage"
import ServicesPage from "./pages/servicesPage/ServicesPage"
import ContatPage from "./pages/contactPage/ContactPage"


import Navbar from "./components/Navbar"
import BlogContents from "./pageContents/blogPageContents/BlogContents/BlogContents"


function App() {
  

  return (
    <div className="relative min-h-screen bg-[rgb(26,26,26)] text-white  overflow-hidden">
      
      
    <div className="  ">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        

        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogContents />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContatPage />} />
      </Routes>
    </div>
      
    </div>
  )
}

export default App
