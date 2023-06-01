import styled from "styled-components";

const TeamAndCulture = () => {
	return (
		<StyledDiv>
			<div className="flex flex-col-reverse md:grid md:grid-cols-2 lg:gap-[70px] md:gap-[40px]">
				<div className="md:col-span-1">
					<img src="/images/team.webp" alt="team image" />
				</div>
				<div className="md:col-span-1 md:mt-6 md:mb-0 mb-10">
					<h3 className="font-inter text-secondary text-center md:text-left">
						The <span className="text-primary">Team</span>
					</h3>
					<p className="text-secondary text-center md:text-left">
						Our team is made up of experienced product managers, designers, and
						developers who understand the challenges of product development.
						We've worked with hundreds of teams across various industries, from
						startups to large enterprises, and we've seen first-hand the impact
						that effective product development can have on a business.
					</p>

					<div className="sb-btn-wrapper relative text-white">
						<button>Join Team</button>
						<img src="/images/hiring.webp" alt="we're hiring" />
					</div>
				</div>
			</div>

			<div className="md:grid md:grid-cols-2 lg:gap-[70px] md:gap-[40px]">
				<div className="md:col-span-1">
					<h3 className="font-inter text-secondary text-center md:text-left">
						Our <span className="text-primary">Culture</span>
					</h3>
					<p className="text-secondary text-center md:text-left">
						We're committed to providing the best possible experience for our
						users, which is why we offer a range of pricing options to fit your
						budget and requirements. We also offer dedicated support from our
						team of experts, who are always available to help you optimize your
						workflow and get the most out of our platform.
					</p>
				</div>

				<div className="md:col-span-1 md:mt-6 mt-10">
					<img src="/images/culture.webp" alt="Our culture" />
				</div>
			</div>
		</StyledDiv>
	);
};

const StyledDiv = styled.div`
	margin: 146px 0 120px;

	& > div {
		margin-bottom: 150px;

		@media screen and (max-width: 767px) {
			margin-bottom: 100px;
		}

		&:last-child {
			margin-bottom: 0;
		}

		& img {
			width: 568px;
			height: 486px;
			object-fit: cover;

			@media screen and (max-width: 767px) {
				width: 100%;
			}

			@media screen and (max-width: 639px) {
				height: 400px;
				object-fit: fill;
			}

			@media screen and (max-width: 500px) {
				height: 300px;
			}
		}

		& h3 {
			font-weight: 900;
			font-size: 40px;
			line-height: 48px;

			@media screen and (max-width: 1023px) {
				font-size: 32px;
				line-height: 38px;
			}

			& > span {
				font-size: 40px;
				font-weight: 900;
				line-height: 48px;

				@media screen and (max-width: 1023px) {
					font-size: 32px;
					line-height: 38px;
				}
			}
		}

		& p {
			font-size: 22px;
			font-weight: 500;
			margin: 26px 0 24px;
			line-height: 168.5%;

			@media screen and (max-width: 1023px) {
				font-size: 18px;
				line-height: 28px;
				margin: 16px 0 24px;
			}

			@media screen and (max-width: 639px) {
				font-size: 16px;
			}
		}

		& .sb-btn-wrapper {
			width: max-content;

			@media screen and (max-width: 767px) {
				width: 80%;
				margin: 0 auto;
			}

      @media screen and (max-width: 500px) {
        width: 100%;
      }

			& button {
				width: 157px;
				height: 44px;
				font-size: 15px;
				font-weight: 500;
				line-height: 20px;
				border-radius: 5px;
				background: #00b3b0;
				box-shadow: 7px 7px 0px #1b243f;
				transition: box-shadow 0.3s ease-in-out;

				@media screen and (max-width: 767px) {
					width: 100%;
					margin: 0 auto;
				}

				&:hover {
					box-shadow: 8px 8px 0px #1b243f;
				}
			}

			& img {
				top: 46px;
				left: 150px;
				width: 137px;
				height: 82px;
				position: absolute;

				@media screen and (max-width: 767px) {
					display: none;
				}
			}
		}
	}
`;

export default TeamAndCulture;
