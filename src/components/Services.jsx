import React, {useState} from "react";
import {animateScroll as scroll} from "react-scroll";
import {
	GiRobotLeg,
	GiArmorUpgrade,
	GiCrossedSwords,
	GiPianoKeys,
} from "react-icons/gi";
import {FaMicrochip} from "react-icons/fa";
import {MdOutlineRemoveRedEye, MdOutlineSecurity} from "react-icons/md";
import {BsLightbulbFill} from "react-icons/bs";

import servoCalibration from "../assets/servoCalibration.webp";
import neuralProcessor from "../assets/neuralProcessor.webp";
import armorRepair from "../assets/armorRepair.webp";
import opticalSensor from "../assets/opticalSensor.webp";
import combatUpgrade from "../assets/combatUpgrade.webp";
import customLED from "../assets/customLED.webp";
import dexterityUpgrade from "../assets/dexterityUpgrade.webp";
import firmwareUpdate from "../assets/firmwareUpdate.webp";

const Services = () => {
	const [showAll, setShowAll] = useState(false);

	const services = [
		{
			id: 1,
			title: "Servo Joint Calibration",
			price: "€1800",
			image: servoCalibration,
			tags: ["Mobility", "Optimization"],
			description:
				"Precision tuning for smoother movement and improved response times",
			icon: <GiRobotLeg className="w-8 h-8 text-cyan-500" />,
		},

		{
			id: 2,
			title: "Neural Processor Upgrade",
			price: "€5200",
			image: neuralProcessor,
			tags: ["Upgrade", "Performance"],
			description:
				"Boost computational speed and multitasking capabilities instantly",
			icon: <FaMicrochip className="w-8 h-8 text-cyan-500" />,
		},
		{
			id: 3,
			title: "Armor Plating Repair",
			price: "€3100",
			image: armorRepair,
			tags: ["Repair", "Exterior"],
			description: "Restore damaged panels and reinforce structural durability",
			icon: <GiArmorUpgrade className="w-8 h-8 text-cyan-500" />,
		},
		{
			id: 4,
			title: "Optical Sensor Tuning",
			price: "€1600",
			image: opticalSensor,
			tags: ["Sensors", "Calibration"],
			description:
				"Enhance visual clarity, targeting precision, and environmental scanning",
			icon: <MdOutlineRemoveRedEye className="w-8 h-8 text-cyan-500" />,
		},
		{
			id: 5,
			title: "Combat Mode Enhancement",
			price: "€6500",
			image: combatUpgrade,
			tags: ["Advanced", "Upgrade"],
			description:
				"Performance tuning for faster reactions and tactical efficiency",
			icon: <GiCrossedSwords className="w-8 h-8 text-cyan-500" />,
		},
		{
			id: 6,
			title: "Custom LED Installation",
			price: "€1700",
			image: customLED,
			tags: ["Customization", "Lighting"],
			description: "Personalized lighting upgrades with programmable effects",
			icon: <BsLightbulbFill className="w-8 h-8 text-cyan-500" />,
		},
		{
			id: 7,
			title: "Dexterity Upgrade",
			price: "€1400",
			image: dexterityUpgrade,
			tags: ["Customization", "Audio"],
			description: "Install premium voice packs and personality enhancements",
			icon: <GiPianoKeys className="w-8 h-8 text-cyan-500" />,
		},
		{
			id: 8,
			title: "Firmware Security Update",
			price: "€950",
			image: firmwareUpdate,
			tags: ["Software", "Security"],
			description: "Patch vulnerabilities and optimize system stability",
			icon: <MdOutlineSecurity className="w-8 h-8 text-cyan-500" />,
		},
	];
	return (
		<section
			id="services"
			className="py-20 bg-linear-to-b from-[#fceedd] to-[#f9eab8]">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-red-600 to-rose-500 bg-clip-text text-transparent mb-4">
						Our Services
					</h2>
				</div>
			</div>
		</section>
	);
};

export default Services;
