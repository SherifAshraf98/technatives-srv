import { ResponseReturnType } from './types';

export const handleError = (error: any, extra?: string) => {
	if (!(error.statusCode || error.code) || (error.statusCode || error.code) > 400) console.error(error);
	else console.log(error);
	const errorMap: Record<number, string> = {
		204: 'No Content',
		400: 'Bad Request',
		401: 'Unauthorized',
		403: 'Forbidden',
		404: 'Not Found',
		405: 'Method Not Allowed',
		409: 'Conflict',
		422: 'Unprocessable Entity',
		500: 'Internal Server Error',
		503: 'Service Unavailable',
	};
	const statusText = errorMap[error.statusCode || error.code];
	const message = error.customMessage || statusText;
	return message
		? {
				error: {
					statusCode: error.statusCode || error.code,
					data: extra ? { message: extra } : { message },
				},
		  }
		: {
				error: {
					statusCode: 500,
					data: extra ? { message: `Internal Server Error - ${extra}` } : { message: `Internal Server Error` },
				},
		  };
};

export const response = <T = Record<string, any>[] | Record<string, any>>(
	data: T,
	page?: number,
	pageSize?: number,
	totalResults?: number,
	unfilteredResults?: number
): ResponseReturnType<T> => {
	return {
		data,
		...(page !== undefined &&
			pageSize !== undefined &&
			totalResults !== undefined && {
				meta: {
					pagination: {
						page,
						pageSize,
						totalResults,
						...((unfilteredResults || unfilteredResults == 0) && { unfilteredResults }),
					},
				},
			}),
	};
};
