import React, { createContext, useState } from 'react';

const CompanyContext = createContext();
export default CompanyContext;

export function CompanyProvider({ children }) {
  const [companies, setCompanies] = useState([]);

  return (
    <CompanyContext.Provider value={
      {
        companies,
        setCompanies
      }
    }>
      {children}
    </CompanyContext.Provider>
  );
}
