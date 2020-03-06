import faker from "faker";

faker.seed(125);

export const companies = [...new Array(3)].map(() =>
  faker.company.companyName()
);

const status = {
  student: "Student",
  employee: "Employee"
};

const makeFake = (idx) => {
  return {
    id: 1 + idx,
    name: faker.name.findName(),
    dateOfBirth: faker.date.between(1970, 2000).toLocaleDateString(),
    country: faker.address.country(),
    phone: faker.phone.phoneNumber("(###) ###-####"),
    email: faker.internet.email(),
    company: faker.random.arrayElement(companies),
    status: faker.random.objectElement(status)
  };
};

const data = [...new Array(20)].map((el, idx) => {
  return { id: `r${idx}`, rowData: makeFake(idx), visible: true };
});

export default data;
