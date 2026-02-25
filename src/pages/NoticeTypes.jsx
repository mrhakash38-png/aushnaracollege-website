import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { fetchContentFeed, formatDateTime } from '../utils/contentFeed'

function NoticeTypes() {
  const [feed, setFeed] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false
    fetchContentFeed()
      .then((data) => {
        if (!ignore) setFeed(data)
      })
      .catch((err) => {
        if (!ignore) setError(err.message || 'Failed to load notice types')
      })
    return () => {
      ignore = true
    }
  }, [])

  const noticeCatalog = feed?.noticeCatalog || []

  return (
    <div className="pt-8">
      <Helmet>
        <title>Notice Types (100) | Aushnara College</title>
        <meta name="description" content="Browse 100 types of official college and university notices maintained by Aushnara College." />
      </Helmet>

      <section className="bg-gradient-to-r from-slate-800 to-slate-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Official Notice Types</h1>
          <p className="text-slate-200 text-lg">Comprehensive 100-kind notice catalog for institutional communication and governance.</p>
          <p className="text-slate-300 text-sm mt-2">Feed updated: {feed?.generatedAt ? formatDateTime(feed.generatedAt) : 'Loading...'}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <p className="text-sm text-gray-600 mb-6">Total types: {noticeCatalog.length}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {noticeCatalog.map((notice) => (
              <article key={notice.id} className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
                <p className="text-xs text-gray-500 mb-1">{notice.id}</p>
                <h2 className="text-base font-semibold text-gray-900">{notice.label}</h2>
                <p className="text-sm text-gray-600 mt-1">{notice.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default NoticeTypes

