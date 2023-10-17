import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import {
	SbBlokData,
	StoryblokComponent,
	storyblokEditable,
} from "@storyblok/react";
import { BlokWithType } from "../../../interfaces";

interface Props {
	title: string;
	yearlyPrice: string;
	description: string;
	monthlyPrice: string;
	theme: "white" | "green";
	pricingType: "monthly" | "yearly";
	perks: { text: string; available: boolean }[];
}

const PricingCard: FC<BlokWithType<Props>> = ({ blok }) => {
	const [perMonth, setPerMonth] = useState(true);
	const {
		title,
		description,
		monthlyPrice,
		yearlyPrice,
		perks,
		theme,
		pricingType,
	} = blok;

	const price = perMonth ? monthlyPrice : yearlyPrice;

	useEffect(() => {
		if (pricingType) {
			setPerMonth(pricingType === "monthly");
		}
	}, [pricingType]);

	return (
		<StyledDiv
			theme={theme}
			className="lg:col-span-4 col-span-12"
			{...storyblokEditable(blok as unknown as SbBlokData)}
		>
			<h3 className="font-manrope">{title}</h3>
			<p className="font-manrope sb-description">{description}</p>

			<div className="font-manrope sb-price flex items-center">
				<p>{price}</p>
				<p>/ {perMonth ? "Month" : "Year"}</p>
			</div>

			<button className="w-full flex flex-col items-center justify-center">
				Get Started
			</button>

			<div className="sb-perks">
				{perks.map((perk, idx) => (
					<StoryblokComponent key={idx} blok={perk} />
				))}
			</div>
		</StyledDiv>
	);
};

const StyledDiv = styled.div<{ theme: Props["theme"] }>`
	padding: 40px 24px 44px;
	background: ${({ theme }) =>
		theme !== "green" ? "#fff" : "var(--color-primary)"};

	&:nth-child(even) {
		border-radius: 12px;
		padding: 40px 24px 44px;
		box-shadow: 0px 10px 25px #ccd9ff;
	}

	& > h3 {
		font-size: 22px;
		font-weight: 700;
		line-height: 30px;
		color: ${({ theme }) => (theme !== "green" ? "#000" : "#fff")};
	}

	& > .sb-description {
		font-size: 16px;
		font-weight: 400;
		line-height: 22px;
		margin: 11px 0 20px;
		color: ${({ theme }) => (theme === "green" ? "#f7f8f9" : "#64748B")};
	}

	& > .sb-price {
		& p {
			&:first-child {
				font-weight: 600;
				font-size: 56px;
				line-height: 76px;
				margin-right: 8px;
				color: ${({ theme }) => (theme !== "green" ? "#000" : "#fff")};
			}

			&:last-child {
				font-weight: 300;
				font-size: 16px;
				line-height: 22px;
				color: ${({ theme }) => (theme !== "green" ? "#4B5768" : "#F7F8F9")};
			}
		}
	}

	& > button {
		height: 44px;
		font-size: 15px;
		font-weight: 500;
		line-height: 20px;
		border-radius: 5px;
		padding: 12px 43px;
		margin: 20px 0 40px;
		box-shadow: 7px 7px 0px #1b243f;
		color: ${({ theme }) => (theme === "green" ? "#000" : "#fff")};
		background: ${({ theme }) =>
			theme === "green" ? "#fff" : "var(--color-primary)"};
	}

	& .sb-perks {
		& > div {
			margin-bottom: 12px;

			&:last-child {
				margin-bottom: 0;
			}

			& > div {
				width: 32px;
				height: 32px;
				background: #e8edfb;
				border-radius: 100px;

				& img {
					width: 16px;
					height: 16px;
				}
			}

			& > p {
				font-size: 16px;
				font-weight: 500;
				line-height: 22px;
				color: ${({ theme }) => (theme !== "green" ? "#000" : "#fff")};
			}
		}
	}
`;

export default PricingCard;
