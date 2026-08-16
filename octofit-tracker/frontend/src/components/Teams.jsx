import ResourcePage from './ResourcePage.jsx'

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
      resource="teams"
      columns={columns}
    />
  )
}

export default Teams