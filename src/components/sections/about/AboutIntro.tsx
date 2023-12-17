import { FC } from "react";
import styled from "styled-components";
import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { Blok } from "../../../interfaces";

const AboutIntro: FC<Blok> = ({ blok }) => {
	return (
		<Section {...storyblokEditable(blok)}>
			<div className="w-full">
				<div className="custom-container relative">
					<h1 className="font-inter text-secondary">{blok?.headline}</h1>
					<div className="sb-body">{render(blok?.body)}</div>
					<button className="sb-btn flex items-center justify-center text-[15px] font-chakra text-white font-medium">
						{blok?.buttonText}
					</button>

					<div className="sb-video-wrapper flex flex-col items-center justify-center">
						<img
							alt="play icon"
							src="/images/icons/play.svg"
							style={{ width: 75, height: 75 }}
						/>
					</div>
				</div>
			</div>
		</Section>
	);
};

const Section = styled.section`
	left: 0;
	right: 0;
	top: 66px;
	width: 100%;
	height: 623px;
	position: absolute;
	padding: 139px 0;
	background: url("/images/backgrounds/about-intro-bg.webp") no-repeat center
		center/cover;

	@media screen and (max-width: 991px) {
		padding: 80px 0;
		height: 580px;
	}

	@media screen and (max-width: 767px) {
		padding: 64px 0;
	}

	@media screen and (max-width: 639px) {
		height: 450px;
		padding: 40px 0;
	}

	& h1 {
		font-size: 48px;
		max-width: 712px;
		font-weight: 900;
		line-height: 58px;

		@media screen and (min-width: 1561px) {
			max-width: 80%;
			font-size: 64px;
			line-height: 72px;
		}

		@media screen and (max-width: 991px) {
			font-size: 32px;
			line-height: 40px;
		}

		@media screen and (max-width: 441px) {
			font-size: 24px;
			line-height: 32px;
		}
	}

	& .sb-body {
		font-size: 20px;
		max-width: 535px;
		font-weight: 400;
		margin: 20px 0 25px;
		line-height: 168.5%;

		@media screen and (max-width: 992px) {
			max-width: 90%;
		}

		@media screen and (max-width: 639px) {
			font-size: 16px;
			line-height: 24px;
			padding-bottom: 30px;
		}
	}

	& .sb-btn {
		width: 172px;
		height: 44px;
		font-weight: 500;
		border-radius: 5px;
		background: var(--color-primary);
		box-shadow: 7px 7px 0px #1b243f;
		transition: all 0.3s ease-in-out;

		@media screen and (max-width: 500px) {
			width: 100%;
		}

		&:hover {
			box-shadow: 8px 8px 0px #1b243f;
		}
	}

	& .sb-video-wrapper {
		right: 0;
		top: 70%;
		width: 500px;
		height: 334px;
		position: absolute;
		border-radius: 20px;
		box-shadow: 0px 33px 40px rgba(0, 0, 0, 0.12);
		background: url("https://plus.unsplash.com/premium_photo-1682140943040-088cb75d65b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")
			no-repeat center center/cover;

		@media screen and (max-width: 991px) {
			width: 100%;
			margin-top: 40px;
			position: relative;
		}

		@media screen and (max-width: 639px) {
			width: 100%;
		}

		@media screen and (max-width: 441px) {
			display: none;
		}

		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.5);
			border-radius: 20px;
		}

		& img {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: 1;
			transform: translate(-50%, -50%);
		}
	}
`;

export default AboutIntro;
