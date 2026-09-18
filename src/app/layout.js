import { Playfair_Display, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "J. Lalchand Saraf | जे. लालचंद सराफ - Luxury Gold & Diamond Jewellers Ratnagiri",
  description: "Explore exquisite 22KT & 24KT BIS Hallmarked Gold, Royal Bridal Jewellery, Solitaire Diamonds & Custom Ornaments at J. Lalchand Saraf, Ratnagiri. Rated 4.9★ by 1,600+ happy customers.",
  keywords: "J Lalchand Saraf, Lalchand Saraf Ratnagiri, gold jewellery Ratnagiri, diamond necklace, 22k hallmarked gold, bridal jewellery, mangalsutra, gold rates Ratnagiri",
  openGraph: {
    title: "J. Lalchand Saraf - Flagship Jewellery Store Ratnagiri",
    description: "4.9★ Rated Jewellery Destination in Ratnagiri since 1994. 100% BIS Hallmarked Pure Gold & Certified Diamonds.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FBF9F5] text-[#1E1E1E] selection:bg-[#D4AF37] selection:text-white">
        {children}
      </body>
    </html>
  );
}
