/* eslint-disable @next/next/no-img-element */
import { FC, useState } from "react";
import styled from "styled-components";

interface Props {
	options: string[];
	className?: string;
	selectedOption: string;
	onSelect: (option: string) => void;
}

const LanguageDropdown: FC<Props> = ({
	className,
	options,
	onSelect,
	selectedOption,
}) => {
	const [showDropdown, setShowDropdown] = useState(false);

	let timeOutId: number | any = 0;

	const onBlurHandler = () => {
		timeOutId = setTimeout(() => {
			setShowDropdown(false);
		}, 10);
	};

	const onFocusHandler = () => {
		clearTimeout(timeOutId);
	};

	return (
		<Wrapper
			tabIndex={2}
			onBlur={onBlurHandler}
			onFocus={onFocusHandler}
			className={`relative ${className} transition-all duration-300 ease-in-out`}
			style={{
				border: showDropdown ? "1px solid #000" : "1px solid #e0e0e0",
			}}
		>
			<button
				className="flex items-center justify-between w-full"
				onClick={() => setShowDropdown(!showDropdown)}
			>
				<p className="text-[12px] whitespace-nowrap">{selectedOption}</p>
				<img
					alt="dropdown"
					className="ml-1.5"
					style={{ width: 18, height: 8 }}
					src="/images/icons/caveat-down.svg"
				/>
			</button>

			<div
				className={`sb-dropdown flex flex-col items-start left-0 top-[110%]  transition-all duration-300 ease-in-out ${
					showDropdown
						? "opacity-100 pointer-events-auto"
						: "opacity-0  pointer-events-none"
				}`}
			>
				{options.map((option) => (
					<button
						key={option}
						className="sb-dropdown-item text-left"
						style={{
							background: selectedOption === option ? "#f7f7f7" : "transparent",
						}}
						onClick={() => {
							onSelect(option);
							setShowDropdown(false);
						}}
					>
						{option}
					</button>
				))}
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding: 7px 14px;
	border-radius: 8px;

	& > .sb-dropdown {
		position: absolute;
		z-index: 1000;
		width: 180px;
		background: #ffffff;
		border: 1px solid #1b243f;
		padding: 0px 0px;
		border-radius: 8px;

		& > .sb-dropdown-item {
			width: 100%;
			color: #1b243f;
			display: block;
			font-size: 12px;
			padding: 8px 14px;
			transition: all 0.3s ease-in-out;

			&:first-child {
				border-radius: 8px 8px 0px 0px;
			}

			&:last-child {
				border-radius: 0px 0px 8px 8px;
			}

			&:hover {
				background: #f7f7f7 !important;
			}
		}
	}
`;

export default LanguageDropdown;
