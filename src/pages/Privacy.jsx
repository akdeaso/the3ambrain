import React from 'react'
import Layout from '../components/Layout.jsx'
import siteConfig from '../site.config.js'

export default function Privacy() {
  return (
    <Layout currentPage="privacy">
      <article>
        <h1>Privacy Policy</h1>
        <div className="meta-effective">
          Effective date: {siteConfig.effectiveDate}
        </div>

        <h2>Who We Are</h2>
        <p>
          {siteConfig.appName} is an independent, private tool operated by {siteConfig.ownerName} located in {siteConfig.country}. This application is designed solely for managing content workflows on the owner's personal YouTube channel, <em>The 3AM Brain</em>. You can contact us anytime at{' '}
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
        </p>

        <h2>Use of YouTube API Services</h2>
        <p>
          {siteConfig.appName} utilizes YouTube API Services to perform content management and analytics retrieval. By using or interacting with features that integrate with YouTube API Services, you acknowledge and agree that your use is subject to the{' '}
          <a
            href="https://www.youtube.com/t/terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube Terms of Service
          </a>{' '}
          and Google's privacy rules.
        </p>
        <p>
          For more information on how Google collects, manages, and protects user data, please review the{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Privacy Policy
          </a>.
        </p>

        <h2>Information We Access, Collect, and Store</h2>
        <p>
          {siteConfig.appName} operates under the principle of minimal data access. It accesses only the specific data points required for the operator to publish and analyze content for their own channel:
        </p>
        <ul>
          <li>
            <strong>YouTube Video & Channel Management:</strong> Using the <code>youtube.upload</code> scope to upload and schedule videos directly to the channel, and the <code>youtube.readonly</code> scope to retrieve video metadata, channel details, and public statistics.
          </li>
          <li>
            <strong>YouTube Performance Analytics:</strong> Using the <code>yt-analytics.readonly</code> scope to retrieve channel performance metrics (e.g., aggregate views, watch time, and retention) strictly for internal content evaluation.
          </li>
          <li>
            <strong>Google Drive Archive:</strong> Storing and organizing generated video master files and backups in the operator's personal Google Drive account.
          </li>
          <li>
            <strong>Authentication Credentials:</strong> OAuth tokens necessary to authenticate API requests on behalf of the channel owner.
          </li>
        </ul>
        <p>
          The application does <em>not</em> collect, process, or track data from YouTube viewers, visitors, or any external third parties.
        </p>

        <h2>How We Use the Information</h2>
        <p>
          Information obtained through Google APIs is used exclusively for the operations described above:
        </p>
        <ul>
          <li>Preparing, uploading, and scheduling video content to the owner's YouTube channel.</li>
          <li>Evaluating content resonance and audience retention to refine creative pacing.</li>
          <li>Maintaining an archive of production assets on Google Drive.</li>
        </ul>
        <p>
          Data is never used for surveillance, advertising, user profiling, or commercial resale.
        </p>

        <h2>Data Sharing and Disclosure</h2>
        <p>
          We do not sell, rent, trade, or transfer any data accessed through Google and YouTube APIs to third parties. We do not integrate with third-party tracking, advertising, or data brokering networks. No external parties have access to your information.
        </p>

        <h2>Storage, Security, and Retention</h2>
        <p>
          OAuth tokens and performance statistics are stored securely on a private Virtual Private Server (VPS) operated solely by {siteConfig.ownerName}. Access to the server is strictly restricted through secure credentials and SSH keys.
        </p>
        <p>
          Performance metrics are retained only as long as necessary to evaluate historical content trends and may be purged at any time. OAuth access tokens and credentials are deleted immediately if the tool is decommissioned. You may also request deletion of any stored data at any time by sending an email to{' '}
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
        </p>

        <h2>Revoking Access</h2>
        <p>
          The operator or any authorized user may revoke {siteConfig.appName}’s access to their Google account at any time via the Google security settings page:
        </p>
        <div className="highlight-box">
          <p style={{ margin: 0 }}>
            Manage or revoke permissions:{' '}
            <a
              href="https://security.google.com/settings/security/permissions"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://security.google.com/settings/security/permissions
            </a>
          </p>
        </div>

        <h2>Google API Services User Data Policy Compliance</h2>
        <p>
          The 3AM Brain Studio's use and transfer of information received from Google APIs will adhere to the{' '}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google API Services User Data Policy
          </a>, including the Limited Use requirements.
        </p>

        <h2>Cookies and Tracking Technologies</h2>
        <p>
          This website is a static site hosted via GitHub Pages. It does not use cookies, web beacons, local storage tracking, or any third-party analytics scripts.
        </p>

        <h2>Children’s Privacy</h2>
        <p>
          {siteConfig.appName} is an internal administrative tool not intended for children under the age of 13. We do not knowingly collect or solicit any personal information from children under 13.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect operational changes or evolving legal requirements. Any modifications will be posted directly to this page along with an updated effective date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions, comments, or data deletion requests concerning this Privacy Policy, please contact:
        </p>
        <p>
          <strong>{siteConfig.ownerName}</strong>
          <br />
          Email:{' '}
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
          <br />
          Location: {siteConfig.country}
        </p>
      </article>
    </Layout>
  )
}
