export type ResponseReturnType<T = Record<string, any>[] | Record<string, any>> = {
	meta?:
		| {
				pagination: {
					page: number;
					pageSize: number;
					totalResults: number;
					unfilteredResults?: number | null;
				};
		  }
		| undefined;
	data: T;
};
