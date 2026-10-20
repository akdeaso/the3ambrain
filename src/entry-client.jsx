import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import Home from './pages/Home.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import './styles.css'

const page = document.body.dataset.page || 'home'
let Component = Home

if (page === 'privacy') {
  Component = Privacy
} else if (page === 'terms') {
  Component = Terms
}

const rootElement = document.getElementById('root')
if (rootElement) {
  hydrateRoot(rootElement, <Component />)
}
