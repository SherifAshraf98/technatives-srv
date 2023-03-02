import { Knex } from 'knex';
import { GetImagesArgs, GetImagesCountOutput, GetImagesOutput } from '../../interfaces/Image/list-images';
import { DatabaseTableNameEnum, SortOrderEnum } from '../../utils/enums';

/**
 * Function that gets images' count
 * @param {Knex<any, unknown[]>} knex - Knex Instance
 * @returns {Promise<GetImagesCountOutput[]>} List of images
 */
export const getImagesCount = (knex: Knex<any, unknown[]>): Promise<GetImagesCountOutput[]> =>
	knex(DatabaseTableNameEnum.POSTS).count() as any;

/**
 * Function that gets images
 * @param {Knex<any, unknown[]>} knex - Knex Instance
 * @param {GetImagesArgs} args - Arguments (queryOffset, pageSize)
 * @returns {Promise<GetImagesOutput[]>} List of images
 */
export const getImages = (
	knex: Knex<any, unknown[]>,
	{ queryOffset, pageSize }: GetImagesArgs
): Promise<GetImagesOutput[]> =>
	knex(DatabaseTableNameEnum.POSTS)
		.select('id', 'caption', 'image', 'createdAt')
		.orderBy('createdAt', SortOrderEnum.DESC)
		.offset(queryOffset)
		.limit(pageSize);
