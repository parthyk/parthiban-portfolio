import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme";
import { StoryProvider } from "@/components/story";
import "./globals.css";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parthiban K — From Pixel to Perspective",
  description:
    "The evolution of a Creative Designer into a Creative Head. A cinematic storytelling portfolio.",
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");var d=t==="dark"||(t===null&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.setAttribute("data-theme",d?"dark":"light");}catch(e){document.documentElement.setAttribute("data-theme","light");}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="grain font-sans">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        <ThemeProvider>
          <StoryProvider>{children}</StoryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
