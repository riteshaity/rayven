import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ApplicationDev from './pages/ApplicationDev'
import Analytics from './pages/Analytics'
import Outsourcing from './pages/Outsourcing'
import StrategicConsulting from './pages/StrategicConsulting'
import Flex from './pages/Flex'
import SapGrc from './pages/SapGrc'
import BigData from './pages/BigData'
import SapHana from './pages/SapHana'
import ItInfra from './pages/ItInfra'
import Mobility from './pages/Mobility'
import Sap from './pages/Sap'
import SuccessFactors from './pages/SuccessFactors'
import SapMii from './pages/SapMii'
import Careers from './pages/Careers'
import Mission from './pages/Mission'
import Partners from './pages/Partners'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/application-development" element={<ApplicationDev />} />
          <Route path="/analytics-consulting" element={<Analytics />} />
          <Route path="/outsourcing-managed-services" element={<Outsourcing />} />
          <Route path="/strategic-consulting" element={<StrategicConsulting />} />
          <Route path="/flex-support" element={<Flex />} />
          <Route path="/sap-grc" element={<SapGrc />} />
          <Route path="/big-data" element={<BigData />} />
          <Route path="/sap-hana" element={<SapHana />} />
          <Route path="/it-infrastructure" element={<ItInfra />} />
          <Route path="/mobility" element={<Mobility />} />
          <Route path="/sap" element={<Sap />} />
          <Route path="/successfactors" element={<SuccessFactors />} />
          <Route path="/sap-mii" element={<SapMii />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
