import type { Metadata } from "next";
import { Rye, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const rye = Rye({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = "https://iamjfabian.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Josias Fabián — iamJfabian", template: "%s — iamJfabian" },
  description:
    "Penetration tester writing about web, API, cloud and network security research: real attack chains, root causes, and remediation.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "iamJfabian",
    images: ["/images/avatar.png"],
  },
};

// Corre antes del primer paint para aplicar el tema guardado sin flash.
const THEME_INIT_SCRIPT = `(function(){try{
  var t = localStorage.getItem('blog_theme');
  if (t === 'light') document.documentElement.setAttribute('data-theme', 'light');
} catch (e) {}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${rye.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FT1KQGTZG2" />
        <Script id="ga-init">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FT1KQGTZG2');`}
        </Script>
      </body>
    </html>
  );
}
