export interface IPost {
	id: string;
	userId: string;
	title: string;
	body: string;
}

export interface IPostStore {
	posts: IPost[];
}

export interface IPostDetailsStore {
	currentPost: IPost | null;
}
