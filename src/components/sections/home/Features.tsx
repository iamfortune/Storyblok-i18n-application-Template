import styled from "styled-components";

const features = [
	{
		iconUrl: "/images/icons/idea.svg",
		title: "Idea Management",
		description:
			"Capture and organize your ideas in one place, and collaborate with your team to refine them into actionable plans.",
	},
	{
		iconUrl: "/images/icons/roadmap.svg",
		title: "Roadmap Planning",
		description:
			"Visualize your product development timeline and prioritize tasks to ensure you stay on track.",
	},
	{
		iconUrl: "/images/icons/project.svg",
		title: "Project Management",
		description:
			"Assign tasks, set deadlines, and track progress in real-time to keep everyone on the same page.",
	},
	{
		iconUrl: "/images/icons/feedback.svg",
		title: "Feedback Collection",
		description:
			"Gather feedback from stakeholders and customers to ensure your product meets their needs.",
	},
];

const Features = () => {
	return (
		<Section className="mx-auto">
			<header className="mx-auto">
				<h1 className="text-center text-secondary font-inter">
					Features <span className="text-primary">uniquely</span> tailored for
					you
				</h1>
				<p className="text-center">
					Our tool is designed to be flexible and customizable to fit your
					unique needs. Whether you're a startup looking to launch your first
					product or a large enterprise managing a portfolio of products, our
					platform can help you stay organized and focused on your goals.
				</p>
			</header>

			<div className="flex flex-col items-center justify-center">
				<div className="grid lg:grid-cols-2 grid-cols-1 gap-[74px] w-full">
					{features.map((feature) => (
						<FeatureCard key={feature.title}>
							<img src={feature.iconUrl} alt="feature-icon" />
							<h3 className="font-inter text-secondary">{feature.title}</h3>
							<p>{feature.description}</p>
						</FeatureCard>
					))}
				</div>
			</div>
		</Section>
	);
};

const Section = styled.section`
	margin-top: 430px;

	& > header {
		max-width: 734px;

		@media screen and (max-width: 539px) {
			width: 100%;
		}

		& h1 {
			font-weight: 800;
			font-size: 64px;
			line-height: 77px;
			margin-bottom: 26px;

			@media screen and (max-width: 639px) {
				font-size: 48px;
				line-height: 60px;
			}

			@media screen and (max-width: 500px) {
				font-size: 36px;
				line-height: 50px;
				margin-bottom: 16px;
			}
		}

		& > p {
			font-weight: 400;
			font-size: 20px;
			line-height: 168.5%;
			margin-bottom: 86px;

			@media screen and (max-width: 639px) {
				margin-top: 16px;
			}
		}
	}
`;

const FeatureCard = styled.div`
	background: #fff;
	max-width: 551px;
	height: max-content;
	border-radius: 16px;
	padding: 59px 57px 72px;
	border: 2px solid var(--color-primary);
	box-shadow: 9px 9px 0px var(--color-primary);

	@media screen and (max-width: 1023px) {
		padding: 40px 30px 50px;
		margin: 0 auto;
	}

	@media screen and (max-width: 639px) {
		padding: 24px 24px;
		margin: 0 auto;
	}

	&:nth-child(even) {
		margin-top: 24px;

		@media screen and (max-width: 1023px) {
			margin-top: 0;
		}
	}

	& > img {
		width: 64px;
		height: 64px;
	}

	& > h3 {
		font-size: 20px;
		font-weight: 700;
		margin: 9px 0 12px;
		line-height: 168.5%;
	}

	& > p {
		font-size: 20px;
		line-height: 168.5%;
	}
`;

export default Features;
