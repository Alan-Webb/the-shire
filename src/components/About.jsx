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
		title: "Performance Upgrades",
		desc: "Faster processors, expanded memory, enhanced mobility systems, and improved response times",
	},
	{
		icon: <MdSensors className="w-8 h-8" />,
		title: "Sensor Calibration",
		desc: "Fine-tuning visual, audio, navigation, and proximity sensors for peak accuracy",
	},
	{
		icon: <MdOutlineRecordVoiceOver className="w-8 h-8" />,
		title: "Voice & Personality Tuning",
		desc: "Refine speech patterns, install new voice packs, or recalibrate personality modules",
	},
	{
		icon: <MdOutlineSecurity className="w-8 h-8" />,
		title: "Software Updates & Security Patching",
		desc: "Firmware upgrades, bug fixes, firewall protection, and malware removal",
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
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
