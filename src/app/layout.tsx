import type { Metadata } from "next";
import { ExampleProvider } from "./context/exampleContext";

export const metadata: Metadata = {
  title: "Assignment 7-1",
  description: "Use Context, WOOHOO! haha nice im learning so much",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ExampleProvider>
          {children}
        </ExampleProvider>
      </body>
    </html>
  );
}
