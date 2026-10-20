import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from './pages/Home.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'

export function render(page) {
  let Component = Home
  if (page === 'privacy') {
    Component = Privacy
  } else if (page === 'terms') {
    Component = Terms
  }

  return renderToString(<Component />)
}
