import "./globals.css";
import Header from '@/Components/Header'
import Footer from '@/Components/Footer';
import Separator from "@/Components/Separator";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Separator/>
        {children}
        <Separator/>
        <Footer />
      </body>
    </html>
  );
}
