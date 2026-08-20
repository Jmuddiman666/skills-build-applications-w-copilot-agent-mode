import ResourcePage from './ResourcePage.jsx'

// Backend endpoint: /api/activities/
const RESOURCE = 'activities'

const columns = [
  { key: 'type', label: 'Activity' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'caloriesBurned', label: 'Calories' },
  {
    key: 'activityDate',
    label: 'Date',
    render: (value) => value ? new Date(value).toLocaleDateString() : '-',
  },
]

function Activities() {
  return (
    <ResourcePage
      title="Activities"
      description="Recent movement logged by the Octofit community."
      resource={RESOURCE}
      columns={columns}
    />
  )
}

export default Activities