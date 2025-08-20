const sections = {
  Categories: [
    "BAGS & PACKS",
    "INFLATABLE FURNITURE",
    "OUTDOOR GEAR",
    "TRAVEL ACCESSORIES",
    "CAMPING EQUIPMENT",
    "WATER SPORTS",
    "WINTER SPORTS",
  ],
  Information: [
    "ABOUT US",
    "PRIVACY POLICY",
    "TERMS OF SERVICE",
    "CONTACT US",
    "PASSWORD",
    "COLLECTIONS",
    "BLOGS",
  ],
  "My Account": [
    "LOGIN",
    "REGISTER",
    "MY ORDERS",
    "MY WISHLIST",
    "LATEST NEWS",
    "MY ADDRESSES",
    "MY CART",
  ],
  "Follow Us": ["FACEBOOK", "TWITTER", "INSTAGRAM", "PINTEREST"],
};

export default function FooterSection() {
  return (
    <footer className="bg-[#b7d5d6] flex flex-col px-28 space-y-15">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
        {Object.entries(sections).map(([title, items]) => (
          <div key={title}>
            <h1 className="text-xl font-bold mb-2">{title}</h1>
            <ul className="space-y-1">
              {items.map((item, idx) => (
                <li
                  key={idx}
                  className="text-shadow-gray-100 hover:text-black cursor-pointer text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <p>trip & fun. Powered by shopify</p>
      </div>
    </footer>
  );
}
