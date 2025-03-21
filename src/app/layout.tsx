import Layout from "@/components/layout";
import type { Metadata } from "next";
import { StoreProvider } from "@/utils/contexts/context-api";
import { Provider } from "@/components/ui/provider";

export const metadata: Metadata = {
  title: "Saints Website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <StoreProvider>
            <Layout>
              <main className="bg-[var(--background)]">{children}</main>
            </Layout>
          </StoreProvider>
        </Provider>
      </body>
    </html>
  );
}
