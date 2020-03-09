import sortName from "../constants/sortName";

const tableHeaderData = {
  id: { id: "h1", name: "id", sort: sortName.NOT, visible: true },
  name: { id: "h2", name: "name", sort: sortName.NOT, visible: true },
  dateOfBirth: {
    id: "h3",
    name: "dateOfBirth",
    sort: sortName.NOT,
    visible: true
  },
  country: { id: "h4", name: "country", sort: sortName.NOT, visible: true },
  phone: { id: "h5", name: "phone", sort: sortName.NOT, visible: true },
  email: { id: "h6", name: "email", sort: sortName.NOT, visible: true },
  company: { id: "h7", name: "company", sort: sortName.NOT, visible: true },
  status: { id: "h8", name: "status", sort: sortName.NOT, visible: true }
};

export default tableHeaderData;
