export interface GetImagesArgs {
	queryOffset: number;
	pageSize: number;
}

export interface GetImagesOutput {
	id: number;
	caption: string;
	image: string;
	createdAt: string;
}

export interface GetImagesCountOutput {
	count: string;
}

export enum ListImagesQueryParams {
	Page = 'page',
	PageSize = 'pageSize',
}
