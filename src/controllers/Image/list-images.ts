import { Request, Response } from 'express';

export const listImages = (_req: Request, res: Response) => {
	// upload Image logic
	return res.send('List Images Endpoint');
};
