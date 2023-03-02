export const validateNumberGreaterThanOrEqualOneQP = (number: string | undefined) =>
	number && !isNaN(+number) && +number >= 1;
