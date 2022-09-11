import { Request } from 'express';
import EmployeeMetadataModule from '../../modules/EmployeeMetadata';

export const getEmployeeMetadata = async ({
  params: { id: uuid },
}: Request) => {
  const employeeMetadata = await EmployeeMetadataModule.getOne(uuid);

  return {
    statusCode: 200,
    content: employeeMetadata,
  };
};