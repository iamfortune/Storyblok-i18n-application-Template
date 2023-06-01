import Layout from "../components/composed/Layout/Layout";
import Intro from "../components/sections/templates/Intro";
import Templates from "../components/sections/templates/Templates";
import ContactUs from "../components/sections/templates/ContactUs";

const TemplatesPage = () => {
	return (
		<Layout>
			<>
        <Intro />
        <Templates />
        <ContactUs />
			</>
		</Layout>
	);
};

export default TemplatesPage;
