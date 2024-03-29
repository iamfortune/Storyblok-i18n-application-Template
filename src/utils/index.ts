import {
	storyblokInit,
	apiPlugin,
	getStoryblokApi,
	ISbStoryParams,
} from "@storyblok/react";

storyblokInit({
	accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
	use: [apiPlugin],
});

const fetchStoryByLanguage = async (
	slug: string,
	language: "en-us" | "de-de" | "fr",
	releaseId?: string
) => {
	try {
		const sbParams: ISbStoryParams = {
			version: "draft", // or 'published'
			language,
			fallback_lang: "en-us",
			from_release: releaseId,
		};

		const storyblokApi = getStoryblokApi();

		const res = await storyblokApi?.get(`cdn/stories/${slug}`, sbParams);

		return res?.data?.story;
	} catch (error) {
		console.log(error);
	}
};

export { fetchStoryByLanguage };
