import { FC, useMemo } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { Blok } from "../../../interfaces";

const TeamAndCulture: FC<Blok> = ({ blok }) => {

	const isMobile = useMediaQuery({ query: "(max-width: 639px)" });

	const height = isMobile ? 500 : 0;

	const optimizedImage1 = useMemo(() => {
		// Desctructure the filename and focus point from the image1 property.
		const { filename, focus } = blok?.image1;
		
		// If there is no filename, return null.
		if (!filename) return null;

		// If there is no focus point, return the filename as is.
		if (!focus) return filename;

		// Resize the image width & height
		let imageSource = `${filename}/m/1200x${height}`;

		// Add focus point filters to the image
		imageSource += `/filters:focal(${focus})`;

		return imageSource;
	}, [blok, height]);

	const optimizedImage2 = useMemo(() => {
		// Desctructure the filename and focus point from the image2 property.
		const { filename, focus } = blok?.image2;
		if (!focus) return filename;

		if (!filename) return null;

		// Resize the image width & height
		let imageSource = `${filename}/m/1200x${height}`;

		// Add focus point filters to the image
		imageSource += `/filters:focal(${focus})`;

		return imageSource;
	}, [blok, height]);

	return (
		<Section {...storyblokEditable(blok)}>
			<div className="flex flex-col-reverse md:grid md:grid-cols-2 lg:gap-[70px] md:gap-[40px]">
				<div className="md:col-span-1">
				<img src={optimizedImage1} alt={blok?.image1?.alt} />
				</div>
				<div className="md:col-span-1 md:mt-6 md:mb-0 mb-10">
					<div className="font-inter text-secondary text-center md:text-left">
						{render(blok?.heading1)}
					</div>
					<div className="text-secondary text-center md:text-left">
						{render(blok?.body1)}
					</div>

					<div className="sb-btn-wrapper relative text-white">
						<button>{blok?.buttonText}</button>
						<img src="/images/hiring.webp" alt="we're hiring" />
					</div>
				</div>
			</div>

			<div className="md:grid md:grid-cols-2 lg:gap-[70px] md:gap-[40px]">
				<div className="md:col-span-1">
					<div className="font-inter text-secondary text-center md:text-left">
						{render(blok?.heading2)}
					</div>
					<div className="text-secondary text-center md:text-left">
						{render(blok?.body2)}
					</div>
				</div>

				<div className="md:col-span-1 md:mt-6 mt-10">
					<img src={optimizedImage2} alt={blok?.image2?.alt} />
				</div>
			</div>
		</Section>
	);
};

const Section = styled.section`
	margin: 146px 0 120px;

	& > div {
		margin-bottom: 150px;

		@media screen and (max-width: 767px) {
			margin-bottom: 100px;
		}

		&:last-child {
			margin-bottom: 0;
		}


		& h3 {
			font-weight: 900;
			font-size: 40px;
			line-height: 48px;

			@media screen and (max-width: 1023px) {
				font-size: 32px;
				line-height: 38px;
			}

			& > span {
				font-size: 40px;
				font-weight: 900;
				line-height: 48px;

				@media screen and (max-width: 1023px) {
					font-size: 32px;
					line-height: 38px;
				}
			}
		}

		& p {
			font-size: 22px;
			font-weight: 500;
			margin: 26px 0 24px;
			line-height: 168.5%;

			@media screen and (max-width: 1023px) {
				font-size: 18px;
				line-height: 28px;
				margin: 16px 0 24px;
			}

			@media screen and (max-width: 639px) {
				font-size: 16px;
			}
		}

		& .sb-btn-wrapper {
			width: max-content;

			@media screen and (max-width: 767px) {
				width: 80%;
				margin: 0 auto;
			}

			@media screen and (max-width: 500px) {
				width: 100%;
			}

			& button {
				width: 157px;
				height: 44px;
				font-size: 15px;
				font-weight: 500;
				line-height: 20px;
				border-radius: 5px;
				background: #00b3b0;
				box-shadow: 7px 7px 0px #1b243f;
				transition: box-shadow 0.3s ease-in-out;

				@media screen and (max-width: 767px) {
					width: 100%;
					margin: 0 auto;
				}

				&:hover {
					box-shadow: 8px 8px 0px #1b243f;
				}
			}

			& img {
				top: 46px;
				left: 150px;
				width: 137px;
				height: 82px;
				position: absolute;

				@media screen and (max-width: 767px) {
					display: none;
				}
			}
		}
	}
`;

export default TeamAndCulture;
