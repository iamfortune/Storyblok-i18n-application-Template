export interface Blok {
	blok: any;
}

// make Blok a generic type
export interface BlokWithType<T> {
	blok: T;
}

export interface StoryblokImage {
	filename: string;
	alt: string;
}
