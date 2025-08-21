"use client"; // Important for Next.js 13+ app directory




interface ResponsiveMenuProps {
  setIsOpen: (open: boolean) => void;
  isOpen: boolean;
}

export default function ResponsiveMenu({ setIsOpen, isOpen }: ResponsiveMenuProps) {
 

  const menuItems = [
    "Home",
    "Catalog",
    "Collection",
    "Sale",
    "Blog",
    "Contact Us",
  ];

  return (
    <nav className="relative">
      {/* Large screen menu */}
      <ul className="hidden lg:flex space-x-6 font-bold text-xl">
        {menuItems.map((item) => (
          <li
            key={item}
            className="cursor-pointer hover:text-gray-900 transition-colors duration-200"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Small/Medium screen menu button */}
     

      {/* Slide-in menu */}
      <ul
        className={`
          lg:hidden fixed top-0 left-0 h-full w-[40%] bg-white shadow-lg transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          flex flex-col p-6 space-y-6  text-xl z-50
        `}
      >
        {menuItems.map((item) => (
          <li
            key={item}
            className="cursor-pointer hover:text-gray-900 text-[#b7d5d6] border-b-2 font-semibold border-black transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Optional backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
