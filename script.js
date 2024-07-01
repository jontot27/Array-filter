const companies = [
    {
      companyName: "Company A",
      industry: "Technology",
      yearStarted: 2000,
      yearEnded: 2021
    },
    {
      companyName: "Company B",
      industry: "Finance",
      yearStarted: 1985,
      yearEnded: 2025
    },
    {
      companyName: "Company C",
      industry: "Healthcare",
      yearStarted: 1995,
      yearEnded: 2004
    },
    {
      companyName: "Company D",
      industry: "Retail",
      yearStarted: 1970,
      yearEnded: 2005
    },
    {
      companyName: "Company E",
      industry: "Automotive",
      yearStarted: 1920,
      yearEnded: 2018
    },
    {
      companyName: "Company F",
      industry: "Aerospace",
      yearStarted: 1950,
      yearEnded: 2000
    },
    {
      companyName: "Company G",
      industry: "Construction",
      yearStarted: 1980,
      yearEnded: 1986
    },
    {
      companyName: "Company H",
      industry: "Energy",
      yearStarted: 1990,
      yearEnded: 2015
    },
    {
      companyName: "Company I",
      industry: "Hospitality",
      yearStarted: 2005,
      yearEnded: 2013
    },
    {
      companyName: "Company J",
      industry: "Telecommunications",
      yearStarted: 1965,
      yearEnded: 1995
    }
  ];
  
//Company Industry
const retailCompanies = companies.filter(company => company.industry === 'Retail');

//Company that starts in 80's
const eightiesCompanies = companies.filter(company =>(company.yearStarted >= 1980 && company.yearStarted < 1990));

//Company that's more that 10 years

const companyYears = companies.filter(year => (year.yearEnded - year.yearStarted) <= 10);

console.log(companyYears);

