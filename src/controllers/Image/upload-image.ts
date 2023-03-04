import { Request, Response } from 'express';
import { getKnexClient } from '../../db/knex';
import { createImage } from '../../queries/Image';
import { uploadFileToS3 } from '../../sdk/s3-upload';
import { handleError, response, throwBadRequest, throwInternalServerError } from '../../utils/formatted-response';

export const uploadImages = async (req: Request, res: Response) => {
	try {
		// validate input
		if (!req.files?.length || !req.body.caption) {
			throwBadRequest('Missing required fields(file or caption)');
			return;
		}

		// extract input
		const file = Array.isArray(req.files) ? req.files[0] : req.files;

		const caption = req.body.caption;
		const knex = getKnexClient();

		// generate unique name for the image
		const fileName = `${new Date().getTime()}-${file.originalname}`;
		// upload images to s3
		const imageUrl = await uploadFileToS3(fileName, file.buffer);
		if (!imageUrl) {
			throwInternalServerError('Failed to upload image!');
			return;
		}

		// save image in db
		const image = await createImage(knex, { data: { image: imageUrl, caption, createdAt: new Date().toISOString() } });

		return res.send(response(image[0]));
	} catch (e) {
		console.error(e);
		const errorResponse = handleError(e);
		res.status(errorResponse.error.statusCode);
		res.send(handleError(e));
	}
};
