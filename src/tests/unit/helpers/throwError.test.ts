import { throwError } from '../../../controllers/helpers';

describe('throwError function', () => {
	const getError = (status: number) => {
		try {
			throwError(status);
		} catch (error) {
			return error;
		}
	};

	it('should throw an error', () => {
		expect(() => throwError(404)).toThrow();
	});

	it('should return an error with status 404 and proper error message', () => {
		const error = getError(404);

		expect(error).toHaveProperty('status', 404);
		expect(error).toHaveProperty('message', { description: 'Item not Found' });
	});

	it('should return an error with status 422 and proper error message', () => {
		const error = getError(422);

		expect(error).toHaveProperty('status', 422);
		expect(error).toHaveProperty('message', {
			description: 'Unprocessable entity, missing or invalid parameters',
		});
	});
});
