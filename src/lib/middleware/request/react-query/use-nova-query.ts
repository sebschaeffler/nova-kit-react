/**
 * Imported from Nova Kit.
 */

import type { UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import type { DefaultError, QueryClient, QueryKey } from "@tanstack/query-core";

export interface NovaQueryOptions<
  TQueryFnData,
  TError,
  TData,
  TQueryKey extends QueryKey = QueryKey,
> extends UseQueryOptions<TQueryFnData, TError, TData, TQueryKey> {
  requireAuth?: boolean;
  isAuthenticated?: boolean;
}

function buildDefaultOptions(): Partial<NovaQueryOptions<any, any, any, any>> {
  return {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: 1,
  };
}

export function useNovaQuery<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: NovaQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> {
  // Get default options first and then the passed options to override them, if needed.
  const finalOptions: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey> = {
    ...buildDefaultOptions(),
    ...options,
    enabled:
      options.enabled &&
      (!options.requireAuth || (options.requireAuth && options.isAuthenticated)),
  };

  return useQuery<TQueryFnData, TError, TData, TQueryKey>(
    finalOptions as UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    queryClient,
  );
}
