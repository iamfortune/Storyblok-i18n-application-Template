import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { Blok } from "../../interfaces";

const Templates = ({ blok }: Blok) => (
	<main className="mt-4" {...storyblokEditable(blok)}>
		{blok?.body?.map((nestedBlok: any) => (
			<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
		))}
	</main>
);

export default Templates;
