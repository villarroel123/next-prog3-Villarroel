import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import { Nunito_Sans, Crimson_Text, Rowdies } from 'next/font/google';

const nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito',
});

const crimson = Crimson_Text({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-crimson',
});

const rowdies = Rowdies({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-rowdies',
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
    <head>
        {/* Link de FontAwesome*/}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      <body className={`${nunito.variable} ${crimson.variable} ${rowdies.variable} min-h-full flex flex-col antialiased`}>
          <NavBar/>
          {children}
          <Footer/>
      </body>
    </html>
  );
}
