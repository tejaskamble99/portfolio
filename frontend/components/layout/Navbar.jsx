export default function Navbar() {
    const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="bg-black text-white border-b border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">Tejas Kamble</h1>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link)=>(
                <a key={link.name} href={link.href} className="hover:text-cyan-500">
                    {link.name}
                </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
