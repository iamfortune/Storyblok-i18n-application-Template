/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import styled from "styled-components";
import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { Blok } from "../../../interfaces";

const Workflows: FC<Blok> = ({ blok }) => {
	return (
		<Section {...storyblokEditable(blok)}>
			<h2 className="font-inter text-secondary text-center">{blok?.title}</h2>
			<div className="text-center mx-auto">{render(blok?.body)}</div>

			<img src={blok?.workflows?.filename} alt={blok?.workflows?.alt} />
		</Section>
	);
};

const Section = styled.section`
	margin: 164px 0 180px;

	& h2 {
		font-size: 64px;
		font-weight: 800;
		line-height: 77px;
		margin-bottom: 19px;

		@media screen and (max-width: 767px) {
			font-size: 48px;
			line-height: 56px;
			margin-bottom: 10px;
		}

		@media screen and (max-width: 639px) {
			font-size: 32px;
			line-height: 40px;
		}
	}

	& div {
		max-width: 734px;

		@media screen and (max-width: 639px) {
			max-width: 100%;
		}

		& p {
			font-size: 20px;
			font-weight: 400;
			line-height: 168.5%;
			margin-bottom: 10px;

			@media screen and (max-width: 639px) {
				font-size: 18px;
			}
		}
	}
`;

export default Workflows;
