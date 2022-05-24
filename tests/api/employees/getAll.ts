import { get } from '../../helpers';
import { existingCompanies } from '../__mocks__/company';
import { employeesPath, existingEmployees } from '../__mocks__/employee';

export const getAllRequestTest = () => {
  describe('get employees request', () => {
    it('should return 200 status with employees', async () => {
      const { statusCode, headers, body } = await get(employeesPath);

      expect(statusCode).toBe(200);
      expect(headers['content-type']).toMatch('application/json');
      expect(body).toStrictEqual([
        {
          uuid: existingEmployees[0].uuid,
          name: existingEmployees[0].name,
          age: existingEmployees[0].age,
        },
        {
          uuid: existingEmployees[1].uuid,
          name: existingEmployees[1].name,
          age: existingEmployees[1].age,
        },
        {
          uuid: existingEmployees[2].uuid,
          name: existingEmployees[2].name,
          age: existingEmployees[2].age,
        },
      ]);
    });

    describe('when companyUuid param is given', () => {
      it('should return 200 status with employees of the given company only', async () => {
        const { statusCode, headers, body } = await get(employeesPath + '?companyUuid=' + existingCompanies[0].uuid);

        expect(statusCode).toBe(200);
        expect(headers['content-type']).toMatch('application/json');
        expect(body).toStrictEqual([
          {
            uuid: existingEmployees[0].uuid,
            name: existingEmployees[0].name,
            age: existingEmployees[0].age,
          },
          {
            uuid: existingEmployees[1].uuid,
            name: existingEmployees[1].name,
            age: existingEmployees[1].age,
          },
        ]);
      });
    });

    describe('when managerUuid param is given', () => {
      it('should return 200 status with employees of the given manager only', async () => {
<<<<<<< HEAD
=======
        mockEmployeesFoundByManager();

>>>>>>> main
        const { statusCode, headers, body } = await get(employeesPath + '?managerUuid=' + existingEmployees[0].uuid);

        expect(statusCode).toBe(200);
        expect(headers['content-type']).toMatch('application/json');
        expect(body).toStrictEqual([
          {
            uuid: existingEmployees[1].uuid,
            name: existingEmployees[1].name,
            age: existingEmployees[1].age,
          },
        ]);
      });
    });
  });
};
