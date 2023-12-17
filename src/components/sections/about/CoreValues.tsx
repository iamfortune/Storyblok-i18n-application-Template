import { FC } from "react";
import styled from "styled-components";
import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { Blok } from "../../../interfaces";

interface Value {
	heading: string;
	description: string;
}

const CoreValues: FC<Blok> = ({ blok }) => {
	return (
		<Section {...storyblokEditable(blok)}>
			<div className="custom-container">
				<div className="font-inter text-secondary">{render(blok?.title)}</div>
				<div className="md:grid md:grid-cols-12 lg:gap-x-[18px] lg:gap-y-[106px] lg:gap-0 md:gap-[24px]">
					{blok?.body?.length
						? blok?.body.map(({ heading, description }: Value) => (
								<div
									key={heading}
									className="md:col-span-6 lg:col-span-4 flex md:mb-0 mb-10"
								>
									<img src="/images/icons/shape.png" alt="shape" />
									<div className="">
										<h6>{heading}</h6>
										<p>{description}</p>
									</div>
								</div>
						  ))
						: null}
				</div>
			</div>
		</Section>
	);
};

const Section = styled.section`
	left: 0;
	right: 0;
	overflow: hidden;
	min-height: 736px;
	position: absolute;
	padding: 95px 0 94px;
	background: rgba(0, 179, 176, 0.12);

	@media screen and (max-width: 767px) {
		padding: 40px 0 40px;
	}

	& h2 {
		font-size: 40px;
		font-weight: 900;
		line-height: 48px;
		margin-bottom: 77px;

		@media screen and (max-width: 767px) {
			font-size: 32px;
			line-height: 38px;
			margin-bottom: 40px;
		}
	}

	& img {
		width: 29px;
		height: 32px;
		margin-right: 15px;
	}

	& h6 {
		font-size: 16px;
		font-weight: 600;
		line-height: 19px;
		margin-bottom: 7px;
	}

	& p {
		color: #4f4f4f;
		font-size: 14px;
		font-weight: 400;
		line-height: 168%;
	}
`;

export default CoreValues;
