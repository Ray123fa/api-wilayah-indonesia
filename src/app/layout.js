import "./globals.css";

export const metadata = {
  title: "Rayhan F | API Wilayah Indonesia",
  description: "API Wilayah Indonesia berdasarkan pengkodean BPS per 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-800 text-white/75">
      <body>{children}</body>
    </html>
  );
}
