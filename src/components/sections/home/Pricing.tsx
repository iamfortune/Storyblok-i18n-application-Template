import { FC, useMemo, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { Blok } from "../../../interfaces";
import PriceSwitch from "../../composed/PriceSwitch/PriceSwitch";

const Pricing: FC<Blok> = ({ blok }) => {
	const router = useRouter();
	const [pricingType, setPricingType] = useState<1 | 2>(1);

	const pricing = [blok.freebie[0], blok.professional[0], blok.enterprise[0]];

	const language = (router.query?.lang || "en-us") as "en-us" | "de-de" | "fr";

	const pricingText = useMemo(() => {
		switch (language) {
			case "de-de":
				return ["Zahle monatlich", "Zahlen Sie jährlich"];
			case "fr":
				return ["Payez tous les mois", "Payer annuellement"];
			default:
				return ["Pay monthly", "Pay yearly"];
		}
	}, [language]);

	return (
		<Section {...storyblokEditable(blok)}>
			<h2 className="font-inter text-secondary text-center">{blok?.heading}</h2>
			<p className="text-center">{blok?.subHeading}</p>

			<div className="flex items-center justify-center md:mb-24 mb-4">
				<p className="font-dm-sans">{pricingText[0]}</p>
				<PriceSwitch
					value={pricingType}
					className="sm:mx-[24px] mx-4"
					onSwitch={(type) => setPricingType(type)}
				/>
				<div className="relative">
					<p className="font-dm-sans">{pricingText[1]}</p>

					<img
						alt="discount"
						src="/images/pricing-discount.webp"
						style={{ minWidth: 185, right: -205 }}
						className="absolute -top-2 md:block hidden"
					/>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-[24px] lg:w-full sm:w-[500px] mx-auto">
				{pricing?.map((price) => (
					<StoryblokComponent
						key={price._uid}
						blok={{ ...price, pricingType }}
					/>
				))}
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
