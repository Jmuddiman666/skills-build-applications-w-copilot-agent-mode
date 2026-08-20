import ResourcePage from './ResourcePage.jsx'

// Backend endpoint: /api/users/
const RESOURCE = 'users'

const columns = [
  { key: 'displayName', label: 'Name' },
  { key: 'username', label: 'Username', render: (value) => `@${value}` },
  { key: 'email', label: 'Email' },
  { key: 'fitnessLevel', label: 'Level' },
  { key: 'goals', label: 'Goals' },
]

function Users() {
  return (
    <ResourcePage
      title="Users"
      description="Athletes building sustainable habits with their teams."
      resource={RESOURCE}
      columns={columns}
    />
  )
}

export default Users