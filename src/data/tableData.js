import faker from "faker";
import companyName from "../constants/companyName";

faker.seed(125);

const status = {
  student: "Student",
  employee: "Employee"
};

const makeFake = (idx) => {
  return {
    id: { name: 1 + idx, visible: true },
    name: { name: faker.name.findName(), visible: true },
    dateOfBirth: {
      name: faker.date.between(1970, 2000).toLocaleDateString(),
      visible: true
    },
    country: { name: faker.address.country(), visible: true },
    phone: { name: faker.phone.phoneNumber("(###) ###-####"), visible: true },
    email: { name: faker.internet.email(), visible: true },
    company: { name: faker.random.objectElement(companyName), visible: true },
    status: { name: faker.random.objectElement(status), visible: true },
    visible: true
  };
};

const data = [...new Array(20)].map((el, idx) => makeFake(idx));

export default data;
