import styled from "styled-components";

const values = [
	{
		title: "Innovation",
		description:
			"We are committed to innovation in all aspects of our business, from the technology we use to the way we approach problem-solving. We believe that by staying ahead of the curve, we can provide our users with the best possible product development experience.",
	},
	{
		title: "Collaboration",
		description:
			"We know that successful product development requires collaboration between all stakeholders, including team members, customers, and partners. That's why we prioritize collaboration and provide features that facilitate teamwork and communication.",
	},
	{
		title: "Transparency",
		description:
			"We believe in transparency in everything we do, from our pricing plans to the way we handle user data. We believe that transparency builds trust and fosters a positive relationship with our users.",
	},
	{
		title: "Customer Centricity",
		description:
			"We are dedicated to putting our customers first and providing them with a product that meets their unique needs. We regularly seek feedback from our users and use that feedback to inform our product development decisions.",
	},
	{
		title: "Reliability",
		description:
			"We understand that our users rely on our platform to manage their product development processes, and we take that responsibility seriously. We are committed to providing a reliable platform that our users can count on.",
	},
	{
		title: "Continuous Improvement",
		description:
			"We believe in continuous improvement and are constantly looking for ways to make our platform better. We regularly review user feedback and use that feedback to inform our product roadmap, ensuring that our platform is always evolving to meet our users' needs.",
	},
];

const CoreValues = () => {
	return (
		<StyledDiv>
			<div className="custom-container">
				<h2 className="font-inter text-secondary">
					<span className="font-inter text-primary">Core</span> Values
				</h2>
				<div className="md:grid md:grid-cols-12 lg:gap-x-[18px] lg:gap-y-[106px] lg:gap-0 md:gap-[24px]">
					{values.map(({ title, description }) => (
						<div key={title} className="md:col-span-6 lg:col-span-4 flex md:mb-0 mb-10">
							<img src="/images/icons/shape.png" alt="shape" />
							<div className="">
								<h6>{title}</h6>
								<p>{description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</StyledDiv>
	);
};

const StyledDiv = styled.div`
	left: 0;
	right: 0;
  overflow: hidden;
	min-height: 736px;
	position: absolute;
	padding: 95px 0 94px;
	background: rgba(0, 179, 176, 0.12);

  @media screen and (max-width: 767px) {
    padding: 40px 0 40px;
  }

	& h2 {
		font-size: 40px;
		font-weight: 900;
		line-height: 48px;
		margin-bottom: 77px;

    @media screen and (max-width: 767px) {
      font-size: 32px;
      line-height: 38px;
      margin-bottom: 40px;
    }
	}

	& img {
		width: 29px;
		height: 32px;
		margin-right: 15px;
	}

	& h6 {
		font-size: 16px;
		font-weight: 600;
		line-height: 19px;
    margin-bottom: 7px;
	}

	& p {
		color: #4f4f4f;
		font-size: 14px;
		font-weight: 400;
		line-height: 168%;
	}
`;

export default CoreValues;
