import { CartCountProvider } from "@/contexts/CartCountContext";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

export default function Layout({ children }:any) {
    return (
      <>
      <CartCountProvider>
        <NavBar />
        <main>{children}</main>
        <Footer/>
        </CartCountProvider>
        
      </>
    )
  }