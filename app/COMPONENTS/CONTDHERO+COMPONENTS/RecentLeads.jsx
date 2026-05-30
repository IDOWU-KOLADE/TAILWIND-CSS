const leads = [
  {
    id: 1,
    name: "James Anderson",
    interest: "Interested in 3 Bedroom Apartment",
    time: "2m ago",
    online: true,
    avatar: "/avatars/james.jpg",
  },
  {
    id: 2,
    name: "Sarah Williams",
    interest: "Interested in Duplex in Lekki",
    time: "15m ago",
    online: true,
    avatar: "/avatars/sarah.jpg",
  },
  {
    id: 3,
    name: "Michael Brown",
    interest: "Interested in Land in Asaba",
    time: "1h ago",
    online: false,
    avatar: "/avatars/michael.jpg",
  },
  {
    id: 4,
    name: "David Johnson",
    interest: "Interested in 2 Bedroom Apartment",
    time: "2h ago",
    online: true,
    avatar: "/avatars/david.jpg",
  },
]

export function RecentLeads() {
  return (
    <div className="mx-4 mt-6">
      <div className="bg-white rounded-xl px-4 py-3">

        {/* header */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-900 font-semibold">Recent Leads</span>
          <button className="text-gray-600 text-xs bg-gray-100 px-3 py-1 rounded-lg">
            View All
          </button>
        </div>

        <div className="border-t border-gray-100 mb-1" />

        {/* leads list */}
        {leads.map((lead, i) => (
          <div key={lead.id}>
            <div className="flex items-center gap-3 py-3">

              {/* avatar with online dot */}
              <div className="relative flex-shrink-0">
                <img
                  src={lead.avatar}
                  alt={lead.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span
                  className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${
                    lead.online ? "bg-green-500" : "bg-orange-400"
                  }`}
                />
              </div>

              {/* name & interest */}
              <div className="flex-1">
                <p className="text-gray-900 text-sm font-medium">{lead.name}</p>
                <p className="text-gray-400 text-xs mt-0.5">{lead.interest}</p>
              </div>

              {/* time + online dot */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-gray-400 text-xs">{lead.time}</span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    lead.online ? "bg-green-500" : "bg-orange-400"
                  }`}
                />
              </div>

            </div>

            {i < leads.length - 1 && (
              <div className="border-t border-gray-100" />
            )}
          </div>
        ))}

      </div>
    </div>
  )
}