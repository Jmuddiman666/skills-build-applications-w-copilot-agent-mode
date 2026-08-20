import ResourcePage from './ResourcePage.jsx'

// Backend endpoint: /api/teams/
const RESOURCE = 'teams'

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'mascot', label: 'Mascot' },
  { key: 'description', label: 'Mission' },
  { key: 'memberCount', label: 'Members' },
]

function Teams() {
  return (
    <ResourcePage
      title="Teams"
      description="Meet the crews training, competing, and improving together."
      resource={RESOURCE}
      columns={columns}
    />
  )
}

export default Teams