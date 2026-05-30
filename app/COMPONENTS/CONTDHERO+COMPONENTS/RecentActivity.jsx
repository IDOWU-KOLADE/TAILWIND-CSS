const activities = [
  {
    id: 1,
    icon: "🏠",
    message: 'New property "Luxury Villa in Ikoyi" was added',
    time: "2m ago",
  },
  {
    id: 2,
    icon: "👤",
    message: "James Anderson viewed 4 properties",
    time: "15m ago",
  },
  {
    id: 3,
    icon: "👥",
    message: "New lead Sarah Williams was added",
    time: "1h ago",
  },
  {
    id: 4,
    icon: "🏠",
    message: 'Deal "Lekki Apartment Sale" moved to Proposal',
    time: "2h ago",
  },
]

export function RecentActivity() {
  return (
    <div className="mx-4 mt-6">
      <div className="bg-white rounded-xl px-4 py-3">

        {/* header inside card */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-900 font-semibold">Recent Activity</span>
          <button className="text-gray-600 text-xs bg-gray-100 px-3 py-1 rounded-lg">
            View All
          </button>
        </div>

        {/* divider below header */}
        <div className="border-t border-gray-100 mb-1" />

        {/* activity list */}
        {activities.map((a, i) => (
          <div key={a.id}>
            <div className="flex items-center gap-3 py-3">
              <div className="bg-indigo-100 text-indigo-500 w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0">
                {a.icon}
              </div>
              <p className="text-gray-800 text-sm flex-1 leading-snug">
                {a.message}
              </p>
              <span className="text-gray-400 text-xs flex-shrink-0">
                {a.time}
              </span>
            </div>
            {i < activities.length - 1 && (
              <div className="border-t border-gray-100" />
            )}
          </div>
        ))}

      </div>
    </div>
  )
}