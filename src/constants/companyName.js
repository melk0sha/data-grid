import { companies } from "../data/tableData";

const companyName = companies.map((company, idx) => {
  return { id: idx, name: company };
});

export default companyName;
