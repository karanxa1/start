import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProductRequirements from './pages/ProductRequirements'
import TechnicalArchitecture from './pages/TechnicalArchitecture'
import ImplementationRoadmap from './pages/ImplementationRoadmap'
import StartupStrategy from './pages/StartupStrategy'
import CollegeOutreach from './pages/CollegeOutreach'
import ResourceTeam from './pages/ResourceTeam'
import NonTechnicalTeam from './pages/NonTechnicalTeam'
import BackendArchitecture from './pages/BackendArchitecture'
import JoinTeam from './pages/JoinTeam'
import Contact from './pages/Contact'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prd" element={<ProductRequirements />} />
        <Route path="/technical-architecture" element={<TechnicalArchitecture />} />
        <Route path="/implementation-roadmap" element={<ImplementationRoadmap />} />
        <Route path="/startup-strategy" element={<StartupStrategy />} />
        <Route path="/college-outreach" element={<CollegeOutreach />} />
        <Route path="/resource-team" element={<ResourceTeam />} />
        <Route path="/non-technical-team" element={<NonTechnicalTeam />} />
        <Route path="/backend-architecture" element={<BackendArchitecture />} />
        <Route path="/join-team" element={<JoinTeam />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App