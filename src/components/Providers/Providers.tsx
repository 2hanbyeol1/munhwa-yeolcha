import React from "react";
import QueryClientProvider from "./QueryClientProvider";
import SupabaseProvider from "./SupabaseProvider";

interface ProvidersType {
  children: React.ReactNode;
}

function Providers({ children }: ProvidersType) {
  return (
    <QueryClientProvider>
      <SupabaseProvider>{children}</SupabaseProvider>
    </QueryClientProvider>
  );
}

export default Providers;
