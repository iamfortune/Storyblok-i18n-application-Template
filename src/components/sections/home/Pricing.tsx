import { useState } from "react";
import styled from "styled-components";
import PriceSwitch from "../../composed/PriceSwitch/PriceSwitch";
import PricingCard from "../../composed/PricingCard/PricingCard";

const pricing = [
	{
		title: "Freebie",
		description:
			"Perfect for small teams and startups who are just starting out.",
		monthlyPrice: "$0",
		yearlyPrice: "$0",
		perks: [
			{
				text: "Team Workspace",
				available: true,
			},
			{
				text: "Unlimited Folders",
				available: true,
			},
			{
				text: "Unlimited Folders",
				available: false,
			},
			{
				text: "Unlimited Sharing",
				available: false,
			},
			{
				text: "FIle Management",
				available: false,
			},
			{
				text: "Unlimited Projects",
				available: false,
			},
			{
				text: "24/7 Customer support",
				available: false,
			},
			{
				text: "Realtime collaboration",
				available: false,
			},
			{
				text: "Custom Features",
				available: false,
			},
		],
	},
	{
		title: "Professional",
		description:
			"Ideal for small to medium-sized teams who need to manage one or two products.",
		monthlyPrice: "$25",
		yearlyPrice: "$225",
		perks: [
			{
				text: "Team Workspace",
				available: true,
			},
			{
				text: "Unlimited Folders",
				available: true,
			},
			{
				text: "Unlimited Folders",
				available: true,
			},
			{
				text: "Unlimited Sharing",
				available: true,
			},
			{
				text: "FIle Management",
				available: true,
			},
			{
				text: "Unlimited Projects",
				available: true,
			},
			{
				text: "24/7 Customer support",
				available: false,
			},
			{
				text: "Realtime collaboration",
				available: false,
			},
			{
				text: "Custom Features",
				available: false,
			},
		],
	},
	{
		title: "Enterprise",
		description:
			"Ideal for larger teams or enterprises who need to manage multiple products",
		monthlyPrice: "$100",
		yearlyPrice: "$900",
		perks: [
			{
				text: "Team Workspace",
				available: true,
			},
			{
				text: "Unlimited Folders",
				available: true,
			},
			{
				text: "Unlimited Folders",
				available: true,
			},
			{
				text: "Unlimited Sharing",
				available: true,
			},
			{
				text: "FIle Management",
				available: true,
			},
			{
				text: "Unlimited Projects",
				available: true,
			},
			{
				text: "24/7 Customer support",
				available: true,
			},
			{
				text: "Realtime collaboration",
				available: true,
			},
			{
				text: "Custom Features",
				available: true,
			},
		],
	},
];

const Pricing = () => {
	const [pricingType, setPricingType] = useState<"monthly" | "yearly">(
		"monthly"
	);

	return (
		<Section>
			<h2 className="font-inter text-secondary text-center">
				Flexible Pricing
			</h2>
			<p className="text-center">Pricing to match your every need</p>

			<div className="flex items-center justify-center md:mb-24 mb-4">
				<p className="font-dm-sans">Pay Monthly</p>
				<PriceSwitch
					value={pricingType}
					className="sm:mx-[24px] mx-4"
					onSwitch={(type) => setPricingType(type)}
				/>
				<div className="relative">
					<p className="font-dm-sans">Pay Yearly</p>

					<img
						alt="discount"
						src="/images/pricing-discount.webp"
						style={{ minWidth: 185, right: -205 }}
						className="absolute -top-2 md:block hidden"
					/>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-[24px] lg:w-full sm:w-[500px] mx-auto">
				{pricing?.map(
					({ perks, monthlyPrice, yearlyPrice, description, title }) => (
						<PricingCard
							key={title}
							perks={perks}
							title={title}
							className="lg:col-span-4 col-span-12"
							description={description}
							perMonth={pricingType === "monthly"}
							theme={title !== "Professional" ? "white" : "green"}
							price={pricingType === "monthly" ? monthlyPrice : yearlyPrice}
						/>
					)
				)}
			</div>
		</Section>
	);
};

const Section = styled.section`
	& > h2 {
		font-weight: 800;
		font-size: 64px;
		line-height: 77px;
		margin-bottom: 11px;

		@media screen and (max-width: 639px) {
			font-size: 48px;
			line-height: 56px;
		}

		@media screen and (max-width: 441px) {
			font-size: 32px;
			margin-bottom: 0;
		}
	}

	& > p {
		font-weight: 400;
		font-size: 20px;
		line-height: 168.5%;
		margin-bottom: 25px;

		@media screen and (max-width: 441px) {
			font-size: 18px;
		}
	}
`;

export default Pricing;
