import { Request, Response } from 'express';

import { errorHandler } from '../helpers';
import { Company } from '../../entities/Company';
import { Employee } from '../../entities/Employee';

export const getEmployees = async (req: Request, res: Response) => {
  const { companyUuid, managerUuid } = req.query;

  let query = { company_id: undefined, manager_id: undefined };

  let employees: Employee[];

  try {
    if (req.query !== {}) {

      if (typeof companyUuid === 'string') {
        const company = await Company.findOneBy({ uuid: companyUuid });

        if (company) { query.company_id = company.id; }
      }
      if (typeof managerUuid === 'string') {
        const manager = await Employee.findOneBy({ uuid: managerUuid });

        if (manager) { query.manager_id = manager.id; }
      }

      employees = await Employee.find({ where: { ...query } });
    }
    else {
      employees = await Employee.find();
    }

    return res.status(200).json(Employee.arrayToJson(employees));
  }
  catch (error) { return errorHandler(res, 500, error.message); }
};
