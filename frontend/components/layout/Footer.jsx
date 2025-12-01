export default function Footer() {
  return (
    <footer className="bg-surface border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Tejas Kamble. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
