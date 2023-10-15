import Image from "next/image";
import Header from "@/components/header";
import Content from "@/components/main/content";
import SideBar from "@/components/sidebar";
import { useRouter } from "next/router";
import Ddos from "@/components/main/ddos";
import Cyber from "@/components/main/cyber";
import Vulnerability from "@/components/main/vulnerability";
import Super from "@/components/main/super";
import Blockchain from "@/components/main/blockchain";
import { useState, useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const [page, setPage]= useState('/');
  const [pageName, setPageName]:any = useState();
  console.log(page);
  
  function renderPage() {
    switch (page) {
      case "ddos":
        return setPageName(<Ddos />);
      case "cyber":
        return setPageName(<Cyber />);
      case "vulnerability":
        return setPageName(<Vulnerability />);
      case "super":
        return setPageName(<Super />);
      case "blockchain":
        return setPageName(<Blockchain />);
      default:
        return setPageName(<Content />);
    }
  }
  useEffect(() => {
    renderPage();
    console.log(page);
    
  }, [page]);

  return (
    <div className="wrapper"> 
      <Header />
      <SideBar setPage={setPage} />
      <div className="page-wrapper">
        <div className="page-content">
          { pageName }
        </div>
      </div>
      <div className="overlay toggle-icon"></div>

      <a href="javaScript:;" className="back-to-top">
        <i className="bx bxs-up-arrow-alt"></i>
      </a>
    </div>
  );
}
