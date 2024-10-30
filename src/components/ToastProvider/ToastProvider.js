import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {

  return (
    <ToastContext.Provider value={{}}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
