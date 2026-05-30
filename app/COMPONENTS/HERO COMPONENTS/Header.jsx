import Image from "next/image"

export function Header() {
  return (
    <div className="hidden md:flex items-center justify-between px-6 py-4 border-b border-[#1a1f2e]">
      
      {/* left — greeting */}
      <div>
        <h1 className="text-white font-semibold text-xl">
          Good morning, John 👋
        </h1>
        <p className="text-gray-400 text-sm mt-0.5">
          Here's what's happening with your properties today.
        </p>
      </div>

      {/* right — icons + avatar */}
      <div className="flex items-center gap-4">

        {/* bell */}
        <button className="relative text-gray-400 hover:text-white transition-colors">
          <span className="text-xl">🔔</span>
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full" />
        </button>

        {/* avatar */}
        <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-indigo-500">
          <Image
            src="/avatars/david.jpg"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>

        {/* dropdown arrow */}
        <button className="text-gray-400 text-xs">▾</button>

      </div>
    </div>
  )
}