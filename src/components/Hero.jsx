import heroImage from "../assets/heroImage.webp";

const Hero = () => {
	return (
		<div
			id="home"
			className="min-h-[80vh] md:min-h-[90vh] flex items-center justify-center text-center px-4 relative overflow-hidden"
			style={{
				background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${heroImage})`,
				backgroundSize: `cover`,
				backgroundPosition: `center`,
			}}></div>
	);
};

export default Hero;
