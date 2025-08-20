export default function NavBar() {
  return (
    <nav className="flex justify-between items-center px-7 py-4 bg-[#b7d5d6] fixed top-0 w-full z-10">
      <h1 className="text-4xl font-bold">trip & fun</h1>

      <ul className="flex space-x-6 font-bold text-xl">
        <li className="cursor-pointer hover:text-gray-900">Home</li>
        <li className="cursor-pointer hover:text-gray-900">Catalog</li>
        <li className="cursor-pointer hover:text-gray-900">Collection</li>
        <li className="cursor-pointer hover:text-gray-900">Sale</li>
        <li className="cursor-pointer hover:text-gray-900">Blog</li>
        <li className="cursor-pointer hover:text-gray-900">Contact Us</li>
      </ul>

      <div className="flex items-center font-bold space-x-4">
        <h1>My cart:</h1>
        <span className="py-1 px-3 rounded-[50%] bg-black">0</span>
      </div>
    </nav>
  );
}
