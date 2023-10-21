"use client";
import { ThemeProvider } from "./providers/theme-provider";
import { NextuiProvider } from "./providers/nextui-provider";
import { ApolloClientProvider } from "./providers/apollo-client-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ApolloClientProvider>
        <NextuiProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </NextuiProvider>
      </ApolloClientProvider>
    </>
  );
}
