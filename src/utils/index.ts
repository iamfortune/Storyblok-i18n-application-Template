import { getStoryblokApi, ISbStoryParams } from "@storyblok/react";
import { AppState } from "../store";

const fetchStoryByLanguage = async (
	slug: string,
	language: AppState["language"]
) => {
	try {
		const sbParams: ISbStoryParams = {
			version: "draft", // or 'published'
			language,
		};

		const storyblokApi = getStoryblokApi();

		const res = await storyblokApi?.get(`cdn/stories/${slug}`, sbParams);

		return res?.data?.story;
	} catch (error) {
		console.log(error);
	}
};

export { fetchStoryByLanguage };
