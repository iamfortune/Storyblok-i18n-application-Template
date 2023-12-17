import { FC } from "react";
import styled from "styled-components";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { Blok } from "../../../interfaces";

const Templates: FC<Blok> = ({ blok }) => {
	console.log(blok);
	return (
		<StyledDiv
			{...storyblokEditable(blok)}
			className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] sm:gap-[80px] lg:gap-[60px] xl:gap-[80px]"
		>
			{blok?.list?.map((nestedBlok: any) => (
				<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
			))}
		</StyledDiv>
	);
};

const StyledDiv = styled.div`
	margin: 250px 0;
`;

export default Templates;
