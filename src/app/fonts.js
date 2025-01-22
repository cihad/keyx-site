import { Inter, Sen, Roboto_Mono } from "next/font/google";

export const inter = Inter({
  weight: ["400", "600", "500"],
  variable: "--font-inter",
  subsets: ["latin"],
});

export const sen = Sen({
  weight: ["700"],
  variable: "--font-sen",
  subsets: ["latin"],
});

export const robotoMono = Roboto_Mono({
  weight: ["500"],
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});
