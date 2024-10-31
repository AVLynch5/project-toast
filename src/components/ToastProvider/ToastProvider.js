import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  // create state to hold toast instances
  const [toastArray, setToastArray] = React.useState([]);
  // remove toast from toastArray
  const dismissToast = (toastId) => {
    const newToastArray = toastArray.filter((toast) => toast.id !== toastId);
    setToastArray(newToastArray);
  };
  // add toast to toastArray
  const addNewToast = (message, variantType) => {
    const newToast = { message, variantType, id: crypto.randomUUID() };
    const newToastArray = [...toastArray, newToast];
    setToastArray(newToastArray);
  };
  return (
    <ToastContext.Provider value={{ toastArray, dismissToast, addNewToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
