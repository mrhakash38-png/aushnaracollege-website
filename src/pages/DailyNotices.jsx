import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { fetchContentFeed, formatDateTime } from '../utils/contentFeed'

function DailyNotices() {
  const [feed, setFeed] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false
    fetchContentFeed()
      .then((data) => {
        if (!ignore) setFeed(data)
      })
      .catch((err) => {
        if (!ignore) setError(err.message || 'Failed to load daily notices')
      })
    return () => {
      ignore = true
    }
  }, [])

  const notices = feed?.dailyNotices || []
  const published = notices.filter((item) => item.isPublished)
  const upcoming = notices.filter((item) => !item.isPublished)

  return (
    <div className="pt-8">
      <Helmet>
        <title>Daily Notices | Aushnara College</title>
        <meta name="description" content="Daily official notices from Aushnara College with publication status and upcoming schedule." />
      </Helmet>

      <section className="bg-gradient-to-r from-blue-900 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Daily Notices</h1>
          <p className="text-blue-100 text-lg">Published daily updates across admissions, academics, meetings, routines, and governance.</p>
          <p className="text-blue-200 text-sm mt-2">Last publish: {feed?.generatedAt ? formatDateTime(feed.generatedAt) : 'Loading...'}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {error && <p className="text-red-600 mb-4">{error}</p>}

          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Publication Status</h2>
            <p className="text-sm text-gray-700">Plan: {feed?.noticePlan?.totalTypes || 100} notice types | Cadence: {feed?.noticePlan?.cadence || 'daily'}</p>
            <p className="text-sm text-gray-700">Published: {published.length} | Upcoming: {upcoming.length}</p>
            <p className="text-sm text-gray-700">Next publish: {feed?.pipeline?.nextPublishAt ? formatDateTime(feed.pipeline.nextPublishAt) : 'Unavailable'}</p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Latest Published Notices</h3>
          <div className="space-y-3">
            {published.slice(-40).reverse().map((item) => (
              <article key={item.id} className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{item.category}</span>
                  <span className="text-xs text-gray-500">{item.date}</span>
                </div>
                <h4 className="text-base font-semibold text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{item.summary}</p>
                <p className="text-xs text-gray-500 mt-2">{item.group}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default DailyNotices

