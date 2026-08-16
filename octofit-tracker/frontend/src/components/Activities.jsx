import ResourcePage from './ResourcePage.jsx'

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
      resource="activities"
      columns={columns}
    />
  )
}

export default Activities