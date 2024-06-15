import React, { createContext, useState } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [selectedSection, setSelectedSection] = useState('images');

  return (
    <ProfileContext.Provider value={{ selectedSection, setSelectedSection }}>
      {children}
    </ProfileContext.Provider>
  );
};
