import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { BookOpen } from 'lucide-react'
import { fetchContentFeed, formatDateTime } from '../utils/contentFeed'

function Journals() {
  const [feed, setFeed] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false
    fetchContentFeed()
      .then((data) => {
        if (!ignore) setFeed(data)
      })
      .catch((err) => {
        if (!ignore) setError(err.message || 'Failed to load journals')
      })
    return () => {
      ignore = true
    }
  }, [])

  const journals = feed?.journals || []

  return (
    <div className="pt-8">
      <Helmet>
        <title>Academic Journals | Aushnara College</title>
        <meta name="description" content="Read Aushnara College journals featuring campus-led research, editorial insights, and academic discourse." />
      </Helmet>

      <section className="bg-gradient-to-r from-emerald-800 to-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Journals</h1>
          <p className="text-emerald-100 text-lg">Institutional journals updated through our content publishing pipeline.</p>
          <p className="text-emerald-200 text-sm mt-2">Last pipeline publish: {feed?.generatedAt ? formatDateTime(feed.generatedAt) : 'Loading...'}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {error && <p className="text-red-600 mb-6">{error}</p>}
          <div className="grid md:grid-cols-2 gap-6">
            {journals.map((journal) => (
              <article key={journal.id} className="bg-white rounded-xl shadow p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center text-xs font-semibold bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                    <BookOpen className="h-3 w-3 mr-1" />
                    Volume {journal.volume}, Issue {journal.issue}
                  </span>
                  <span className="text-xs text-gray-500">{journal.frequency}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{journal.title}</h2>
                <p className="text-sm text-gray-600 mb-2">Editor: {journal.editor}</p>
                <p className="text-sm text-gray-700 mb-4">{journal.scope}</p>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>Latest release: {journal.latestRelease}</p>
                  <p>ISSN: {journal.issn}</p>
                  <p>Last verified: {feed?.generatedAt ? formatDateTime(feed.generatedAt) : 'N/A'}</p>
                </div>
              </article>
            ))}
          </div>
          {!error && journals.length === 0 && <p className="text-gray-600">No journals available yet.</p>}
        </div>
      </section>
    </div>
  )
}

export default Journals

