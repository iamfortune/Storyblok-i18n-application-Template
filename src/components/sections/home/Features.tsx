/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import styled from "styled-components";
import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { Blok, StoryblokImage } from "../../../interfaces";

interface IListItem {
	body: unknown;
	heading: string;
	icon: StoryblokImage;
}

const Features: FC<Blok> = ({ blok }) => {
	return (
		<Section {...storyblokEditable(blok)} className="mx-auto">
			<header className="mx-auto">
				<div className="text-center text-secondary font-inter">
					{render(blok?.title)}
				</div>

				<div className="text-center">{render(blok?.description)}</div>
			</header>

			<div className="flex flex-col items-center justify-center">
				<div className="grid lg:grid-cols-2 grid-cols-1 gap-[74px] w-full">
					{blok?.list?.length
						? blok?.list.map(({ heading, icon, body }: IListItem) => (
								<FeatureCard key={heading}>
									<img src={icon?.filename} alt={heading} />
									<h3 className="font-inter text-secondary">{heading}</h3>
									{render(body)}
								</FeatureCard>
						  ))
						: null}
				</div>
			</div>
		</Section>
	);
};

const Section = styled.section`
	margin-top: 430px;

	& > header {
		max-width: 734px;

		@media screen and (max-width: 539px) {
			width: 100%;
		}

		& h1 {
			font-weight: 800;
			font-size: 64px;
			line-height: 77px;
			margin-bottom: 26px;

			@media screen and (max-width: 639px) {
				font-size: 48px;
				line-height: 60px;
			}

			@media screen and (max-width: 500px) {
				font-size: 36px;
				line-height: 50px;
				margin-bottom: 16px;
			}
		}

		& > div > p {
			font-weight: 400;
			font-size: 20px;
			line-height: 168.5%;
			margin-bottom: 86px;

			@media screen and (max-width: 639px) {
				margin-top: 16px;
			}
		}
	}
`;

const FeatureCard = styled.div`
	background: #fff;
	max-width: 551px;
	height: max-content;
	border-radius: 16px;
	padding: 59px 57px 72px;
	border: 2px solid var(--color-primary);
	box-shadow: 9px 9px 0px var(--color-primary);

	@media screen and (max-width: 1023px) {
		padding: 40px 30px 50px;
		margin: 0 auto;
	}

	@media screen and (max-width: 639px) {
		padding: 24px 24px;
		margin: 0 auto;
	}

	&:nth-child(even) {
		margin-top: 24px;

		@media screen and (max-width: 1023px) {
			margin-top: 0;
		}
	}

	& > img {
		width: 64px;
		height: 64px;
	}

	& > h3 {
		font-size: 20px;
		font-weight: 700;
		margin: 9px 0 12px;
		line-height: 168.5%;
	}

	& > p {
		font-size: 20px;
		line-height: 168.5%;
	}
`;

export default Features;
