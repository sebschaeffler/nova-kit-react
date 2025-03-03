"use client";

import { isServer, QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/middleware/request/react-query/query-client";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

const persister = createSyncStoragePersister({
  storage: !isServer ? window.localStorage : undefined,
});

export const NovaPersistentQueryProvider = ({
                                              children,
                                            }: {
  children: React.ReactNode;
}) => {
  const queryClient = getQueryClient();

  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
      {children}
    </PersistQueryClientProvider>
  );
};

export const NovaQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = getQueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
