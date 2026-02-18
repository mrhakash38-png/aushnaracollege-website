import React from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  SITE_NAME,
  SITE_URL,
  DEFAULT_IMAGE,
  getCanonical,
  getPageMeta,
  getStructuredData
} from '../seo/seoConfig'

function RouteSeo() {
  const { pathname } = useLocation()
  const meta = getPageMeta(pathname)
  const canonical = getCanonical(pathname)
  const structuredData = getStructuredData(pathname)

  return (
    <Helmet>
      <html lang="en" />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />

      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />

      {structuredData.map((item, index) => (
        <script key={`ld-json-${index}`} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}

      <meta name="application-name" content={SITE_NAME} />
      <meta name="apple-mobile-web-app-title" content={SITE_NAME} />
      <meta name="theme-color" content="#174ea6" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="author" content={SITE_NAME} />
      <meta name="publisher" content={SITE_NAME} />
      <meta name="referrer" content="strict-origin-when-cross-origin" />

      <link rel="alternate" hrefLang="en" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
    </Helmet>
  )
}

export default RouteSeo
