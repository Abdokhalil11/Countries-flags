import "./globals.css";
import Header from "../components/Header";
import { Nunito_Sans } from "next/font/google";

const NunitoSans = Nunito_Sans({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export function generateMetadata() {
  return {
    title: {
      default:"Country flag",
      template: "Country of %s",
    },
    description: "Generated by create next app",
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${NunitoSans.className} bg-main-background h-screen`} theme="light">
        <Header />
        {children}
      </body>
    </html>
  );
}
