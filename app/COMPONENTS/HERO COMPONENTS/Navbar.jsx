export function Navbar() {
  return (
    <nav className="md:hidden flex items-center justify-between px-4 py-3 bg-gray-900">
      
      <button className="text-white">
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>

      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">P</span>
        </div>
        <span className="text-white font-bold text-lg">PropHQ</span>
      </div>

      <div className="w-8 h-8 rounded-full bg-purple-500 overflow-hidden">
        <img
          src="https://i.pravatar.cc/32"
          alt="User avatar"
          className="w-full h-full object-cover"
        />
      </div>

    </nav>
  )
}

