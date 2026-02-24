import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { CalendarCheck2, MapPin } from 'lucide-react'
import { fetchContentFeed, formatDateTime } from '../utils/contentFeed'

function Activities() {
  const [feed, setFeed] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false
    fetchContentFeed()
      .then((data) => {
        if (!ignore) setFeed(data)
      })
      .catch((err) => {
        if (!ignore) setError(err.message || 'Failed to load activities')
      })
    return () => {
      ignore = true
    }
  }, [])

  const activities = feed?.activities || []

  return (
    <div className="pt-8">
      <Helmet>
        <title>Campus Activities | Aushnara College</title>
        <meta name="description" content="Follow current academic, cultural, and student activities at Aushnara College with frequent public updates." />
      </Helmet>

      <section className="bg-gradient-to-r from-purple-800 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Campus Activities</h1>
          <p className="text-indigo-100 text-lg">Public events and institutional activities refreshed through our publishing pipeline.</p>
          <p className="text-indigo-200 text-sm mt-2">Last pipeline publish: {feed?.generatedAt ? formatDateTime(feed.generatedAt) : 'Loading...'}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {error && <p className="text-red-600 mb-6">{error}</p>}
          <div className="space-y-5">
            {activities.map((activity) => (
              <article key={activity.id} className="bg-white rounded-xl shadow p-6 border border-gray-100">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="inline-flex items-center text-xs font-semibold bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                    <CalendarCheck2 className="h-3 w-3 mr-1" />
                    {activity.category}
                  </span>
                  <span className="text-xs text-gray-500">{activity.status}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h2>
                <p className="text-sm text-gray-600 mb-3">{activity.summary}</p>
                <div className="text-sm text-gray-600 flex flex-wrap items-center gap-4">
                  <span>{activity.date}</span>
                  <span className="inline-flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {activity.location}
                  </span>
                </div>
              </article>
            ))}
          </div>
          {!error && activities.length === 0 && <p className="text-gray-600">No activities published yet.</p>}
        </div>
      </section>
    </div>
  )
}

export default Activities

