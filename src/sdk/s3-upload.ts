// Create service client module using ES6 syntax.
import AWS from 'aws-sdk';
import { throwInternalServerError } from '../utils/formatted-response';

const s3 = new AWS.S3({
	accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
	region: 'us-east-1',
});

// Create and upload the object to the S3 bucket.
export const uploadFileToS3 = async (key: string, body: any) => {
	if (!process.env.AWS_S3_BUCKET_NAME || !process.env.AWS_S3_ACCESS_KEY_ID || !process.env.AWS_S3_SECRET_ACCESS_KEY) {
		throwInternalServerError('Missing environment variables');
		return;
	}
	const s3 = new AWS.S3({
		accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
		secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
		region: 'us-east-1',
	});
	const uploadedImage = await s3
		.upload({
			Bucket: process.env.AWS_S3_BUCKET_NAME,
			Key: key,
			Body: body,
		})
		.promise();
	return uploadedImage.Location;
};
