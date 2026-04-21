import {useState} from "react";
import {
	FaHome,
	FaUtensils,
	FaListAlt,
	FaQuoteLeft,
	FaSearch,
	FaShoppingCart,
	FaUserAlt,
} from "react-icons/fa";
import {BiSolidBowlHot} from "react-icons/bi";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const menuItems = [
		{href: "/", icon: <FaHome />, text: "Home"},
		{href: "#services", icon: <FaUtensils />, text: "Services"},
		{href: "#menu", icon: <FaListAlt />, text: "Menu"},
		{href: "#reviews", icon: <FaQuoteLeft />, text: "Reviews"},
	];

	return (
		<nav className="fixed top-3 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-yellow-400 to-orange-400 shadow-lg rounded-full px-3 sm:px-4 md:px-5 lg:px-8 py-2 md:py-3 w-[95%] md:w-[90%] max-w-7xl flex items-center justify-between backdrop-blur-md border border-white/20 z-50">
			{/* LOGO */}
			<div className="flex items-center space-x-2">
				<div className="p-2 bg-white/60 rounded-full backdrop-blur-sm">
					<BiSolidBowlHot className="text-2xl text-black animate-pulse" />
				</div>
				<h1 className="font-extrabold">The Shire</h1>
			</div>
			{/* DESKTOP NAVIGATION */}
			<div className="hidden md:flex space-x-4 lg:space-x-8">
				{menuItems.map((item, index) => (
					<a
						key={index}
						href={item.href}
						className="flex items-center space-x-2 text-black font-semibold hover:text-orange-800 transition-all duration-300 cursor-pointer">
						<span>{item.icon}</span>
						<span>{item.text}</span>
					</a>
				))}
			</div>
			{/* RIGHT SECTION */}
			<div className="flex items-center space-x-3">
				{/* Search Bar */}
				<div className="relative hidden sm:block">
					<input
						type="text"
						name="search"
						placeholder="Search..."
						className="w-28 md:w-32 lg:w-48 border border-gray-300 rounded-full py-1 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300"
					/>
					<FaSearch className="absolute right-3 top-1.75 transform hover:scale-120 transition-transform duration-300" />
				</div>
				{/* Cart & Login */}
				<div className="flex items-center space-x-3">
					<button className="p-2 text-xl bg-white/20 rounded-full hover:bg-white/30  hover:scale-110 transition-all focus:outline-none cursor-pointer border border-gray-600">
						<FaShoppingCart />
					</button>
					<button className="hidden md:flex items-center space-x-2 bg-linear-to-br from-yellow-300 to-orange-400 px-2 sm:px-0.5 lg:px-4 py-2 rounded-full hover:shadow-lg hover:scale-110 transition-all focus:outline-none whitespace-nowrap cursor-pointer">
						<FaUserAlt className="w-4 h-4" />
						<span className="font-semibold text-white text-sm ">Login</span>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
