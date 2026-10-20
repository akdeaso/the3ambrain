import React from 'react'
import Layout from '../components/Layout.jsx'
import siteConfig from '../site.config.js'

export default function Terms() {
  return (
    <Layout currentPage="terms">
      <article>
        <h1>Terms of Service</h1>
        <div className="meta-effective">
          Effective date: {siteConfig.effectiveDate}
        </div>

        <h2>Nature of the Service</h2>
        <p>
          {siteConfig.appName} is a private, personal production and management tool developed solely for internal use by {siteConfig.ownerName}. It exists to assist the owner in operating and evaluating content for the YouTube channel <em>The 3AM Brain</em>. It is not offered as a commercial service, software-as-a-service, or public utility, and there are no public registrations, user memberships, or open accounts.
        </p>

        <h2>Compliance with YouTube Terms of Service</h2>
        <p>
          By utilizing any functionality of {siteConfig.appName} that interfaces with YouTube API Services, you agree to be bound by the{' '}
          <a
            href="https://www.youtube.com/t/terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube Terms of Service
          </a>. Furthermore, you acknowledge that your data interactions are governed by the{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Privacy Policy
          </a>.
        </p>

        <h2>Content &amp; Medical Disclaimer</h2>
        <p>
          The content produced, scheduled, or published through {siteConfig.appName} for the YouTube channel <em>The 3AM Brain</em> is designed strictly for informational, educational, and entertainment purposes. None of the content constitutes professional medical advice, clinical psychological counseling, psychiatric diagnosis, or professional treatment. Always seek the advice of a qualified physician or licensed healthcare provider with any medical or mental health concerns.
        </p>

        <h2>Disclaimer of Warranties and Limitation of Liability</h2>
        <p>
          {siteConfig.appName} is provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied. To the fullest extent permissible under applicable law, the operator disclaims all warranties, including merchantability and fitness for a particular purpose. In no event shall {siteConfig.ownerName} be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use this personal tool.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms of Service and any related disputes shall be governed by and construed in accordance with the laws of {siteConfig.country}, without regard to its conflict of law provisions.
        </p>

        <h2>Modifications and Inquiries</h2>
        <p>
          We reserve the right to revise these Terms of Service at any time. Any changes will be published directly on this page. If you have any inquiries regarding these terms, please contact:
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
