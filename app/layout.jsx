import { Poppins } from "next/font/google";
import "@/styles/globals.css";
 
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "NextJS-homework005",
  description: "A first next js homework",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}