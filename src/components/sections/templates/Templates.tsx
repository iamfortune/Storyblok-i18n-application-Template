import styled from "styled-components";
import TemplateCard from "../../composed/TemplateCard/TemplateCard";

const templates = [
	{
		iconSrc: "/images/icons/design.png",
		title: "Design",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
	},
	{
		iconSrc: "/images/icons/development.png",
		title: "Development",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
	},
	{
		iconSrc: "/images/icons/database.png",
		title: "Database",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
	},
	{
		iconSrc: "/images/icons/marketing.png",
		title: "Marketing",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
	},
	{
		iconSrc: "/images/icons/photography.png",
		title: "Photography",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
	},
	{
		iconSrc: "/images/icons/business.png",
		title: "Business",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
	},
];

const Templates = () => {
	return (
		<StyledDiv className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] sm:gap-[80px] lg:gap-[60px] xl:gap-[80px]">
			{templates.map((template) => (
				<TemplateCard
					{...template}
					key={template.title}
					className="col-span-1"
				/>
			))}
		</StyledDiv>
	);
};

const StyledDiv = styled.div`
	margin: 250px 0;
`;

export default Templates;
