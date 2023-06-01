import Layout from "../components/composed/Layout/Layout";
import Intro from "../components/sections/home/Intro";
import Customers from "../components/sections/home/Customers";
import Features from "../components/sections/home/Features";
import Testimonials from "../components/sections/home/Testimonials";
import Pricing from "../components/sections/home/Pricing";
import Workflows from "../components/sections/home/Workflows";
import Supercharge from "../components/sections/home/Supercharge";

const Homepage = () => {
	return (
		<Layout>
			<>
				<Intro />
				<Customers />
				<Features />
				<Testimonials />
				<Pricing />
				<Workflows />
				<Supercharge />
			</>
		</Layout>
	);
};

export default Homepage;
