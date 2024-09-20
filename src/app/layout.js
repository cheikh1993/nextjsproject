
import { Inter,Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import { useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog de Cheikh Faye",
  description: "cheikh faye blog",
};


export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>

        <div className="container">
        <NavBar/>
        {children}
        <Footer/>
        </div>
          </AuthProvider>
        </ThemeProvider>
        </body>
    </html>
  );
}
