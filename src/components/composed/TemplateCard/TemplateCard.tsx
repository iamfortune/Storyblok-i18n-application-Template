import { FC } from "react";
import styled from "styled-components";

interface Props {
	title: string;
	iconSrc: string;
	className?: string;
	description: string;
}

const TemplateCard: FC<Props> = ({
	title,
	iconSrc,
	description,
	className = "",
}) => {
	return (
		<StyledDiv className={`${className} flex flex-col items-center`}>
			<img src={iconSrc} alt={title} />
			<h2 className="font-nunito">{title}</h2>
			<p className="font-nunito">{description}</p>
		</StyledDiv>
	);
};

const StyledDiv = styled.div`
	background: #fff;
	border-radius: 20px;
	padding: 30px 32px 59px;
	box-shadow: 0px 18.83px 47.08px rgba(47, 50, 125, 0.1);

	@media screen and (max-width: 767px) {
		max-width: 350px;
		margin: 0 auto;
	}

	@media screen and (max-width: 639px) {
		padding: 24px 24px 32px;
	}

	& > img {
		width: 90px;
		height: 90px;

		@media screen and (max-width: 767px) {
			width: 60px;
			height: 60px;
		}
	}

	& > h2 {
		font-size: 30px;
		font-weight: 600;
		line-height: 45px;
		margin: 20px 0 25px;
		letter-spacing: 0.02em;

		@media screen and (max-width: 767px) {
			font-size: 24px;
			line-height: 36px;
			margin: 16px 0;
		}
	}

	& > p {
		color: #696984;
		font-size: 18px;
		font-weight: 400;
		line-height: 27px;
		text-align: center;
		letter-spacing: 0.02em;

		@media screen and (max-width: 767px) {
			font-size: 16px;
			line-height: 24px;
		}
	}
`;

export default TemplateCard;
