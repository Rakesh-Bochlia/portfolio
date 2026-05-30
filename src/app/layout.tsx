import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rakesh Bochlia | Frontend Developer",
  description:
    "Frontend Developer with 2.5+ years of experience in React, Next.js, JavaScript, Tailwind CSS, Shopify and modern web development.",

  keywords: [
    "Rakesh Bochlia",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Shopify Developer",
    "Web Developer",
  ],

  authors: [
    {
      name: "Rakesh Bochlia",
    },
  ],

  creator: "Rakesh Bochlia",

  openGraph: {
    title: "Rakesh Bochlia | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, JavaScript, Tailwind CSS and modern web applications.",
    url: "https://rakesh-bochlia-portfolio.netlify.app",
    siteName: "Rakesh Bochlia Portfolio",
    images: [
      {
        url: "https://rakesh-bochlia-portfolio.netlify.app/images/rakesh-bochlia.jpg",
        width: 1200,
        height: 630,
        alt: "Rakesh Bochlia Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rakesh Bochlia | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, JavaScript, Tailwind CSS and modern web applications.",
    images: [
      "https://rakesh-bochlia-portfolio.netlify.app/images/rakesh-bochlia.jpg",
    ],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rakesh Bochlia",
  url: "https://rakesh-bochlia-portfolio.netlify.app",
  image:
    "https://rakesh-bochlia-portfolio.netlify.app/images/rakesh-bochlia.jpg",
  jobTitle: "Frontend Developer",

  sameAs: [
    "https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME",
    "https://www.instagram.com/rakeshbochlia/",
    "https://github.com/YOUR-GITHUB-USERNAME",
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} ${dmSans.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
