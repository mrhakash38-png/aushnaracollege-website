import React, { useEffect, useState } from 'react'
import { fetchContentFeed, formatDateTime } from '../utils/contentFeed'

function ContentFreshness() {
  const [state, setState] = useState({
    generatedAt: '',
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

  return (
    <p className="text-xs text-blue-200">
      Latest public update: {state.generatedAt ? `${formatDateTime(state.generatedAt)} UTC` : 'Loading...'}
    </p>
  )
}

export default ContentFreshness
