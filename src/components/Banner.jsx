import {useState} from "react";
import {IoClose} from "react-icons/io5";
import BannerVideo from "../assets/BannerVideo.mp4";
import BannerFood from "../assets/BannerFood.webp";
import BannerClock from "../assets/BannerClock.png";
import BannerArrow from "../assets/BannerArrow.png";
import BannerSmall1 from "../assets/Bannersmall1.png";
import BannerSmall2 from "../assets/Bannersmall2.png";
import BannerSmall3 from "../assets/Bannersmall3.png";

const Banner = () => {
	const [showVideo, setShowVideo] = useState(false);

	return (
		<div className="bg-white pt-12 md:pt-24 min-h-125 flex items-center">
			{/* VIDEO MODAL */}
			{showVideo && (
				<div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
					<div className="bg-white p-4 md:p-8 rounded-lg w-full max-w-4xl relative">
						<button
							onClick={() => setShowVideo(false)}
							className="absolute -top-8 right-0 text-white text-2xl cursor-pointer">
							<IoClose />
						</button>
						<div className="aspect-video">
							<iframe
								src={BannerVideo}
								width="100%"
								height="100%"
								allow="autoplay"
								allowFullScreen
								className="rounded-lg"></iframe>
						</div>
					</div>
				</div>
			)}
			{/* CONTENT */}
			<div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12">
				{/* Left Content */}
				<div className="w-full lg:flex-1 text-center lg:text-left">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl animate-slide-up font-extrabold leading-tight mb-4">
						Hearty and Delicious Food from
						<br />
						<span className="text-orange-600">The Shire</span>
					</h1>
					<p className="text-md text-gray-600 mb-6">
						Where second breakfasts are sacred and every meal feels like a
						journey there and back again
					</p>
				</div>
			</div>
		</div>
	);
};

export default Banner;
