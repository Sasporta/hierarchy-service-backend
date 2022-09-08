import { Request } from 'express';

import { validateLimit } from '../helpers';
import { Company } from '../../entities/Company';

export const getCompaniesB = async ({ query: { limit } }: Request) => {
  const companies = await Company.find({
    select: {
      uuid: true,
      name: true,
      country: true,
    },
    take: validateLimit(+limit),
  });

  return { statusCode: 200, content: companies };
};
