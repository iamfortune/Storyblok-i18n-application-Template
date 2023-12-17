import { FC } from "react";
import styled from "styled-components";
import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { Blok } from "../../../interfaces";

const Platform: FC<Blok> = ({ blok }) => {
	return (
		<Section {...storyblokEditable(blok)}>
			<div className="flex flex-col-reverse md:grid md:grid-cols-2 lg:gap-[70px] md:gap-[40px]">
				<div className="md:col-span-1">
					<img src={blok?.image?.filename} alt={blok?.image?.alt} />
				</div>
				<div className="md:col-span-1 md:mt-6 md:mb-0 mb-10">
					<div className="font-inter text-secondary text-center md:text-left">
						{render(blok?.heading)}
					</div>
					<div className="text-secondary text-center md:text-left">
						{render(blok?.body)}
					</div>

					<div className="sb-btn-wrapper relative text-white">
						<button>{blok.buttonText}</button>
					</div>
				</div>
			</div>
		</Section>
	);
};

const Section = styled.section`
	margin: 979px 0 120px;

	@media screen and (max-width: 1279px) {
		margin-top: 1100px;
	}

	@media screen and (max-width: 767px) {
		margin-top: 1300px;
	}

	@media screen and (max-width: 540px) {
		margin-top: 1400px;
	}

	@media screen and (max-width: 450px) {
		margin-top: 1500px;
	}

	@media screen and (max-width: 400px) {
		margin-top: 1700px;
	}

	@media screen and (max-width: 320px) {
		margin-top: 1900px;
	}

	& > div {
		margin-bottom: 150px;

		@media screen and (max-width: 767px) {
			margin-bottom: 100px;
		}

		& img {
			width: 568px;
			height: 486px;
			object-fit: cover;

			@media screen and (max-width: 767px) {
				width: 100%;
			}

			@media screen and (max-width: 639px) {
				height: 400px;
				object-fit: fill;
			}

			@media screen and (max-width: 500px) {
				height: 300px;
			}
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
		}
	}
`;

export default Platform;
