import { getStoryblokApi, ISbStoryParams } from "@storyblok/react";

const fetchStoryByLanguage = async (
	slug: string,
	language: "en-us" | "de-de" | "fr"
) => {
	try {
		const sbParams: ISbStoryParams = {
			version: "draft", // or 'published'
			language,
			fallback_lang: "en-us",
		};

		const storyblokApi = getStoryblokApi();

		const res = await storyblokApi?.get(`cdn/stories/${slug}`, sbParams);

		return res?.data?.story;
	} catch (error) {
		console.log(error);
	}
};

export { fetchStoryByLanguage };
