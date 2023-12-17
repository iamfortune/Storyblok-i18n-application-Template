import { NextPageContext } from "next";
import { useStoryblokState, StoryblokComponent } from "@storyblok/react";
import { fetchStoryByLanguage } from "../utils";
import Layout from "../components/composed/Layout/Layout";
import Spinner from "../components/atoms/Spinner/Spinner";

const Homepage = ({ initialStory }: any) => {
	const sbStory = useStoryblokState(initialStory);

	return (
		<>
			<Layout>
				<div className="md:mt-20 mt-8">
					{!sbStory || !(sbStory as any)?.content ? (
						<div className="flex flex-col items-center">
							<Spinner size={100} />
						</div>
					) : (
						<StoryblokComponent blok={sbStory.content} />
					)}
				</div>
			</Layout>
		</>
	);
};

export async function getServerSideProps(context: NextPageContext) {
	const { query } = context;
	const lang = query?.lang;

	const language = (lang || "en-us") as "en-us" | "de-de" | "fr";

	const res = await fetchStoryByLanguage("home", language);

	return {
		props: {
			initialStory: res || false,
			key: res?.data ? res?.data?.story.id : false,
		},
	};
}

export default Homepage;
