import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { Blok } from "../../interfaces";

const Page = ({ blok }: Blok) => (
	<main className="mt-4" {...storyblokEditable(blok)}>
		{blok?.body?.map((nestedBlok: any) => (
			<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
		))}
	</main>
);

export default Page;
