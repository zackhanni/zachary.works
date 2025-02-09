import "./globals.css";
import type { Metadata } from "next";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Navigation } from "./components/Navigation";
import { Nav2 } from "./components/Nav2";

export const metadata: Metadata = {
  title: "Zachary.works",
  description: "Professional software engineer Zachary Hanni",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Navigation /> */}
        <Nav2 />
        {children}
      </body>
    </html>
  );
}
