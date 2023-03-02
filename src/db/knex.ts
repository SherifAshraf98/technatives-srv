import knex from 'knex';
// @ts-ignore
import knexStringCase from 'knex-stringcase';

export interface KnexClientArgs {
	host: string;
	password: string;
	database: string;
	user: string;
	port: number;
}
export const getKnexClient = () => {
	if (
		!process.env.HOST ||
		!process.env.PORT ||
		!process.env.DB_USER ||
		!process.env.DB_PASSWORD ||
		!process.env.DATABASE
	)
		throw { code: 500, message: 'Missing environment variables' };

	const connection: KnexClientArgs = {
		host: process.env.HOST,
		port: Number(process.env.DB_PORT),
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DATABASE,
	};

	const options = knexStringCase({
		client: 'pg',
		connection,
	});
	return knex(options);
};
