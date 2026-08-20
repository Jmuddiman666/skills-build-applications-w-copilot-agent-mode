import ResourcePage from './ResourcePage.jsx'

// API URL: https://<codespace>-8000.app.github.dev/api/workouts
// Backend endpoint: /api/workouts/
const RESOURCE = 'workouts'

const columns = [
  { key: 'title', label: 'Workout' },
  { key: 'category', label: 'Category' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'intensity', label: 'Intensity' },
  { key: 'targetMuscles', label: 'Targets' },
  { key: 'instructions', label: 'Instructions' },
]

function Workouts() {
  return (
    <ResourcePage
      title="Workouts"
      description="Pick a session that matches today's time, focus, and intensity."
      resource={RESOURCE}
      columns={columns}
    />
  )
}

export default Workouts