import {useState} from "react";
import Logo from "../assets/logo.webp";
import {Link} from "react-scroll";
import {FaCompactDisc, FaBarcode} from "react-icons/fa";
import {MdMiscellaneousServices, MdPower} from "react-icons/md";
import {FiX} from "react-icons/fi";
import {GiHamburgerMenu} from "react-icons/gi";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="fixed w-full z-50 transition-all duration-500 ">
			{/* BG */}
			<div className="bg-stone-300/50 backdrop-blur-2xl">
				<nav className="border-b border-red-400/20">
					<div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between relative">
						{/* LOGO */}
						<div className="flex items-center space-x-2">
							<img src={Logo} className="w-12 h-12" />
							<span className="text-3xl md:text-4xl font-bold bg-linear-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent tracking-tighter shadow-xl cursor-pointer">
								Droid Salon
							</span>
						</div>
						{/* DESKTOP MENU */}
						<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-6 lg:space-x-10">
							{/* Home */}
							<Link
								to="home"
								spy={true}
								smooth={true}
								className="flex items-center cursor-pointer uppercase hover:text-gray-600 transition-all duration-300 relative group font-medium text-base lg:text-lg">
								<MdPower className="mr-1 lg:mr-2" />
								Home
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-700 transition-all duration-300 group-hover:w-full"></span>
							</Link>
							{/* About */}
							<Link
								to="about"
								spy={true}
								smooth={true}
								className="flex items-center cursor-pointer uppercase hover:text-gray-600 transition-all duration-300 relative group font-medium text-base lg:text-lg">
								<FaCompactDisc className="mr-1 lg:mr-2" />
								About
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-700 transition-all duration-300 group-hover:w-full"></span>
							</Link>
							{/* Services */}
							<Link
								to="services"
								spy={true}
								smooth={true}
								className="flex items-center cursor-pointer uppercase hover:text-gray-600 transition-all duration-300 relative group font-medium text-base lg:text-lg">
								<MdMiscellaneousServices className="mr-1 lg:mr-2" />
								Services
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-700 transition-all duration-300 group-hover:w-full"></span>
							</Link>
						</div>
						{/* BOOKING BUTTON */}
						<div className="flex items-center space-x-4">
							<div className="hidden md:block">
								<Link
									to="contact"
									spy={true}
									smooth={true}
									className="flex items-center bg-amber-600 hover:bg-amber-500 text-white uppercase px-6 py-2 rounded-xl transition-all duration-300 font-semibold text-lg cursor-pointer">
									<FaBarcode className="mr-1 lg:mr-2" />
									Book Now
								</Link>
							</div>
							{/* MOBILE TOGGLE */}
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="md:hidden text-gray-800 hover:text-pink-700 transition-colors duration-300 p-2 cursor-pointer">
								{isMenuOpen ? <FiX size={28} /> : <GiHamburgerMenu size={28} />}
							</button>
						</div>
					</div>
				</nav>
			</div>
			{/* MOBILE MENU */}
			{isMenuOpen && (
				<div className="flex flex-col items-center w-full md:hidden bg-stone-300/50 backdrop-blur-2xl space-y-12 py-24">
					{/* Home */}
					<Link
						to="home"
						spy={true}
						smooth={true}
						className="flex items-center cursor-pointer text-black uppercase hover:text-gray-600 transition-all duration-300 relative group font-medium text-3xl">
						<MdPower className="mr-1 lg:mr-2" />
						Home
					</Link>
					{/* About */}
					<Link
						to="about"
						spy={true}
						smooth={true}
						className="flex items-center cursor-pointer text-black uppercase hover:text-gray-600 transition-all duration-300 relative group font-medium text-3xl">
						<FaCompactDisc className="mr-1 lg:mr-2" />
						About
					</Link>
					{/* Services */}
					<Link
						to="services"
						spy={true}
						smooth={true}
						className="flex items-center cursor-pointer text-black uppercase hover:text-gray-600 transition-all duration-300 relative group font-medium text-3xl">
						<MdMiscellaneousServices className="mr-1 lg:mr-2" />
						Services
					</Link>
					{/* BOOKING BUTTON */}
					<Link
						to="contact"
						spy={true}
						smooth={true}
						onClick={() => setIsMenuOpen(false)}
						className="flex items-center bg-amber-600 hover:bg-amber-400 text-white px-8 py-4 rounded-xl transition-all duration-300 font-semibold text-lg cursor-pointer">
						<FaBarcode className="mr-4 text-2xl" />
						Book Now
					</Link>
				</div>
			)}
		</div>
	);
};

export default Navbar;
