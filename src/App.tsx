import { Route, Routes } from 'react-router-dom'
import WelcomePage from './pages/welcome/WelcomePage'
import PresetPage from './pages/preset/PresetPage'
import AboutPage from './pages/about/AboutPage'
import SkillsPage from './pages/skills/SkillsPage'
import ServicePage from './pages/services/ServicePage'
import ContactPage from './pages/contact/ContactPage'
import PortfolioPage from './pages/portfolio/PortfolioPage'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<WelcomePage/>} />
        <Route element ={<PresetPage/>}>
          <Route path='/about' element= {<AboutPage/>} />
          <Route path='/skills' element= {<SkillsPage/>} />
          <Route path='/services' element= {<ServicePage/>} />
          <Route path='/portfolio' element= {<PortfolioPage/>} />
          <Route path='/contacts' element= {<ContactPage/>} />
        </Route>
      </Routes>
    </div>
  )
}
