"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "Dashboard", icon: "🏠", href: "/" },
  { label: "Properties", icon: "🏢", href: "/properties" },
  { label: "Leads & CRM", icon: "👥", href: "/leads" },
  { label: "Deals", icon: "🤝", href: "/deals" },
  { label: "Messages", icon: "💬", href: "/messages" },
  { label: "AI Assistant", icon: "🤖", href: "/ai-assistant" },
  { label: "Analytics", icon: "📊", href: "/analytics" },
  { label: "Tasks", icon: "✅", href: "/tasks" },
  { label: "Calendar", icon: "📅", href: "/calendar" },
  { label: "Documents", icon: "📄", href: "/documents" },
  { label: "Payments", icon: "💳", href: "/payments" },
  { label: "Settings", icon: "⚙️", href: "/settings" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="
      hidden md:flex flex-col
      fixed top-0 left-0 h-full z-40
      bg-[#0f1117] border-r border-[#1a1f2e]
      w-16 lg:w-64
      transition-all duration-300
    ">

      {/* logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-[#1a1f2e]">
        <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
          P
        </div>
        <span className="hidden lg:block text-white font-semibold text-lg">
          PropHQ
        </span>
      </div>

      {/* nav items */}
      <nav className="flex-1 py-4 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`
                flex items-center gap-3 px-4 py-3 mx-2 rounded-xl mb-1
                transition-colors duration-150
                ${isActive
                  ? "bg-indigo-600 text-white"
                  : "text-gray-400 hover:bg-[#1a1f2e] hover:text-white"
                }
              `}
            >
              <span className="text-xl flex-shrink-0">{item.icon}</span>
              <span className="hidden lg:block text-sm font-medium">
                {item.label}
              </span>
            </Link>
          )
        })}
      </nav>

      {/* upgrade to pro */}
      <div className="p-3 border-t border-[#1a1f2e]">
        <div className="bg-indigo-600 rounded-xl p-3 hidden lg:block">
          <p className="text-white font-medium text-sm">Upgrade to Pro</p>
          <p className="text-indigo-200 text-xs mt-1">
            Unlock advanced AI tools, analytics & more.
          </p>
          <button className="mt-3 w-full bg-white text-indigo-600 text-xs font-medium py-2 rounded-lg">
            Upgrade Now
          </button>
        </div>
        {/* collapsed state — just icon */}
        <button className="lg:hidden flex items-center justify-center w-full py-2 text-indigo-400 text-xl">
          ⭐
        </button>
      </div>

    </aside>
  )
}