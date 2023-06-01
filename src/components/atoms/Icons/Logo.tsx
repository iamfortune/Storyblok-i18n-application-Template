/* eslint-disable @next/next/no-img-element */
import { CSSProperties, FC } from "react";

interface LogoProps {
	width?: CSSProperties["width"];
	height?: CSSProperties["height"];
	className?: string;
}

const Logo: FC<LogoProps> = ({ className, height, width }) => {
	return (
		<img
			alt="Artsy"
			className={className}
			style={{ height, width }}
			src="/images/icons/logo.svg"
		/>
	);
};

export default Logo;
