"use client";

import { Toaster } from "sonner";
import { StoreProvider } from "@/context/store-context";

export function AppProvider({ children }) {
  return (
    <StoreProvider>
      {children}
      <Toaster position="bottom-right" richColors />
    </StoreProvider>
  );
}
