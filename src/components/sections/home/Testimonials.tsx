import React, { Fragment } from "react";
import styled from "styled-components";

const testimonials = [
	{
		rating: 5,
		reviewerName: "Gigi Wrights",
		companyLogo: "/images/icons/airbnb.webp",
		reviewerImage: "/images/testimonial.webp",
		testimony:
			"We used to struggle with keeping track of our development process and collaborating effectively, but with this tool, everything is in one place. We've been able to streamline our workflow, track progress in real-time, and get valuable feedback from our stakeholders.",
	},
];

const Testimonials = () => {
	return (
		<Section className="flex lg:flex-row flex-col justify-between">
			{testimonials.map(
				({ reviewerName, rating, companyLogo, testimony, reviewerImage }) => (
					<Fragment key={reviewerName}>
						<header>
							<div className="flex items-center lg:justify-start justify-center">
								<hr />
								<h3 className="font-nunito text-primary">TESTIMONIAL</h3>
							</div>

							<h2 className="font-inter text-secondary lg:text-left text-center">
								What They Say?
							</h2>
							<p className="lg:text-left text-center w-11/12 mx-auto">
								With over 20k positive reviews, we are proud to believe we are
								getting a lot done correctly.
							</p>
						</header>

						<div className="sb-testimonial-img relative lg:block  items-end">
							<img src={reviewerImage} alt="testimonial" />

							<div className="sb-testimony lg:absolute lg:right-[45%] lg:top-[65%]">
								<p className="font-nunito">{testimony}</p>

								<div className="flex items-center justify-between flex-wrap">
									<div>
										<h6 className="font-inter">{reviewerName}</h6>
										<img
											alt="Company"
											src={companyLogo}
											style={{ width: 53, height: 17, opacity: 0.8 }}
										/>
									</div>

									<div className="sb-rating flex items-center">
										{Array.from({ length: rating }).map((_, i) => (
											<img
												key={i}
												alt="rating"
												src="/images/icons/star.svg"
												style={{ width: 20, height: 19 }}
											/>
										))}
									</div>
								</div>
							</div>
						</div>
					</Fragment>
				)
			)}
		</Section>
	);
};

const Section = styled.section`
	margin: 174px 0 266px;

	@media screen and (max-width: 767px) {
		margin: 174px 0 200px;
	}

	& header {
		max-width: 475px;

		@media screen and (max-width: 1023px) {
			max-width: 100%;
		}

		& > div {
			margin-bottom: 32px;

			& > hr {
				width: 80px;
				height: 3px;
				margin-right: 30px;
				background: var(--color-primary);
			}

			& > h3 {
				font-weight: 400;
				font-size: 20px;
				line-height: 27px;
				letter-spacing: 0.2rem;
			}
		}

		& > h2 {
			font-size: 60px;
			font-weight: 700;
			line-height: 72px;
			margin-bottom: 38px;

			@media screen and (max-width: 639px) {
				font-size: 36px;
				line-height: 56px;
				margin-bottom: 24px;
			}
		}

		& > p {
			color: #696984;
			font-size: 26px;
			font-weight: 400;
			line-height: 160%;
			letter-spacing: 0.02em;

			@media screen and (max-width: 639px) {
				font-size: 24px;
			}
		}
	}

	& .sb-testimonial-img {
		@media screen and (max-width: 1023px) {
			max-width: 100%;
			margin-top: 32px;
			margin-left: auto;
			margin-right: auto;
		}

		& > img {
			margin: auto;
			display: block;
			max-width: 448px;
			max-height: 560px;

			@media screen and (max-width: 1023px) {
				max-height: 560px !important;
				max-width: 100% !important;
			}

			@media screen and (max-width: 639px) {
				display: none;
			}
		}

		& .sb-testimony {
			width: 569px;
			background: #fff;
			height: max-content;
			padding: 15px 31px 28px;
			border-radius: 10px 20px 20px 10px;
			border-left: 11px solid var(--color-primary);
			box-shadow: 2px 4px 60px rgba(41, 44, 124, 0.1);

			@media screen and (max-width: 1023px) {
				width: 100%;
				margin-top: 24px;
			}

			@media screen and (max-width: 639px) {
				padding: 12px 16px 16px;
			}

			& > p {
				color: #5f5f7e;
				font-size: 16px;
				font-weight: 400;
				max-width: 446px;
				line-height: 180%;
				letter-spacing: 0.02em;
			}

			& > div {
				margin-top: 25px;

				& h6 {
					color: #5f5f7e;
					font-size: 16px;
					font-weight: 600;
					line-height: 180%;
					margin-bottom: 3px;
				}

				& .sb-rating {
					margin: 10px 0;

					& > img {
						margin-right: 4px;

						&:last-child {
							margin-right: 0;
						}
					}
				}
			}
		}
	}
`;

export default Testimonials;
