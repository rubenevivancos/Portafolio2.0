import React, { createContext, useState, useContext } from 'react';



const SelectedItemContext = createContext();


export const SelectedItemProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <SelectedItemContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </SelectedItemContext.Provider>
  );
};


export const useSelectedItem = () => {
    const context = useContext(SelectedItemContext);
    if (!context) {
      throw new Error('useSelectedItem debe ser utilizado dentro de un SelectedItemProvider');
    }
    return context;
};