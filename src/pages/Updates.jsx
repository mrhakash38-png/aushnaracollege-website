import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { fetchContentFeed, formatDateTime } from '../utils/contentFeed'

function Updates() {
  const [feed, setFeed] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false

    async function load() {
      try {
        const data = await fetchContentFeed()
        if (!ignore) {
          setFeed(data)
          setError('')
        }
      } catch (err) {
        if (!ignore) setError(err.message || 'Failed to load updates')
      }
    }

    load()
    const timer = setInterval(load, 60000)
    return () => {
      ignore = true
      clearInterval(timer)
    }
  }, [])

  const notices = feed?.dailyNotices || []
  const publishedNotices = notices.filter((item) => item.isPublished).slice(-120).reverse()

  return (
    <div className="pt-8">
      <Helmet>
        <title>Latest Notices & Updates | Aushnara College</title>
        <meta name="description" content="Read the latest official notices, announcements, and institutional updates from Aushnara College." />
      </Helmet>

      <section className="bg-gradient-to-r from-gray-900 to-slate-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest Notices & Updates</h1>
          <p className="text-slate-200 text-lg">Official announcements for students, faculty, and guardians.</p>
          <p className="text-slate-300 text-sm mt-2">Last updated: {feed?.generatedAt ? formatDateTime(feed.generatedAt) : 'Loading...'}</p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {error && <p className="text-red-600 mb-4">{error}</p>}

          <div className="bg-white rounded-xl shadow p-6 border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Official Notices</h2>
            <div className="space-y-3 max-h-[28rem] overflow-auto pr-1">
              {publishedNotices.map((item) => (
                <article key={item.id} className="border border-gray-100 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{item.category}</span>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.summary}</p>
                  <p className="text-xs text-gray-500 mt-2">Office: {item.group}</p>
                </article>
              ))}
            </div>
            {publishedNotices.length === 0 && <p className="text-sm text-gray-600">No notices are available yet.</p>}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Updates
