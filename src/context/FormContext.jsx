import { createContext, useContext } from "react";

export const FormContext = createContext();

export const useFormContext = () => {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error("useFormContext must be used inside FormProvider");
  return ctx;
};

