import ResourcePage from './ResourcePage.jsx'

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
      resource="workouts"
      columns={columns}
    />
  )
}

export default Workouts