import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://relation-service.nextnext.id/",
  cache: new InMemoryCache(),
});

export function ApolloClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </>
  );
}
