import './ui/global.css';
import { montserrat } from './ui/fonts';
import { Dai_Banna_SIL } from 'next/font/google';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={`${montserrat.className} antialiased`}>
          {children} 
          <footer>
            Este footer siempre va a estar aca y figurar en todas las paginas, porque esta en el layout
          </footer>
      </body>
    </html>
  );
}
