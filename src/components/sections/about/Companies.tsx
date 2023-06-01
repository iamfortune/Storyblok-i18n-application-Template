import styled from "styled-components";

const customers = [
	{
		height: 35,
		width: 84,
		src: "/images/icons/stripe.webp",
	},
	{
		height: 35,
		width: 163,
		src: "/images/icons/microsoft.webp",
	},
	{
		height: 35,
		width: 110,
		src: "/images/icons/airbnb.webp",
	},
	{
		height: 35,
		width: 107,
		src: "/images/icons/google.webp",
	},
	{
		height: 35,
		width: 164,
		src: "/images/icons/storyblok.webp",
	},
];

const Companies = () => {
	return (
		<StyledDiv>
			<h3 className="font-inter text-center xl:text-left">
				Trusted by folks at top companies
			</h3>

			<div className="flex items-center justify-center xl:justify-start flex-wrap mt-[40px]">
				{customers.map((customer) => (
					<img {...customer} alt="customer" key={customer.src} />
				))}
			</div>
		</StyledDiv>
	);
};

const StyledDiv = styled.div`
	margin-top: 800px;

	@media screen and (max-width: 441px) {
		margin-top: 500px;
	}

	& h3 {
		color: #828282;
		font-size: 24px;
		font-weight: 600;
		line-height: 29px;
		margin-left: 32px;

		@media screen and (max-width: 1280px) {
			margin-left: 0;
		}

		@media screen and (max-width: 767px) {
			font-size: 20px;
			line-height: 24px;
		}
	}

	& img {
		margin: 0 32px 65px 32px;

		@media screen and (max-width: 991px) {
			margin: 0 30px 40px 30px;
		}
	}
`;

export default Companies;
