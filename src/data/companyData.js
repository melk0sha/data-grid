import companyName from "../constants/companyName";

const companyNameData = Object.values(companyName).map((company, idx) => {
  return { id: idx, name: company };
});

export default companyNameData;
