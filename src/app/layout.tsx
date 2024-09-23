import Navbar from "@/app/component/Navbar"
import "./globals.css";
import { Toaster } from "react-hot-toast";

const RootLayout = ({children,}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Toaster/>
      </body>
    </html>
  );
}

export default RootLayout;