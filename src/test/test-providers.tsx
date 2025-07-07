import React from "react";
import { BrowserRouter } from "react-router-dom";

export const TestProviders = ({ children }: { children: React.ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
