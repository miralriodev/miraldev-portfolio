import { AuroraBackground } from "@/app/components/ui/aurora-background";
import { ThemeProvider } from "@/app/components/ui/theme-provider";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconStack,
  IconUserCode,
} from "@tabler/icons-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BottomBlur from './components/BottomBlur';
import { FloatingDock } from "./components/ui/floating-dock";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "miralriodev | Portfolio",
  description: "Portfolio of Hugo Miralrio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    {
      title: "Home",
      href: "/",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "About",
      href: "/about",
      icon: (
        <IconUserCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "My Projects",
      href: "/projects",
      icon: (
        <IconStack className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "Twitter",
      href: "https://x.com/HUGOALBERT20235",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "Github",
      href: "https://github.com/miralriodev",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
  ];
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <Theme>
            <AuroraBackground className="min-h-screen max-h-full">
              {children}
              <FloatingDock
                items={links}
                desktopClassName="fixed left-1/2 bottom-0 -translate-x-1/2 mx-auto z-50"
              />
              <BottomBlur />
              {/* <CursorGlow /> */}
            </AuroraBackground>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
