import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { FileText, Microscope } from 'lucide-react'
import { fetchContentFeed, formatDateTime } from '../utils/contentFeed'

function ResearchPapers() {
  const [feed, setFeed] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false
    fetchContentFeed()
      .then((data) => {
        if (!ignore) setFeed(data)
      })
      .catch((err) => {
        if (!ignore) setError(err.message || 'Failed to load research papers')
      })
    return () => {
      ignore = true
    }
  }, [])

  const papers = feed?.researchPapers || []

  return (
    <div className="pt-8">
      <Helmet>
        <title>Research Papers | Aushnara College</title>
        <meta name="description" content="Explore latest research papers from Aushnara College across health sciences, engineering, business, and education." />
      </Helmet>

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Research Papers</h1>
          <p className="text-blue-100 text-lg">Peer-reviewed and institutional research outputs with regular publication updates.</p>
          <p className="text-blue-200 text-sm mt-2">Last pipeline publish: {feed?.generatedAt ? formatDateTime(feed.generatedAt) : 'Loading...'}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {error && <p className="text-red-600 mb-6">{error}</p>}
          <div className="grid md:grid-cols-2 gap-6">
            {papers.map((paper) => (
              <article key={paper.id} className="bg-white rounded-xl shadow p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    <Microscope className="h-3 w-3 mr-1" />
                    {paper.topic}
                  </span>
                  <span className="text-xs text-gray-500">{paper.status}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{paper.title}</h2>
                <p className="text-sm text-gray-600 mb-2">Authors: {paper.authors.join(', ')}</p>
                <p className="text-sm text-gray-700 mb-4">{paper.summary}</p>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>Published: {paper.publishedOn}</p>
                  <p>DOI: {paper.doi}</p>
                  <p>Last verified: {feed?.generatedAt ? formatDateTime(feed.generatedAt) : 'N/A'}</p>
                </div>
              </article>
            ))}
          </div>
          {!error && papers.length === 0 && <p className="text-gray-600">No papers published yet.</p>}
        </div>
      </section>
    </div>
  )
}

export default ResearchPapers

