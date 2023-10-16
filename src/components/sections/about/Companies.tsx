import { FC } from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import { storyblokEditable } from "@storyblok/react";
import { Blok } from "../../../interfaces";

interface ICompany {
	id: number;
	alt: string;
	filename: string;
	title: "stripe" | "microsoft" | "airbnb" | "google" | "storyblok";
}

const styles = {
	stripe: {
		height: 35,
		width: 84,
	},
	microsoft: {
		height: 35,
		width: 163,
	},
	airbnb: {
		height: 35,
		width: 110,
	},
	google: {
		height: 35,
		width: 107,
	},
	storyblok: {
		height: 35,
		width: 164,
	},
};

const Companies: FC<Blok> = ({ blok }) => {
	return (
		<Section {...storyblokEditable(blok)}>
			<h3 className="font-inter text-center xl:text-left">{blok?.title}</h3>

			<div className="flex items-center justify-center xl:justify-start flex-wrap mt-[40px]">
				{blok?.companies?.length
					? blok.companies.map((company: ICompany) => (
							<img
								key={company?.id}
								alt={company?.alt}
								src={company?.filename}
								style={{
									marginRight: 100,
									height:
										styles[company?.title.toLowerCase() as ICompany["title"]]
											?.height,
									width:
										styles[company?.title.toLowerCase() as ICompany["title"]]
											?.width,
								}}
							/>
					  ))
					: null}
			</div>
		</Section>
	);
};

const Section = styled.section`
	margin-top: 800px;

	@media screen and (max-width: 441px) {
		margin-top: 500px;
	}

	& h3 {
		color: #828282;
		font-size: 24px;
		font-weight: 600;
		line-height: 29px;
		margin-left: 32px;

		@media screen and (max-width: 1280px) {
			margin-left: 0;
		}

		@media screen and (max-width: 767px) {
			font-size: 20px;
			line-height: 24px;
		}
	}

	& img {
		margin: 0 32px 65px 32px;

		@media screen and (max-width: 991px) {
			margin: 0 30px 40px 30px;
		}
	}
`;

export default Companies;
