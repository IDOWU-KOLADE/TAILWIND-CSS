"use client"
import { useState } from "react"

const data = [
  { date: "May 1", views: 2000 },
  { date: "May 8", views: 3500 },
  { date: "May 15", views: 6420 },
  { date: "May 22", views: 4800 },
  { date: "May 29", views: 5200 },
]

export function PropertyViews() {
  const [hovered, setHovered] = useState(2)

  const max = Math.max(...data.map((d) => d.views))

  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * 100
    const y = 100 - (d.views / max) * 100
    return { ...d, x, y }
  })

  const pathD = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ")

  const areaD =
    `M ${points[0].x} 100 ` +
    points.map((p) => `L ${p.x} ${p.y}`).join(" ") +
    ` L ${points[points.length - 1].x} 100 Z`

  return (
    <div className="mx-4 mt-4 bg-white rounded-2xl p-4 shadow-sm border border-[#EEF2F7]">

      {/* header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-[#111827] font-semibold">
          Property Views
        </span>

        <button className="text-[#6B7280] text-xs bg-[#F8FAFC] px-3 py-1 rounded-lg border border-[#EEF2F7]">
          This Month ▾
        </button>
      </div>

      {/* chart area */}
      <div className="flex gap-2">

        {/* y-axis */}
        <div
          className="flex flex-col justify-between text-[#9CA3AF] text-xs py-1"
          style={{ minWidth: "28px" }}
        >
          <span>8K</span>
          <span>6K</span>
          <span>4K</span>
          <span>2K</span>
        </div>

        {/* chart */}
        <div className="flex-1 relative h-32">

          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <defs>
              <linearGradient
                id="areaGrad"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#8B5CF6"
                  stopOpacity="0.25"
                />
                <stop
                  offset="100%"
                  stopColor="#8B5CF6"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>

            {/* area */}
            <path
              d={areaD}
              fill="url(#areaGrad)"
            />

            {/* line */}
            <path
              d={pathD}
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="2.5"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
            />

            {/* dots */}
            {points.map((p, i) => (
              <circle
                key={i}
                cx={p.x}
                cy={p.y}
                r="2"
                fill={
                  i === hovered
                    ? "#FFFFFF"
                    : "#8B5CF6"
                }
                stroke="#8B5CF6"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
                className="cursor-pointer"
                onMouseEnter={() => setHovered(i)}
              />
            ))}
          </svg>

          {/* tooltip */}
          {hovered !== null && (
            <div
              className="absolute bg-[#8B5CF6] text-white text-xs rounded-xl px-3 py-2 shadow-md pointer-events-none -translate-x-1/2 -translate-y-full"
              style={{
                left: `${points[hovered].x}%`,
                top: `${points[hovered].y}%`,
              }}
            >
              <div className="font-medium">
                {points[hovered].date}
              </div>

              <div>
                {points[hovered].views.toLocaleString()} views
              </div>
            </div>
          )}
        </div>
      </div>

      {/* x-axis */}
      <div className="flex justify-between text-[#9CA3AF] text-xs mt-2 pl-8">
        {points.map((p, i) => (
          <span key={i}>{p.date}</span>
        ))}
      </div>
    </div>
  )
}

