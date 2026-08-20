import ResourcePage from './ResourcePage.jsx'

// API URL: https://<codespace>-8000.app.github.dev/api/leaderboard
// Backend endpoint: /api/leaderboard/
const RESOURCE = 'leaderboard'

const columns = [
  { key: 'rank', label: 'Rank', render: (value) => `#${value}` },
  { key: 'user', label: 'Athlete' },
  { key: 'team', label: 'Team' },
  { key: 'points', label: 'Points' },
  { key: 'workoutsCompleted', label: 'Workouts' },
  { key: 'activityMinutes', label: 'Minutes' },
]

function Leaderboard() {
  return (
    <ResourcePage
      title="Leaderboard"
      description="See who is setting the pace across every Octofit team."
      resource={RESOURCE}
      columns={columns}
    />
  )
}

export default Leaderboard