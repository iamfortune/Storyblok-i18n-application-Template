import { FC, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { Blok } from "../../../interfaces";

const Intro: FC<Blok> = ({ blok }) => {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");

	const language = (router.query?.lang || "en-us") as "en-us" | "de-de" | "fr";

	return (
		<Section
			className="w-full"
			language={language}
			{...storyblokEditable(blok)}
		>
			<div className="sb-bg" />

			<div className="text-secondary font-inter text-center">
				{render(blok?.heading)}
			</div>
			<div className="text-center">{render(blok?.body)}</div>

			<form onSubmit={(e) => e.preventDefault()} className="relative">
				<input
					type="search"
					value={searchTerm}
					name="search-template"
					placeholder={blok?.inputPlaceholder}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<button type="submit">{blok?.buttonText}</button>
			</form>
		</Section>
	);
};

const Section = styled.section<{ language: "en-us" | "de-de" | "fr" }>`
	height: 333px;
	padding: 89px 0 0;

	& > .sb-bg {
		left: 0;
		right: 0;
		top: 66px;
		width: 100%;
		position: absolute;
		background: url("/images/backgrounds/templates-intro-bg.webp") no-repeat
			center center/cover;
		height: ${({ language }) => (language !== "en-us" ? "400px" : "333px")};

		@media screen and (max-width: 991px) {
			padding: 80px 0;
			height: 333px;
		}

		@media screen and (max-width: 767px) {
			padding: 64px 0;
		}

		@media screen and (max-width: 639px) {
			// height: 450px;
			padding: 40px 0;
		}
	}

	& h1 {
		font-size: 48px;
		font-weight: 900;
		line-height: 58px;

		@media screen and (max-width: 991px) {
			font-size: 32px;
			line-height: 40px;
		}

		@media screen and (max-width: 441px) {
			font-size: 24px;
			line-height: 32px;
		}
	}

	& p {
		font-size: 20px;
		font-weight: 400;
		max-width: 608px;
		line-height: 168.5%;
		margin: 20px auto 0;

		@media screen and (max-width: 992px) {
			max-width: 90%;
		}

		@media screen and (max-width: 639px) {
			font-size: 16px;
			line-height: 24px;
			padding-bottom: 30px;
		}
	}

	& > form {
		max-width: 994px;
		margin: 52px auto 0;
		filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.11));

		@media screen and (max-width: 639px) {
			margin-top: 28px;
		}

		& > input {
			width: 100%;
			height: 73px;
			outline: none;
			display: block;
			padding: 0 30px;
			font-size: 20px;
			font-weight: 400;
			background: #fff;
			line-height: 30px;
			border-radius: 10px;
			letter-spacing: 0.04em;
			transition: border 0.3s ease-in-out;

			@media screen and (max-width: 639px) {
				height: 56px;
				font-size: 18px;
				padding: 0 20px;
				margin-top: 10px;
				position: relative;
			}

			&:focus {
				border: 1px solid var(--color-primary);
			}
		}

		& > button {
			top: 5px;
			right: 5px;
			color: #fff;
			width: 175px;
			height: 63px;
			font-size: 24px;
			font-weight: 600;
			line-height: 31px;
			position: absolute;
			border-radius: 12px;
			background: var(--color-primary);
			transition: background 0.5s ease-in-out;

			@media screen and (max-width: 639px) {
				top: 0px;
				right: 0px;
				width: 100%;
				height: 56px;
				font-size: 20px;
				margin-top: 14px;
				position: relative;
				border-radius: 8px;
			}

			&:hover {
				background: #158e8a;
			}
		}
	}
`;

export default Intro;
