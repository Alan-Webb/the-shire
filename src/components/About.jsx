import {IoMedalSharp} from "react-icons/io5";
import {GiLightningSpanner} from "react-icons/gi";
import {
	MdSensors,
	MdOutlineRecordVoiceOver,
	MdOutlineSecurity,
} from "react-icons/md";
import aboutImg from "../assets/aboutImg.webp";

const features = [
	{
		icon: <GiLightningSpanner className="w-8 h-8" />,
		title: "Ability Upgrades",
		description: "Faster processors, expanded memory, enhanced mobility",
	},
	{
		icon: <MdSensors className="w-8 h-8" />,
		title: "Sense Calibration",
		description:
			"Fine-tuning visual, audio and navigation for optimum accuracy",
	},
	{
		icon: <MdOutlineRecordVoiceOver className="w-8 h-8" />,
		title: "Charisma Tuning",
		description: "Refine speech patterns or recalibrate personality modules",
	},
	{
		icon: <MdOutlineSecurity className="w-8 h-8" />,
		title: "Security Patching",
		description: "Firmware upgrades, bug fixes, firewall protection",
	},
];

const About = () => {
	return (
		<section
			id="about"
			className="py-24 bg-linear-to-r from-rose-200 to-pink-200">
			<div className="container mx-auto px-4 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* IMAGE */}
					<div className="relative group">
						<div className="absolute inset-o bg-linear-to-r from-pink-200 to-rose-200 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-all duration-300" />
						<div className="relative bg-pink-100 rounded-3xl p-8 transform">
							<div className="relative bg-rose-100 rounded-3xl p-4 md:p-8 transform hover:scale- transition-all duration-300">
								<div className="aspect-square rounded-2xl overflow-hidden">
									<img
										src={aboutImg}
										alt="Droid Meditation"
										className="w-full h-full object-cover object-center"
									/>
								</div>
							</div>
						</div>
					</div>
					{/* CONTENT SECTION */}
					<div className="space-y-8">
						<div className="inline-block">
							<div className="flex items-center space-x-3 bg-rose-100 px-4 py-2 rounded-full">
								<IoMedalSharp className="text-rose-400" />
								<span className="text-sm font-semibold text-rose-600">
									Award Winning Salon
								</span>
							</div>
						</div>
						{/* Heading & Paragraph*/}
						<h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">
							Precision Care for Every Circuit
						</h2>
						<p className="text-lg text-gray-600 leading-relaxed">
							At Droid Salon we provide reliable service and custom enhancements
							built around performance, longevity, and innovation.
						</p>
						{/* FEATURE GRID */}
						<div className="grid grid-cols-1 sm:grid-cols-2">
							{features.map((feature, index) => (
								<div
									key={index}
									className="p-2 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group m-1">
									<div className="flex items-center space-x-4">
										<div className="p-3 bg-rose-50 rounded-xl group-hover:bg-rose-100 transition-colors">
											{/* Icon */}
											<span className="text-rose-500">{feature.icon}</span>
										</div>
										{/* Title & Text */}
										<div>
											<h3 className="text-lg font-semibold text-gray-800">
												{feature.title}
											</h3>
											<p className="text-sm text-gray-500">
												{feature.description}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
