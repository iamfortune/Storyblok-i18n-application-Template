/* eslint-disable react-hooks/exhaustive-deps */
import { ISbStoryData } from "@storyblok/react";
import { FC, useEffect, useState, createContext } from "react";
import { fetchStoryByLanguage } from "../utils";

interface Props {
	children: React.ReactNode;
}

export interface AppState {
	language: "en-us" | "de-de" | "fr";
	homeStory: ISbStoryData | null;
}

export interface IContext extends AppState {
	changeLanguage: (lang: AppState["language"]) => void;
}

export const AppContext = createContext<IContext>({
	homeStory: null,
	language: "en-us",
	changeLanguage: (lang: AppState["language"]) => {},
});

const Store: FC<Props> = ({ children }) => {
	const [sync, setSync] = useState(false);
	const [store, setStore] = useState<AppState>({
		language: "en-us",
		homeStory: null,
	});

	const syncToLocalStorage = () => {
		const language = localStorage.getItem("sb-intl-lang");

		if (language) {
			setStore({ ...store, language: language as AppState["language"] });
		}
	};

	const changeLanguage = (lang: AppState["language"]) => {
		localStorage.setItem("sb-intl-lang", lang);

		syncToLocalStorage();
		setSync(!sync);
	};

	useEffect(() => {
		syncToLocalStorage();
	}, [sync]);

	return (
		<AppContext.Provider
			value={{
				language: store.language,
				homeStory: store.homeStory,
				changeLanguage: (lang: AppState["language"]) => changeLanguage(lang),
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default Store;
