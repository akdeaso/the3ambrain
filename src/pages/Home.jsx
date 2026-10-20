import React from 'react'
import Layout from '../components/Layout.jsx'
import siteConfig from '../site.config.js'

export default function Home() {
  const baseUrl = import.meta.env?.BASE_URL || '/the3ambrain-studio/'
  const privacyUrl = `${baseUrl}privacy.html`

  return (
    <Layout currentPage="home">
      <article>
        <h1>{siteConfig.appName}</h1>
        <p className="lead">
          A personal production and automation tool created exclusively for managing the YouTube channel <em>The 3AM Brain</em>.
        </p>

        <h2>What It Does</h2>
        <p>
          {siteConfig.appName} is a private utility built to streamline the workflow for creating, publishing, and evaluating content for the YouTube channel. Specifically, the application handles:
        </p>
        <ul>
          <li>
            <strong>Shorts Video Preparation & Scheduling:</strong> Automating the preparation, metadata formatting, and scheduled uploading of original Shorts videos directly to the channel.
          </li>
          <li>
            <strong>Video Archive Management:</strong> Storing production video master files and assets securely in a dedicated Google Drive folder owned by the operator.
          </li>
          <li>
            <strong>Content Evaluation & Analytics:</strong> Reading channel metadata and aggregate performance metrics (such as views, watch duration, and retention) to evaluate content pacing and resonance.
          </li>
        </ul>
        <p>
          Video production scripts, voiceover narration, and visuals may be assisted by AI-powered creative software, with all final editorial decisions, review, and approvals performed manually by the operator.
        </p>

        <h2>Who Uses It</h2>
        <p>
          This application is strictly a <strong>private personal tool</strong> operated solely by {siteConfig.ownerName}. It is not a commercial product, software-as-a-service (SaaS), or public platform. There is no user registration, no public account creation, and no multi-tenant access. The only account authorized to connect to the tool is the operator’s own Google/YouTube account.
        </p>

        <h2>Google &amp; YouTube Data</h2>
        <p>
          To perform the functions outlined above, {siteConfig.appName} integrates with Google APIs using minimal and explicit scopes:
        </p>
        <ul>
          <li>
            <strong>YouTube Data API v3:</strong> Utilizes <code>youtube.upload</code> to upload and schedule videos on the operator's channel, and <code>youtube.readonly</code> to retrieve channel and video metadata.
          </li>
          <li>
            <strong>YouTube Analytics API:</strong> Utilizes <code>yt-analytics.readonly</code> to review private channel performance metrics for content evaluation.
          </li>
          <li>
            <strong>Google Drive API:</strong> Used exclusively to store and retrieve the operator's video archive files.
          </li>
        </ul>
        <p>
          Data accessed through Google APIs is never shared, never sold, never disclosed to third parties, and never used for advertising. For full details on our data protection practices, please read our comprehensive <a href={privacyUrl}>Privacy Policy</a>.
        </p>

        <h2>Official Channel</h2>
        <p>
          You can visit the official YouTube channel at{' '}
          <a
            href={siteConfig.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {siteConfig.channelUrl}
          </a>.
        </p>

        <h2>Contact Information</h2>
        <p>
          If you have any questions or inquiries regarding {siteConfig.appName}, please contact {siteConfig.ownerName} via email at{' '}
          <a href={`mailto:${siteConfig.contactEmail}`}>
            {siteConfig.contactEmail}
          </a>.
        </p>
      </article>
    </Layout>
  )
}
