import employees from './employees';
import companies from './companies';
import employeesMetadata from './employeesMetadata';

export default {
  schemas: {
    UUID: {
      type: 'string',
      format: 'UUIDV4',
      example: 'a2d4e87f-5a6a-47eb-90ea-09b9e3252d7e',
    },
    Title: {
      type: 'string',
      example: 'CEO',
    },
    Name: {
      type: 'string',
      example: 'wix',
    },
    Country: {
      type: 'string',
      example: 'USA',
    },
    ...companies,
    ...employees,
    ...employeesMetadata,
  },
};
