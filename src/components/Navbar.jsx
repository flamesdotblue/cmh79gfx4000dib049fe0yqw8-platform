export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-rose-500 to-rose-400" />
          <span className="font-semibold tracking-tight">TileRipple</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          <a href="#" className="inline-flex items-center rounded-md bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition-colors">Sign in</a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100" aria-label="Open menu">
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </header>
  );
}
