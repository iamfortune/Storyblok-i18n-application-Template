/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import styled from "styled-components";
import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { Blok } from "../../../interfaces";

const Intro: FC<Blok> = ({ blok }) => {
	return (
		<Section {...storyblokEditable(blok)}>
			<div className="relative mx-auto sm:w-full w-max">
				<h1 className="font-inter md:!text-[64px] text-[40px] text-center text-secondary font-black">
					{blok?.headline}
				</h1>

				<img
					alt="underline"
					src="/images/icons/underline.webp"
					className="absolute sb-underline-img"
				/>
			</div>

			<div className="text-center md:text-[24px] sm:text-[20px] sb-para-1">
				{render(blok?.body)}
			</div>

			<div className="sb-video-section flex items-center justify-center">
				<div className="flex items-center">
					<p className="text-[15px] text-[#828282] mr-3 font-medium">
						Watch Demo
					</p>
					<img
						alt="play-demo"
						src="/images/icons/play.webp"
						style={{ width: "35px", height: "35px" }}
					/>
				</div>
				<button className="sb-seat-btn flex items-center justify-center">
					<img
						alt="seat"
						src="/images/icons/seat.svg"
						style={{ width: "14px", height: "13px", marginRight: "5px" }}
					/>
					<p className="text-[15px] text-white font-medium">Save a seat</p>
				</button>
			</div>
		</Section>
	);
};

const Section = styled.section`
	max-width: 824px;
	margin: 79px auto 104px;

	@media screen and (max-width: 639px) {
		margin-top: 40px;
	}

	& > div {
		@media screen and (max-width: 539px) {
			width: 100%;
		}
	}

	& h1 {
		@media screen and (max-width: 992px) {
			line-height: 1.1;
		}

		@media screen and (max-width: 529px) {
			font-size: 32px;
		}
	}

	& .sb-para-1 {
		margin-top: 25px;
		line-height: 168.52%;

		@media screen and (max-width: 529px) {
			margin-top: 16px;
		}
	}

	& .sb-underline-img {
		top: 75%;
		right: 18px;
		width: 172px;

		@media screen and (max-width: 992px) {
			top: 95%;
			right: 50%;
			transform: translateX(50%);
		}

		@media screen and (max-width: 767px) {
			top: 95%;
			right: 40px;
			width: 100px;
			transform: unset;
		}

		@media screen and (max-width: 639px) {
			right: 0;
			width: 100px;
		}

		@media screen and (max-width: 529px) {
			display: none;
		}
	}

	& .sb-video-section {
		margin-top: 73px;

		@media screen and (max-width: 767px) {
			margin-top: 40px;
		}

		@media screen and (max-width: 440px) {
			flex-direction: column;
		}

		& .sb-seat-btn {
			width: 185px;
			height: 44px;
			margin-left: 25px;
			border-radius: 5px;
			background: var(--color-primary);
			box-shadow: 7px 7px 0px #1b243f;
			transition: all 0.3s ease-in-out;

			@media screen and (max-width: 440px) {
				margin-top: 12px;
				margin-left: 0;
				width: 90%;
			}

			&:hover {
				box-shadow: 8px 8px 0px #1b243f;
			}
		}
	}
`;

export default Intro;
