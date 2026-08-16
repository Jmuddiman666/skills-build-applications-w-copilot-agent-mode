import { useEffect, useState } from 'react'
import { fetchResource } from '../api.js'

const formatValue = (value) => {
  if (Array.isArray(value)) {
    return value.join(', ')
  }

  if (value && typeof value === 'object') {
    return value.displayName ?? value.name ?? value.username ?? value._id ?? 'Unknown'
  }

  return value ?? '-'
}

function ResourcePage({ title, description, resource, columns }) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    fetchResource(resource, controller.signal)
      .then((data) => {
        setItems(data)
        setStatus('ready')
      })
      .catch((requestError) => {
        if (requestError.name !== 'AbortError') {
          setError(requestError.message)
          setStatus('error')
        }
      })

    return () => controller.abort()
  }, [resource])

  return (
    <section className="resource-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Octofit tracker</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        {status === 'ready' && <span className="record-count">{items.length} records</span>}
      </div>

      {status === 'loading' && <div className="status-message">Loading {title.toLowerCase()}...</div>}
      {status === 'error' && (
        <div className="alert alert-danger" role="alert">
          Could not load {title.toLowerCase()}: {error}
        </div>
      )}
      {status === 'ready' && items.length === 0 && (
        <div className="status-message">No {title.toLowerCase()} found.</div>
      )}
      {status === 'ready' && items.length > 0 && (
        <div className="table-responsive resource-table">
          <table className="table table-hover align-middle mb-0">
            <thead>
              <tr>
                {columns.map(({ key, label }) => <th key={key} scope="col">{label}</th>)}
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item._id ?? `${resource}-${index}`}>
                  {columns.map(({ key, render }) => (
                    <td key={key}>{render ? render(item[key], item) : formatValue(item[key])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default ResourcePage