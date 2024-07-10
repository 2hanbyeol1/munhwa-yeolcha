import React from "react";
import QueryClientProvider from "./QueryClientProvider";

interface ProvidersType {
  children: React.ReactNode;
}

function Providers({ children }: ProvidersType) {
  return <QueryClientProvider>{children}</QueryClientProvider>;
}

export default Providers;
