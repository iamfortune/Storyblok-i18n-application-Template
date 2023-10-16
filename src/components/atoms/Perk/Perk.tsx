import { FC } from "react";
import { storyblokEditable } from "@storyblok/react";
import { Blok } from "../../../interfaces";

const Perk: FC<Blok> = ({ blok }) => {
	const { text, available } = blok;

	return (
		<div {...storyblokEditable(blok)} className="flex items-center">
			<div className="flex flex-col items-center justify-center">
				{available ? (
					<img src="/images/icons/checkmark.svg" alt="Check mark" />
				) : (
					<img src="/images/icons/cancel.svg" alt="Not available" />
				)}
			</div>
			<p className="font-manrope ml-[17px]">{text}</p>
		</div>
	);
};

export default Perk;
