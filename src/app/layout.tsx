import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "GoEvents | L'excellence événementielle par Ajr_Groupe",
  description: "Production, création et couverture d'événements culturels et professionnels d'exception.",
  keywords: ["événementiel", "production", "luxe", "culture", "professionnel", "GoEvents"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${onest.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
