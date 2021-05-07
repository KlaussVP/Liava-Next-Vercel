import React, { createContext, useState } from 'react';

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
  const [registered, setRegistered] = useState(null);
  const [user, setUser] = useState(null);
  const [sendNewValue, setSendNewValue] = useState(false);

  return (
    <UserContext.Provider value={
      {
        registered,
        setRegistered,
        user,
        setUser,
        sendNewValue,
        setSendNewValue
      }
    }>
      {children}
    </UserContext.Provider>
  );
}
