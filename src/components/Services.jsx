import React, {useState} from "react";
import {animateScroll as scroll} from "react-scroll";
import {
	GiRobotLeg,
	GiArmorUpgrade,
	GiCrossedSwords,
	GiPianoKeys,
	GiComputerFan,
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
import coolingSystem from "../assets/coolingSystem.webp";

const Services = () => {
	const services = [
		{
			id: 1,
			title: "Servo Joint Calibration",
			price: "€1800",
			image: servoCalibration,
			tags: ["Mobility", "Optimization"],
			description:
				"Precision tuning for smoother movement and improved response times",
			icon: <GiRobotLeg className="w-8 h-8 text-amber-400" />,
		},

		{
			id: 2,
			title: "Neural Processor Upgrade",
			price: "€5200",
			image: neuralProcessor,
			tags: ["Upgrade", "Performance"],
			description:
				"Boost computational speed and multitasking capabilities instantly",
			icon: <FaMicrochip className="w-8 h-8 text-amber-400" />,
		},
		{
			id: 3,
			title: "Armor Plating Repair",
			price: "€3100",
			image: armorRepair,
			tags: ["Repair", "Combat"],
			description: "Restore damaged panels and reinforce structural durability",
			icon: <GiArmorUpgrade className="w-8 h-8 text-amber-400" />,
		},
		{
			id: 4,
			title: "Optical Sensor Tuning",
			price: "€1600",
			image: opticalSensor,
			tags: ["Sensors", "Calibration"],
			description:
				"Enhance visual clarity, targeting precision, and environmental scanning",
			icon: <MdOutlineRemoveRedEye className="w-8 h-8 text-amber-400" />,
		},
		{
			id: 5,
			title: "Combat Mode Enhancement",
			price: "€6500",
			image: combatUpgrade,
			tags: ["Combat", "Upgrade"],
			description:
				"Performance tuning for faster reactions and tactical efficiency",
			icon: <GiCrossedSwords className="w-8 h-8 text-amber-400" />,
		},
		{
			id: 6,
			title: "Custom LED Installation",
			price: "€1700",
			image: customLED,
			tags: ["Customization", "Lighting"],
			description: "Personalized lighting upgrades with programmable effects",
			icon: <BsLightbulbFill className="w-8 h-8 text-amber-400" />,
		},
		{
			id: 7,
			title: "Dexterity Upgrade",
			price: "€1400",
			image: dexterityUpgrade,
			tags: ["Customization", "Mobility"],
			description: "Install premium skills packs and creative enhancements",
			icon: <GiPianoKeys className="w-8 h-8 text-amber-400" />,
		},
		{
			id: 8,
			title: "Firmware Security Update",
			price: "€950",
			image: firmwareUpdate,
			tags: ["Software", "Security"],
			description: "Patch vulnerabilities and optimize system stability",
			icon: <MdOutlineSecurity className="w-8 h-8 text-amber-400" />,
		},
		{
			id: 9,
			title: "Cooling System Optimization",
			price: "€1200",
			image: coolingSystem,
			tags: ["Calibration", "Performance"],
			description: "Reduce overheating risks with enhanced thermal regulation",
			icon: <GiComputerFan className="w-8 h-8 text-amber-400" />,
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
					<p className="text-amber-800 max-w-2xl mx-auto text-xl font-medium">
						Our comprehensive range of maintenance, repair, and upgrade
						services.
					</p>
				</div>
				{/* SERVICES DESCRIPTIONS GRID */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service) => (
						<div
							key={service.id}
							className="group relative bg-[#fff9e6] rounded-2xl shadow-xl border-2 border-amber-100 overflow-hidden transition-all duration-300 hover:border-amber-200 hover:shadow-2xl hover:-translate-y-2">
							<div className="relative h-72 overflow-hidden">
								{/* Icon */}
								<div className="absolute top-4 right-4 z-10 bg-white/30 backdrop-blur-sm p-2 rounded-full">
									{service.icon}
								</div>
								{/* Image */}
								<img
									src={service.image}
									alt={service.title}
									className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
								/>
								{/* Price */}
								<div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-4">
									<span className="bg-amber-500/90 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg">
										{service.price}
									</span>
								</div>
							</div>
							{/* Tags */}
							<div className="p-6">
								<div className="flex flex-wrap justify-center gap-2 mb-3">
									{service.tags.map((tag) => (
										<span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-md font-medium border border-amber-200 hover:border-amber-100 transition-colors">
											{tag}
										</span>
									))}
								</div>
								{/* Title & Description*/}
								<h3 className="text-xl text-center mb-2 text-amber-800">
									{service.title}
								</h3>
								<p className="text-amber-600 leading-relaxed font-medium text-center">
									{service.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
