import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Logo from "../../atoms/Icons/Logo";
import LanguageDropdown from "../../atoms/LanguageDropdown/LanguageDropdown";

export interface LanguageOption {
	title: string;
	code: "en-us" | "de-de" | "fr";
}

const dropdownOptions: LanguageOption[] = [
	{ title: "English [US]", code: "en-us" },
	{ title: "German [DE]", code: "de-de" },
	{ title: "French [FR]", code: "fr" },
];

const Navbar = () => {
	const router = useRouter();
	const [showDropdown, setShowDropdown] = useState(false);

	const isNotMobile = useMediaQuery({ query: "(min-width: 640px)" });

	const language = (router.query?.lang || "en-us") as "en-us" | "de-de" | "fr";

	const links = useMemo(() => {
		switch (language) {
			case "de-de":
				return [
					{
						name: "Um",
						href: "/about",
					},
					{
						name: "Vorlagen",
						href: "/templates",
					},
				];
			case "fr":
				return [
					{
						name: "À propos",
						href: "/about",
					},
					{
						name: "Modèles",
						href: "/templates",
					},
				];
			default:
				return [
					{
						name: "About",
						href: "/about",
					},
					{
						name: "Templates",
						href: "/templates",
					},
				];
		}
	}, [language]);

	const buttonText = useMemo(() => {
		switch (language) {
			case "de-de":
				return "Loslegen";
			case "fr":
				return "Commencer";
			default:
				return "Get Started";
		}
	}, [language]);

	useEffect(() => {
		if (!isNotMobile) {
			setShowDropdown(false);
		}
	}, [isNotMobile]);

	return (
		<>
			<nav className="h-[66px] w-full relative flex items-center justify-between py-3 mw:px-4 sm:px-6 px-4">
				<div className="flex items-center">
					<Link href="/" className="mr-4">
						<Logo height="35px" />
					</Link>

					<div style={{ width: 135 }}>
						<LanguageDropdown options={dropdownOptions} />
					</div>
				</div>

				<div className="sm:flex hidden items-center">
					{links.map((link) => (
						<Link
							href={link.href}
							key={link.name}
							className="text-secondary text-sm font-semibold mr-4 transition-all duration-300 ease-in-out hover:text-slate-500"
						>
							{link.name}
						</Link>
					))}
					<Button className="ml-12">{buttonText}</Button>
				</div>

				<button
					className="sm:hidden flex flex-col ml-4"
					onClick={() => setShowDropdown(!showDropdown)}
				>
					<div
						style={{ background: "black" }}
						className={`w-[18.85px] h-[2px] mb-2 transition duration-200 ${
							showDropdown &&
							"transform rotate-45 translate-x-[3px] translate-y-2"
						}`}
					/>
					<div
						style={{ background: "black" }}
						className={`w-[18.85px] h-[2px] transition duration-200 ${
							showDropdown &&
							"transform -rotate-45 translate-x-[3px] -translate-y-[2px]"
						}`}
					/>
				</button>

				<div className="sm:hidden block absolute top-[99%] w-full right-0 left-0 z-[100]">
					<Dropdown
						className={`flex flex-col px-5 py-6 mx-auto bg-white ${
							showDropdown ? "opacity-100 pointer-events-auto" : "opacity-0"
						}`}
					>
						<div className="flex flex-col items-start">
							{links.map((link) => (
								<Link
									href={link.href}
									key={link.name}
									className="text-secondary text-sm font-semibold mb-4 transition-all duration-300 ease-in-out hover:text-slate-500"
								>
									{link.name}
								</Link>
							))}
						</div>
						<Button className="mt-3">{buttonText}</Button>
					</Dropdown>
				</div>
			</nav>

			<BackDrop
				onClick={() => setShowDropdown(false)}
				className={`
        ${
					showDropdown
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				}
      `}
			/>
		</>
	);
};

const Button = styled.button`
	font-size: 12px;
	border-radius: 2px;
	padding: 6px 10px;
	border: 2px solid #00b3b0;
	box-shadow: 3px 2px 0px #1b243f;
	transition: all 0.3s ease-in-out;

	@media screen and (max-width: 640px) {
		padding: 10px;
		font-size: 14px;
		font-weight: 600;
	}

	&:hover {
		box-shadow: 4px 3px 0px #1b243f;
	}
`;

const Dropdown = styled.div`
	width: 80vw;
	border-radius: 0 0 4px 4px;
	transition: all 0.3s ease-in-out;

	@media screen and (max-width: 500px) {
		width: 100%;
	}
`;

const BackDrop = styled.div`
	position: fixed;
	top: 66px;
	left: 0;
	z-index: 10;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.5);
	transition: all 0.3s ease-in-out;
`;

export default Navbar;
