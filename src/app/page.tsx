
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import HappyCustomer from "@/components/HappyCustomer";
import TopSell from "./product/sell";
import Product from "./product/page";
import Products from "./product/page";
import Brands from "@/components/Brands";


export default function Home() {
  return (
   <div>
   
    <Hero/>
    <LogoBar/>
    <Brands/>
    <Product/>
    <TopSell/>
    <HappyCustomer/>

    
   </div> 
  );
}