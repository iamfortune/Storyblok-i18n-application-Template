import { FC } from "react";
import styled from "styled-components";

interface Props {
	value: "monthly" | "yearly";
	className?: string;
	onSwitch: (val: Props["value"]) => void;
}

const PriceSwitch: FC<Props> = ({ value, onSwitch, className = "" }) => {
	return (
		<StyledButton
			title="Toggle theme"
			className={`flex items-center cursor-pointer ${className}`}
			onClick={() => onSwitch(value === "monthly" ? "yearly" : "monthly")}
		>
			<div
				className={value === "yearly" ? "translate-x-[21px]" : "translate-x-0"}
			/>
		</StyledButton>
	);
};

const StyledButton = styled.button`
	width: 45px;
	height: 24px;
	padding: 0 2px;
	border-radius: 12px;
	background: rgba(4, 9, 33, 0.32);

	& > div {
		width: 20px;
		height: 20px;
		background: #fff;
		border-radius: 12px;
		transition: all 0.4s ease;
	}
`;

export default PriceSwitch;
