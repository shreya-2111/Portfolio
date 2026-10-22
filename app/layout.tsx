import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Shreya Raval — Full-Stack Developer & Software Engineer",
  description:
    "Full-Stack Developer focused on building thoughtful web applications, modern interfaces, and real-world digital products that bridge architectural rigor with editorial elegance.",
  keywords: [
    "Shreya Raval",
    "Full-Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Django",
    "FastAPI",
    "Flutter",
    "Ahmedabad",
  ],
  authors: [{ name: "Shreya Raval" }],
  openGraph: {
    title: "Shreya Raval — Full-Stack Developer",
    description:
      "Full-Stack Developer focused on building thoughtful web applications, modern interfaces, and real-world digital products.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-background text-text-main font-body antialiased selection:bg-primary-light selection:text-primary-deep">
        {children}
      </body>
    </html>
  );
}
