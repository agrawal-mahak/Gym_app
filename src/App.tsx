import { useEffect, useState } from "react";
import {Navbar} from "./scene/navbar/index";
import {SelectedPage} from './shared/types';
import Home from "./scene/Home";
import Benifits from "./scene/benifits";
import {OurClasses} from "./scene/ourClasses"
import {ContactUs} from "./scene/contactUs/index"
import {Footer} from "./scene/footer/index";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>( 
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopPage] = useState<boolean>(true);

  useEffect(() => {
   const handleScroll = () => {
    if(window.scrollY === 0) {
      setIsTopPage(true);
      setSelectedPage(SelectedPage.Home);
    }
    if(window.scrollY !== 0) setIsTopPage(false)
   }
   window.addEventListener("scroll", handleScroll);
   return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-gray-20">
      <Navbar isTopOfPage = {isTopOfPage}
         selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <Benifits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div>
  );  
}

export default App;