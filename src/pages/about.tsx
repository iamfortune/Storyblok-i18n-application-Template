import Layout from "../components/composed/Layout/Layout";
import Intro from "../components/sections/about/Intro";
import Companies from "../components/sections/about/Companies";
import TeamAndCulture from "../components/sections/about/TeamAndCulture";
import Supercharge from "../components/sections/home/Supercharge";
import Platform from "../components/sections/about/Platform";
import CoreValues from "../components/sections/about/CoreValues";

const Aboutpage = () => {
	return (
		<Layout>
			<>
				<Intro />
				<Companies />
				<TeamAndCulture />
				<CoreValues />
				<Platform />
				{/* <Supercharge /> */}
			</>
		</Layout>
	);
};

export default Aboutpage;
