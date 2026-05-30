export function StatsGrid() {
  const stats = [
    { icon: "🏠", label: "Total Properties", value: "248", change: "↑ 12.5%", sub: "from last month" },
    { icon: "👤", label: "Active Leads", value: "156", change: "↑ 8.2%", sub: "from last month" },
    { icon: "📋", label: "Deals in Progress", value: "32", change: "↑ 15.3%", sub: "from last month" },
    { icon: "💰", label: "Total Revenue", value: "$84,250", change: "↑ 18.5%", sub: "from last month" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 px-4 mt-4">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="flex md:flex-col items-center md:items-start justify-between bg-white rounded-2xl px-4 py-3 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="bg-[#F3F0FF] p-2 rounded-xl">
              <span className="text-[#7C3AED] text-sm">{stat.icon}</span>
            </div>
            <span className="text-[#6B7280] text-sm font-medium md:hidden">
              {stat.label}
            </span>
          </div>

          {/* desktop view */}
          <div className="hidden md:block mt-2">
            <p className="text-gray-900 font-bold text-2xl">{stat.value}</p>
            <p className="text-gray-500 text-xs mt-0.5">{stat.label}</p>
            <p className="text-green-500 text-xs font-medium mt-1">
              {stat.change} <span className="text-gray-400">{stat.sub}</span>
            </p>
          </div>

          {/* mobile view */}
          <span className="text-[#22C55E] text-sm font-semibold md:hidden">
            {stat.change}
          </span>
        </div>
      ))}
    </div>
  )
}