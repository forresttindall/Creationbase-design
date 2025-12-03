import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './Homepage'
import Biography from './Biography'
import Terms from './Terms'
import Privacy from './Privacy'
import GraphicDesign from './GraphicDesign'
import Websites from './Websites'
import Contact from './Contact'
import CaseStudies from './CaseStudies'

const path = window.location.pathname
let Root
if (path === '/about') {
  Root = <Biography />
} else if (path === '/graphicdesign') {
  Root = <GraphicDesign />
} else if (path === '/websites') {
  Root = <Websites />
} else if (path === '/contact') {
  Root = <Contact />
} else if (path === '/terms') {
  Root = <Terms />
} else if (path === '/privacy') {
  Root = <Privacy />
} else if (path === '/casestudies') {
  Root = <CaseStudies />
} else {
  Root = <Homepage />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {Root}
  </React.StrictMode>
)
