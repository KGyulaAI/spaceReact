import Home from './pages/Home'
import Crew from './pages/Crew'
import Adventures from './pages/Adventures'
import About from './pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

export const ROUTES = {
  homePage: {path: "/", name:"Kezdőlap", component: <Home/>},
  crewPage: {path: "/crew", name:"Személyzet", component: <Crew/>},
  adventuresPage: {path: "/adventures", name: "Kalandok", component: <Adventures/>},
  aboutPage: {path: "/about", name: "Rólunk", component: <About/>}
}

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path={ROUTES.homePage.path} element={ROUTES.homePage.component}/>
        <Route path={ROUTES.crewPage.path} element={ROUTES.crewPage.component}/>
        <Route path={ROUTES.adventuresPage.path} element={ROUTES.adventuresPage.component}/>
        <Route path={ROUTES.aboutPage.path} element={ROUTES.aboutPage.component}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App