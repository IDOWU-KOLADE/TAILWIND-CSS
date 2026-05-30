export function TasksCard() {
  const tasks = [
    {
      title: "Follow up with James Anderson",
      time: "Today, 10:00 AM",
      priority: "High",
      color: "bg-[#FEE2E2] text-[#EF4444]",
    },
    {
      title: "Property visit with Sarah Williams",
      time: "Today, 2:00 PM",
      priority: "Medium",
      color: "bg-[#FEF3C7] text-[#F59E0B]",
    },
    {
      title: "Review contract - 158 Ikoyi",
      time: "Tomorrow, 11:00 AM",
      priority: "High",
      color: "bg-[#FEE2E2] text-[#EF4444]",
    },
    {
      title: "Follow up with Michael Brown",
      time: "May 22, 10:00 AM",
      priority: "Low",
      color: "bg-[#E5E7EB] text-[#6B7280]",
    },
  ]

  return (
    <div className="mx-4 mt-4 bg-white rounded-2xl p-4 shadow-sm border border-[#EEF2F7]">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[#111827] font-semibold text-sm">
          Tasks
        </h2>

        <button className="text-[#8B5CF6] text-xs font-medium">
          View All
        </button>
      </div>

      {/* Tasks */}
      <div className="flex flex-col gap-4">
        {tasks.map((task, i) => (
          <div
            key={i}
            className="flex items-start justify-between"
          >

            {/* Left */}
            <div className="flex gap-3">

              {/* Checkbox */}
              <div className="mt-1 w-4 h-4 rounded border border-[#D1D5DB]" />

              {/* Text */}
              <div>
                <p className="text-[#111827] text-sm font-medium leading-tight">
                  {task.title}
                </p>

                <span className="text-[#9CA3AF] text-xs">
                  {task.time}
                </span>
              </div>
            </div>

            {/* Badge */}
            <div
              className={`text-[10px] px-2 py-1 rounded-full font-medium ${task.color}`}
            >
              {task.priority}
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}