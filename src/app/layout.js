import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const jetbrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

export const metadata = {
  title: "My Portfolio - Gaurav Singh",
  description: "Welcome to the portfolio of Gaurav Singh, a passionate MERN stack developer with expertise in React.js, Next.js, Node.js, and MongoDB.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrains_Mono.variable}>
        <Header />
          {children}
      </body>
    </html>
  );
}
