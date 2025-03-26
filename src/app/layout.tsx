import Layout from "@/components/layout";
import type { Metadata } from "next";
import { StoreProvider } from "@/utils/contexts/context-api";

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
        <StoreProvider>
          <Layout>
            <main className="bg-[var(--background)] relative">{children}</main>
          </Layout>
        </StoreProvider>
      </body>
    </html>
  );
}
