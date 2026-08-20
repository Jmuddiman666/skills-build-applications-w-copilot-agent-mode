const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

export const API_BASE_URL = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api'

const responseCollections = ['items', 'results', 'data', 'records']

export function normalizeCollection(payload) {
  if (Array.isArray(payload)) {
    return payload
  }

  for (const key of responseCollections) {
    if (Array.isArray(payload?.[key])) {
      return payload[key]
    }
  }

  return []
}

export async function fetchResource(resource, signal) {
  const response = await fetch(`${API_BASE_URL}/${resource}/`, { signal })

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return normalizeCollection(await response.json())
}