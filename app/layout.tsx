import "./globals.css";
import type { Metadata } from "next";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "./components/Nav";

export const metadata: Metadata = {
  title: "Zachary.works",
  description: "Portfolio page for professional software engineer Zachary Hanni",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
