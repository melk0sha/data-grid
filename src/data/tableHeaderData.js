import sortName from "../constants/sortName";

const tableHeaderData = {
  id: { id: "h1", name: "id", sort: sortName.NOT },
  name: { id: "h2", name: "name", sort: sortName.NOT },
  dateOfBirth: { id: "h3", name: "dateOfBirth", sort: sortName.NOT },
  country: { id: "h4", name: "country", sort: sortName.NOT },
  phone: { id: "h5", name: "phone", sort: sortName.NOT },
  email: { id: "h6", name: "email", sort: sortName.NOT },
  company: { id: "h7", name: "company", sort: sortName.NOT },
  active: { id: "h8", name: "active", sort: sortName.NOT }
};

export default tableHeaderData;
