"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const mainNav = [
  { label: "Dashboard", icon: "🏠", href: "/" },
  { label: "Properties", icon: "🏢", href: "/properties" },
  { label: "Leads", icon: "👥", href: "/leads" },
  { label: "Messages", icon: "💬", href: "/messages" },
]

const moreNav = [
  { label: "AI Assistant", icon: "🤖", href: "/ai-assistant" },
  { label: "Deals", icon: "🤝", href: "/deals" },
  { label: "Analytics", icon: "📊", href: "/analytics" },
  { label: "Tasks", icon: "✅", href: "/tasks" },
  { label: "Calendar", icon: "📅", href: "/calendar" },
  { label: "Documents", icon: "📄", href: "/documents" },
  { label: "Payments", icon: "💳", href: "/payments" },
  { label: "Settings", icon: "⚙️", href: "/settings" },
]

export function BottomNav() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
    <div  className="md:hidden">
        {/* backdrop */}
      {drawerOpen && (
        <div
          className=" fixed inset-0 bg-black/50 z-40"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* slide-up drawer */}
      <div
        className={`fixed bottom-16 left-0 right-0 bg-[#1a1f2e] rounded-t-2xl z-50 transition-transform duration-300 ${
          drawerOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* handle bar */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 bg-gray-600 rounded-full" />
        </div>

        <p className="text-gray-400 text-xs px-6 pb-3 uppercase tracking-widest">
          More
        </p>

        {/* grid of extra items */}
        <div className="grid grid-cols-4 gap-1 px-4 pb-6">
          {moreNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setDrawerOpen(false)}
              className="flex flex-col items-center gap-2 py-4 rounded-xl hover:bg-[#252b3b] transition-colors"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-gray-300 text-xs text-center">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* upgrade to pro banner */}
        <div className="mx-4 mb-6 bg-indigo-600 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-white font-medium text-sm">Upgrade to Pro</p>
            <p className="text-indigo-200 text-xs mt-0.5">
              Unlock advanced AI tools, analytics & more.
            </p>
          </div>
          <button className="bg-white text-indigo-600 text-xs font-medium px-4 py-2 rounded-lg flex-shrink-0">
            Upgrade Now
          </button>
        </div>
      </div>

      {/* bottom nav bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1a1f2e] border-t border-[#252b3b] z-50">
        <div className="flex items-center justify-around px-2 py-2">

          {/* main nav items */}
          {mainNav.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex flex-col items-center gap-1 px-4 py-1"
              >
                <span className="text-xl">{item.icon}</span>
                <span
                  className={`text-xs ${
                    isActive ? "text-indigo-400" : "text-gray-400"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            )
          })}

          {/* more button */}
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="flex flex-col items-center gap-1 px-4 py-1"
          >
            <span className="text-xl">···</span>
            <span
              className={`text-xs ${
                drawerOpen ? "text-indigo-400" : "text-gray-400"
              }`}
            >
              More
            </span>
          </button>

        </div>
      </div>

    </div>
  </>
  )
}
