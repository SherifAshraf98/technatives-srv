import { validateNumberGreaterThanOrEqualOneQP } from './validators';

export const getResourceParams = <T extends Record<string, any>>(queryParams: any, keys: string[]): T => {
	const maxPageSize = 100;

	const paramsMap: Record<string, any> = {
		page: validateNumberGreaterThanOrEqualOneQP(queryParams?.page) ? +queryParams.page : 1,
		pageSize: validateNumberGreaterThanOrEqualOneQP(queryParams?.pageSize)
			? +queryParams.pageSize > maxPageSize
				? maxPageSize
				: +queryParams.pageSize
			: 10,
	};
	return keys.reduce((p, c) => {
		Object.assign(p, { [c]: paramsMap[c] });
		return p;
	}, {} as T);
};
