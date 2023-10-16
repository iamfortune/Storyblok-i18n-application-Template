import { ChangeEvent, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Footer = () => {
	const router = useRouter();
	const [email, setEmail] = useState("");

	const submitHandler = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(email);
		setEmail("");
	};

	const links = useMemo(() => {
		switch (router.query?.lang) {
			case "de-de":
				return [
					{
						name: "Karriere",
						href: "#",
					},
					{
						name: "Datenschutzrichtlinie",
						href: "#",
					},
					{
						name: "Geschäftsbedingungen",
						href: "#",
					},
				];
			case "fr":
				return [
					{
						name: "Carrières",
						href: "#",
					},
					{
						name: "Confidentialité",
						href: "#",
					},
					{
						name: "Termes et conditions",
						href: "#",
					},
				];
			default:
				return [
					{
						name: "Careers",
						href: "#",
					},
					{
						name: "Privacy Policy",
						href: "#",
					},
					{
						name: "Terms & Conditions",
						href: "#",
					},
				];
		}
	}, [router.query?.lang]);

	const headingText = useMemo(() => {
		switch (router.query?.lang) {
			case "de-de":
				return "Bleiben Sie mit den neuesten Informationen von uns auf dem Laufenden";
			case "fr":
				return "Restez à jour avec nos dernières nouveautés";
			default:
				return "Stay up to date with the latest from us";
		}
	}, [router.query?.lang]);

	const buttonText = useMemo(() => {
		switch (router.query?.lang) {
			case "de-de":
				return "Abonnieren";
			case "fr":
				return "S'abonner";
			default:
				return "Subscribe";
		}
	}, [router.query?.lang]);

	const placeholderText = useMemo(() => {
		switch (router.query?.lang) {
			case "de-de":
				return "Ihre E-Mail-Adresse";
			case "fr":
				return "Votre adresse e-mail";
			default:
				return "Your Email";
		}
	}, [router.query?.lang]);

	return (
		<StyledFooter className="flex flex-col items-center justify-end">
			<div className="sm:w-5/6 w-11/12 mx-auto">
				<h1 className="font-inter font-medium italic text-center">
					{headingText}
				</h1>
				<form
					onSubmit={submitHandler}
					className="flex sm:flex-row flex-col items-center justify-center"
				>
					<input
						type="email"
						value={email}
						name="email-address"
						placeholder={placeholderText}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<button type="submit" className="sm:ml-5 sm:mt-0 mt-4">
						{buttonText}
					</button>
				</form>

				<div className="sb-footer-links flex items-center justify-center sm:flex-nowrap flex-wrap">
					{links.map((link) => (
						<Link
							href={link.href}
							key={link.name}
							className="text-[#B2B3CF] block transition-all duration-300 ease-in-out whitespace-nowrap"
						>
							{link.name}
						</Link>
					))}
				</div>

				<p className="mt-7 sb-footer-tm">© 2023 Artsy </p>
			</div>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
	height: 681px;
	padding: 24px 0 127px;
	background: var(--color-secondary);

	@media (max-width: 500px) {
		height: 100%;
		padding: 60px 0 48px;
	}

	& h1 {
		color: #b2b3cf;
		font-size: 26px;
		line-height: 31px;
		margin-bottom: 28px;
		letter-spacing: 0.04em;

		@media (max-width: 639px) {
			font-size: 22px;
			line-height: 28px;
		}
	}

	& input {
		width: 400px;
		height: 60px;
		outline: none;
		color: #b2b3cf;
		font-size: 20px;
		padding: 0 35px;
		border-radius: 80px;
		background: transparent;
		border: 1px solid #83839a;
		transition: all 0.3s ease-in-out;

		&:focus {
			border: 1px solid #fff;
		}

		@media (max-width: 639px) {
			width: 100%;
			height: 50px;
			padding: 0 25px;
			font-size: 18px;
		}
	}

	& button {
		color: #fff;
		width: 179px;
		height: 60px;
		font-size: 22px;
		font-weight: 500;
		background: #49bbbd;
		border-radius: 60px;
		transition: all 0.3s ease-in-out;

		&:hover {
			opacity: 0.8;
		}

		@media (max-width: 639px) {
			width: 100%;
			height: 50px;
			font-size: 18px;
		}
	}

	& .sb-footer-links {
		margin-top: 96px;

		@media (max-width: 639px) {
			margin-top: 60px;
		}

		& a {
			line-height: 1;
			font-size: 22px;
			padding: 0 25px;
			text-align: center;
			letter-spacing: 0.04em;
			border-right: 1px solid #83839a;

			&:last-child {
				border-right: none;
				padding-right: 0;
			}

			&:hover {
				color: #fff;
			}

			@media (max-width: 639px) {
				font-size: 18px;
				padding: 0 15px;
				margin-bottom: 16px;
			}
		}
	}

	& .sb-footer-tm {
		color: #b2b3cf;
		font-size: 22px;
		line-height: 29px;
		text-align: center;
		letter-spacing: 0.04em;

		@media (max-width: 639px) {
			font-size: 18px;
		}
	}
`;

export default Footer;
