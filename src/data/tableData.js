import faker from "faker";
import companyName from "../constants/companyName";

faker.seed(125);

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
    company: faker.random.objectElement(companyName),
    status: faker.random.objectElement(status)
  };
};

const data = [...new Array(20)].map((el, idx) => {
  return { id: `r${idx}`, rowData: makeFake(idx), visible: true };
});

export default data;
