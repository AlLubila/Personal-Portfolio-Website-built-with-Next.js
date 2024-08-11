import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
  subsets: ['latin']
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={montserrat.className}>
        <div className="MainContainer">
        <header>
          <Navbar/>
        </header>
        <main>
        {children}
        </main>
        <footer>
          <Footer/>  
        </footer>
        </div>
        
      </body>
    </html>
    </ClerkProvider>
  );
}