import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { RefreshCcw } from 'lucide-react'
import { fetchContentFeed, formatDateTime, getFreshnessMinutes } from '../utils/contentFeed'

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

  const ageMinutes = getFreshnessMinutes(feed?.generatedAt)
  const staleThreshold = feed?.intervalRangeMinutes?.max || 20
  const isFresh = ageMinutes !== null && ageMinutes <= staleThreshold
  const educationalNews = feed?.educationalNews || []
  const publishedNews = educationalNews.filter((item) => item.isPublished)
  const upcomingNews = educationalNews.filter((item) => !item.isPublished)

  return (
    <div className="pt-8">
      <Helmet>
        <title>Live Updates Pipeline | Aushnara College</title>
        <meta name="description" content="View real-time publishing status and public update logs from Aushnara College content pipeline." />
      </Helmet>

      <section className="bg-gradient-to-r from-gray-900 to-slate-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Live Updates Pipeline</h1>
          <p className="text-slate-200 text-lg">Transparency page for frequent public publishing and update cadence.</p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {error && <p className="text-red-600 mb-4">{error}</p>}

          <div className="bg-white rounded-xl shadow p-6 border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pipeline Health</h2>
            <div className="space-y-2 text-sm text-gray-700">
              <p>Target interval: randomized {feed?.intervalRangeMinutes?.min || 15}-{feed?.intervalRangeMinutes?.max || 20} minutes</p>
              <p>Last applied interval: {feed?.intervalMinutes || 20} minutes</p>
              <p>Next scheduled publish: {feed?.pipeline?.nextPublishAt ? formatDateTime(feed.pipeline.nextPublishAt) : 'Unavailable'}</p>
              <p>Retention window: {feed?.retentionDays || 31} days</p>
              <p>Pipeline start: {feed?.pipeline?.startedAt ? formatDateTime(feed.pipeline.startedAt) : 'Unavailable'}</p>
              <p>Commitment end (30 days): {feed?.pipeline?.commitmentEndsAt ? formatDateTime(feed.pipeline.commitmentEndsAt) : 'Unavailable'}</p>
              <p>Last publish: {feed?.generatedAt ? formatDateTime(feed.generatedAt) : 'Unavailable'}</p>
              <p>Educational news plan: {feed?.newsPlan?.publishedCount || 0}/{feed?.newsPlan?.totalItems || 200} published ({feed?.newsPlan?.remainingCount || 0} remaining)</p>
              <p>Average daily volume target: {feed?.newsPlan?.averageDailyVolume || 0} notices/day</p>
              <p className={isFresh ? 'text-green-700 font-semibold' : 'text-yellow-700 font-semibold'}>
                Status: {isFresh ? 'Fresh and on cadence' : 'Publish overdue or unavailable'}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Educational News (30-Day Plan)</h2>
            <p className="text-sm text-gray-600 mb-4">
              Total planned: {feed?.newsPlan?.totalItems || 200} | Published: {publishedNews.length} | Upcoming: {upcomingNews.length}
            </p>
            <div className="space-y-3 max-h-[28rem] overflow-auto pr-1">
              {publishedNews.slice(-120).reverse().map((item) => (
                <article key={item.id} className="border border-gray-100 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{item.category}</span>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.summary}</p>
                  <p className="text-xs text-gray-500 mt-2">Unit: {item.unit}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Publication Log</h2>
            <div className="space-y-4">
              {(feed?.bulletins || []).map((item) => (
                <article key={item.id} className="border border-gray-100 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center text-xs font-semibold bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      <RefreshCcw className="h-3 w-3 mr-1" />
                      {item.type}
                    </span>
                    <span className="text-xs text-gray-500">{formatDateTime(item.publishedAt)}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.note}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Updates
