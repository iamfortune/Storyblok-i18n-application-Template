import "../styles/globals.css";
import type { AppProps } from "next/app";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "../components/sections/Page";
import Perk from "../components/atoms/Perk/Perk";
import About from "../components/sections/About";
import Intro from "../components/sections/home/Intro";
import Pricing from "../components/sections/home/Pricing";
import Features from "../components/sections/home/Features";
import Platform from "../components/sections/about/Platform";
import Workflows from "../components/sections/home/Workflows";
import Customers from "../components/sections/home/Customers";
import Companies from "../components/sections/about/Companies";
import AboutIntro from "../components/sections/about/AboutIntro";
import CoreValues from "../components/sections/about/CoreValues";
import Supercharge from "../components/sections/home/Supercharge";
import TemplatesComponent from "../components/sections/Templates";
import Templates from "../components/sections/templates/Templates";
import ContactUs from "../components/sections/templates/ContactUs";
import TemplateIntro from "../components/sections/templates/Intro";
import Testimonials from "../components/sections/home/Testimonials";
import PricingCard from "../components/composed/PricingCard/PricingCard";
import TeamAndCulture from "../components/sections/about/TeamAndCulture";
import TemplateCard from "../components/composed/TemplateCard/TemplateCard";

export default function App({ Component, pageProps }: AppProps) {
	storyblokInit({
		accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
		use: [apiPlugin],
		components: {
			Perk,
			Intro,
			About,
			Pricing,
			Features,
			Customers,
			Companies,
			Workflows,
			AboutIntro,
			page: Page,
			CoreValues,
			Supercharge,
			TemplateCard,
			TemplateIntro,
			TeamAndCulture,
			BitMore: Platform,
			ContactUs: ContactUs,
			PriceCard: PricingCard,
			TemplateBody: Templates,
			Testimonial: Testimonials,
			Templates: TemplatesComponent,
		},
	});

	return <Component {...pageProps} />;
}



