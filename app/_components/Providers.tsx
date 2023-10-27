"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  if (!rendered) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute='class'>{children}</ThemeProvider>;
};

export default Providers;
