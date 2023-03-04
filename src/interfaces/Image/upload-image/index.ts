export interface CreateImageArgs {
	data: {
		caption: string;
		image: string;
		createdAt: string;
	};
}

export interface CreateImageOutput {
	id: number;
	caption: string;
	image: string;
	createdAt: string;
}
