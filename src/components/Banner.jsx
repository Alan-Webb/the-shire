import {useState} from "react";
import {IoClose} from "react-icons/io5";
import BannerVideo from "../assets/BannerVideo.mp4";
import BannerFood from "../assets/BannerFood.webp";

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
			{/* STUFF */}
			<div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between"></div>
		</div>
	);
};

export default Banner;
