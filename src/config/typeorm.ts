import { SeederOptions } from 'typeorm-extension';
import { DataSource, DataSourceOptions } from 'typeorm';

import config from '.';
import { Company } from '../entities/Company';
import { Employee } from '../entities/Employee';
import CompanySeeder from '../seeds/company_seeder';
import LoadTestSeeder from '../seeds/loadTestSeeder';
import EmployeeSeeder from '../seeds/employee_seeder';
import CompanyFactory from '../seeds/factories/company_factory';
import EmployeeFactory from '../seeds/factories/employee_factory';

const {
	db: { database, host, loadTestSeeding, password, port, ssl, url, username },
} = config;

const options: DataSourceOptions & SeederOptions = {
	type: 'postgres',
	url,
	ssl,
	host,
	port,
	username,
	password,
	database,
	entities: [Company, Employee],
	factories: [CompanyFactory, EmployeeFactory],
	seeds: loadTestSeeding ? [LoadTestSeeder] : [CompanySeeder, EmployeeSeeder],
};

export const dataSource = new DataSource(options);

export default options;
