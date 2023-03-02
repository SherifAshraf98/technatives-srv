import { Request, Response } from 'express';
import { getKnexClient } from '../../db/knex';
import { ListImagesQueryParams } from '../../interfaces/Image/list-images';
import { getImages, getImagesCount } from '../../queries/Image';
import { handleError, response } from '../../utils/formatted-response';
import { getResourceParams } from '../../utils/resource-params';

interface ListImagesQP {
	page: number;
	pageSize: number;
}

export const listImages = async (req: Request<{}, {}, {}, ListImagesQP>, res: Response) => {
	try {
		const knex = getKnexClient();
		const { page, pageSize } = getResourceParams<ListImagesQP>(req.query, Object.values(ListImagesQueryParams));

		// get images count
		const imagesCount = await getImagesCount(knex);

		// Calculate the number of pages using the received page size
		const pageCount = Math.ceil(+imagesCount[0].count / pageSize);

		// if the user sent page number exceeds the total number of pages, then return the last page
		if (page > pageCount)
			throw {
				statusCode: 204,
			};
		const queryOffset = pageSize * (page - 1);

		const images = await getImages(knex, { queryOffset, pageSize });

		return res.send(response(images, page, pageSize, +imagesCount[0].count));
	} catch (e) {
		console.error(e);
		res.send(handleError(e));
	}
};
