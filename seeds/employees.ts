import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

import { Employee } from '../entities/Employee';
import { existingEmployees } from '../tests/api/__mocks__/employees/mockData';

export default class EmployeeSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    await dataSource.getRepository(Employee).insert(existingEmployees);
  }
}
