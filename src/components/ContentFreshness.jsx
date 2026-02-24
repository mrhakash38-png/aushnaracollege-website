import React, { useEffect, useState } from 'react'
import { fetchContentFeed, formatDateTime, getFreshnessMinutes } from '../utils/contentFeed'

function ContentFreshness() {
  const [state, setState] = useState({
    generatedAt: '',
    intervalMinutes: 20,
    rangeMin: 15,
    rangeMax: 20,
    nextPublishAt: '',
    error: ''
  })

  useEffect(() => {
    let ignore = false

    async function load() {
      try {
        const feed = await fetchContentFeed()
        if (!ignore) {
          setState({
            generatedAt: feed.generatedAt || '',
            intervalMinutes: feed.intervalMinutes || 20,
            rangeMin: feed.intervalRangeMinutes?.min || 15,
            rangeMax: feed.intervalRangeMinutes?.max || 20,
            nextPublishAt: feed.pipeline?.nextPublishAt || '',
            error: ''
          })
        }
      } catch (error) {
        if (!ignore) {
          setState((prev) => ({
            ...prev,
            error: error.message || 'Feed unavailable'
          }))
        }
      }
    }

    load()
    const timer = setInterval(load, 60000)
    return () => {
      ignore = true
      clearInterval(timer)
    }
  }, [])

  if (state.error) {
    return <p className="text-xs text-blue-200">Update feed unavailable.</p>
  }

  const ageMinutes = getFreshnessMinutes(state.generatedAt)
  const stale = ageMinutes !== null && ageMinutes > state.intervalMinutes

  return (
    <p className={`text-xs ${stale ? 'text-yellow-300' : 'text-green-300'}`}>
      Pipeline: {state.generatedAt ? `updated ${formatDateTime(state.generatedAt)} UTC` : 'waiting for first publish'} | randomized every {state.rangeMin}-{state.rangeMax} minutes | next {state.nextPublishAt ? formatDateTime(state.nextPublishAt) : 'pending'}
    </p>
  )
}

export default ContentFreshness
