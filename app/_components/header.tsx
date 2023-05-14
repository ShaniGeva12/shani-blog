export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="ml-2 text-gray-800 font-medium">Shani Geva Blog</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <a href="/" className="text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="/posts" className="text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">
                Posts
              </a>
              <a href="/about" className="text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {/* Heroicon name: menu */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="text-gray-800 hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium">
            Home
          </a>
          <a href="/posts" className="text-gray-800 hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium">
            Posts
          </a>
          <a href="/about" className="text-gray-800 hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium">
            About
          </a>
        </div>
      </div>
    </header>
  );
}

