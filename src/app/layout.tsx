import { DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { ThemeProvider } from 'next-themes'
import ScrollToTop from '@/components/ScrollToTop'
import Aoscompo from '@/utils/aos'
import localFont from "next/font/local";
const font = DM_Sans({ subsets: ['latin'] })
const archia = localFont({
  src: '../assets/fonts/archia-regular-webfont.ttf', // ⬅️ relatif ke file ini!
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${archia.className}`}>
        <ThemeProvider
          attribute='class'
          enableSystem={true}
          defaultTheme='system'>
          <Aoscompo>
            <Header />
            {children}
            <Footer />
          </Aoscompo>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
