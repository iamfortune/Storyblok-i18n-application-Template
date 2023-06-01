import styled from "styled-components";
import Marquee from "react-fast-marquee";

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

const Customers = () => {
	return (
		<Section className="w-full mx-auto">
			<h2 className="text-center" style={{ marginBottom: 40 }}>
				Trusted by top companies
			</h2>

			<div className="sb-customers-logos flex items-center justify-center">
				<Marquee
					speed={100}
					gradient={false}
					direction="left"
					pauseOnHover={true}
					className="flex items-center"
				>
					{customers.map((customer) => (
						<img {...customer} alt="customer" key={customer.src} />
					))}
				</Marquee>
			</div>
		</Section>
	);
};

const Section = styled.section`
	left: 0;
	right: 0;
	height: 225px;
	position: absolute;
	padding: 61px 0 60px;
	background: rgba(0, 179, 176, 0.12);

	& h2 {
		color: #828282;
		font-size: 24px;
		font-weight: 600;
		line-height: 29px;
	}

	& .sb-customers-logos {
		& img {
			margin-right: 100px !important;

			@media screen and (max-width: 767px) {
				margin-right: 50px !important;
			}
		}
	}
`;

export default Customers;
