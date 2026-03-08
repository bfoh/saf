interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="/saflogo.png"
              alt="SAF Institute"
              className="h-14 w-auto object-contain"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#courses"
              className="text-[#1E1E1E] hover:text-[#0F6B3E] transition-colors duration-200 font-medium whitespace-nowrap"
            >
              Courses
            </a>
            <a
              href="#why-saf"
              className="text-[#1E1E1E] hover:text-[#0F6B3E] transition-colors duration-200 font-medium whitespace-nowrap"
            >
              Why SAF
            </a>
            <a
              href="#testimonials"
              className="text-[#1E1E1E] hover:text-[#0F6B3E] transition-colors duration-200 font-medium whitespace-nowrap"
            >
              Testimonials
            </a>
            <a
              href="#visa"
              className="text-[#1E1E1E] hover:text-[#0F6B3E] transition-colors duration-200 font-medium whitespace-nowrap"
            >
              Visa Support
            </a>
            <a
              href="#locations"
              className="text-[#1E1E1E] hover:text-[#0F6B3E] transition-colors duration-200 font-medium whitespace-nowrap"
            >
              Locations
            </a>
            <a
              href="#contact"
              className="bg-[#0F6B3E] text-white px-6 py-2.5 rounded-full hover:bg-[#0d5a33] transition-all duration-200 font-medium whitespace-nowrap shadow-lg hover:shadow-xl"
            >
              Get Started
            </a>
          </div>

          <button className="md:hidden text-[#1E1E1E]">
            <i className="ri-menu-line text-2xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
