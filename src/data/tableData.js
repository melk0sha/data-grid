import faker from "faker";

// faker.seed(781);
const companies = [
  faker.company.companyName(),
  faker.company.companyName(),
  faker.company.companyName()
];

const makeFake = (idx) => {
  return {
    id: 1 + idx,
    name: faker.name.findName(),
    dateOfBirth: faker.date.between(1970, 2000).toLocaleDateString(),
    country: faker.address.country(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    company: faker.random.arrayElement(companies),
    isActive: faker.random.boolean()
  };
};

const data = [...new Array(20)].map((el, idx) => {
  return { id: `r${idx}`, rowData: makeFake(idx), visible: true };
});

export default data;
