import React from 'react'
import siteConfig from '../site.config.js'

export default function Layout({ children, currentPage }) {
  // Use import.meta.env.BASE_URL which Vite provides (defaults to base in vite.config)
  const baseUrl = import.meta.env?.BASE_URL || '/the3ambrain-studio/'
  const homeUrl = baseUrl
  const privacyUrl = `${baseUrl}privacy.html`
  const termsUrl = `${baseUrl}terms.html`
  const logoUrl = `${baseUrl}logo.png`

  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="container header-inner">
          <a href={homeUrl} className="brand">
            {siteConfig.hasLogo && (
              <img
                src={logoUrl}
                alt={`${siteConfig.appName} Logo`}
                className="brand-logo"
                width="40"
                height="40"
              />
            )}
            <span className="brand-title">{siteConfig.appName}</span>
          </a>
          <nav className="site-nav" aria-label="Main Navigation">
            <a
              href={homeUrl}
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            >
              Home
            </a>
            <span className="nav-separator">·</span>
            <a
              href={privacyUrl}
              className={`nav-link ${currentPage === 'privacy' ? 'active' : ''}`}
            >
              Privacy Policy
            </a>
            <span className="nav-separator">·</span>
            <a
              href={termsUrl}
              className={`nav-link ${currentPage === 'terms' ? 'active' : ''}`}
            >
              Terms of Service
            </a>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <div className="container">{children}</div>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-inner">
            <div>
              © {siteConfig.year} {siteConfig.ownerName} · Contact:{' '}
              <a href={`mailto:${siteConfig.contactEmail}`}>
                {siteConfig.contactEmail}
              </a>
            </div>
            <div className="footer-nav">
              <a href={privacyUrl}>Privacy Policy</a>
              <span>·</span>
              <a href={termsUrl}>Terms of Service</a>
            </div>
          </div>
          <div className="footer-disclaimer">
            This document describes a personal tool and is not legal advice.
          </div>
        </div>
      </footer>
    </div>
  )
}
