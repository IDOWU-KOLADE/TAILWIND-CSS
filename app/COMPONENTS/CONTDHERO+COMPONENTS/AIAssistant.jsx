export function AIAssistant() {
  return (
    <div className="mx-4 flex bg-white flex-col gap-1 rounded-xl mt-6 mb-32">

      {/* AI Assistant */}
      <div className="rounded-xl px-4 py-4">

        {/* header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-indigo-500 text-lg">🤖</span>
            <span className="text-gray-900 font-semibold">AI Assistant</span>
          </div>
          <button className="text-gray-400 text-lg">···</button>
        </div>

        {/* inner card */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100">
          <p className="text-gray-900 font-medium text-sm mb-1">
            Hi John! 👋
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            I found <span className="font-semibold text-gray-900">12 new leads</span> that match your property portfolio.
          </p>
          <button className="border border-indigo-400 text-indigo-500 text-sm px-5 py-1.5 rounded-lg">
            View Leads
          </button>
        </div>

      </div>

      {/* Market Insight */}
      <div className="bg-white rounded-xl px-4 py-4">

        {/* header */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-900 font-semibold">Market Insight</span>
        </div>

        {/* inner card */}
        <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100 overflow-hidden">

          {/* decorative blob */}
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-indigo-200 rounded-full opacity-40" />
          <div className="absolute -right-2 -bottom-2 w-16 h-16 bg-purple-200 rounded-full opacity-40" />

          <p className="text-gray-800 text-sm font-medium mb-1 relative z-10">
            Property demand in Lekki
          </p>
          <p className="text-green-500 text-sm font-medium mb-4 relative z-10">
            ↑ 24% this month
          </p>
          <button className="border border-indigo-400 text-indigo-500 text-sm px-5 py-1.5 rounded-lg relative z-10">
            View Full Report
          </button>
        </div>

      </div>

    </div>
  )
}