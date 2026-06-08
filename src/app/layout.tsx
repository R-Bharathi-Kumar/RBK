import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "R Bharathi Kumar — Product Engineer",
  description:
    "Portfolio of R Bharathi Kumar, a versatile Product Engineer specializing in UI/UX design, full-stack development, and blockchain integration.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.className} bg-neutral-950 text-neutral-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
