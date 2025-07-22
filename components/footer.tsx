import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 racing-gradient rounded-sm flex items-center justify-center">
                <span className="text-white font-black text-xl">V</span>
              </div>
              <span className="text-2xl font-black text-white tracking-tight">VELOCITY</span>
            </div>
            <p className="text-gray-400 max-w-md text-lg leading-relaxed">
              Premium F1-inspired streetwear engineered for racing enthusiasts. Where speed meets style, precision meets
              passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">QUICK LINKS</h3>
            <div className="space-y-3">
              <Link
                href="/category/tees"
                className="block text-gray-400 hover:text-white transition-colors font-medium"
              >
                Products
              </Link>
              <Link href="/cart" className="block text-gray-400 hover:text-white transition-colors font-medium">
                Cart
              </Link>
              <Link href="/auth/login" className="block text-gray-400 hover:text-white transition-colors font-medium">
                Account
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">LEGAL</h3>
            <div className="space-y-3">
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors font-medium">
                Terms
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors font-medium">
                Privacy
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 font-medium">
            © {new Date().getFullYear()} VELOCITY Racing. Engineered for Excellence.
          </p>
        </div>
      </div>
    </footer>
  )
}
