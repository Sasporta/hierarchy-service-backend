import { Company } from '../../../entities/company';
import { format } from '../../../controllers/jsons/companies';

it('should return the proper employ json', () => {
  const company = new Company;

  company.id = 6661;
  company.uuid = '5c685c36-cad4-44c6-b9cd-cc5eb153fdfe';
  company.name = 'angela smith';
  company.country = 'Israel';

  expect(format(company)).toStrictEqual({
    uuid: company.uuid,
    name: company.name,
    country: company.country,
  });
});
