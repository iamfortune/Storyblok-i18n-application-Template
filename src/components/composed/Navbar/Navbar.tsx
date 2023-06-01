import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Logo from "../../atoms/Icons/Logo";
import LanguageDropdown from "../../atoms/LanguageDropdown/LanguageDropdown";

const dropdownOptions = ["English [US]", "French [FR]", "German [DE]"];
const links = [
	{
		name: "About",
		href: "/about",
	},
	{
		name: "Templates",
		href: "/templates",
	},
];
const Navbar = () => {
	const [showDropdown, setShowDropdown] = useState(false);
	const [selectedLanguage, setSelectedLanguage] = useState(dropdownOptions[0]);

	const isNotMobile = useMediaQuery({ query: "(min-width: 640px)" });

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
						<LanguageDropdown
							options={dropdownOptions}
							selectedOption={selectedLanguage}
							onSelect={(option) => setSelectedLanguage(option)}
						/>
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
					<Button className="ml-12">Get Started</Button>
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
						<Button className="mt-3">Get Started</Button>
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
