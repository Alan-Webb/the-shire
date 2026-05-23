import heroImage from "../assets/heroImage.webp";
import {GiRobotGolem} from "react-icons/gi";

const Hero = () => {
	return (
		<div
			id="home"
			className="min-h-[80vh] md:min-h-[90vh] flex items-center justify-center text-center px-4 relative overflow-hidden"
			style={{
				background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${heroImage})`,
				backgroundSize: `cover`,
				backgroundPosition: `center`,
			}}>
			<div className="max-w-6xl text-white z-10 relative px-4">
				<div className="absolute bottom-4 -right-8 md:bottom-6 md:-right-6 text-4xl md:text-5xl text-amber-300/90 rotate-12">
					<GiRobotGolem size={52} />
				</div>
				{/* HEADING */}
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 bg-linear-to-r from-amber-300 via-rose-300 to-rose-500 bg-clip-text text-transparent drop-shadow-2xl animate-fade-in">
					From Glitches to Greatness
				</h1>
				{/* DIVIDER */}
				<div className="w-48 md:w-64 h-1 bg-linear-to-r from-transparent via-lime-300 to-transparent mx-auto my-6 md:my-8 rounded-full"/>
			</div>
		</div>
	);
};

export default Hero;
