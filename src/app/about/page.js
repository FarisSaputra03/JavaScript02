"use client"
import Link from "next/link";
import Styles from "./about.module.css";
import Info from "../../components/Info";
import { useState } from "react";
import Image from "next/image";
function About() {
  const [show, setShow]=useState(false);
  const showImg = () =>{
    setShow(!show);
  };
  const [show2, setShow2]=useState(false);
  return (
    <>
      <div className={Styles.main}>
        <h2 className="text-lg font-bold text-center">Selamat Datang Di About</h2>
      </div>
      <Info title="About Component" />
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md mt-3 text-lg font-bold text-center"
      onClick={showImg}>Show images</button>
      {show && (
      <Image  
      src="/img/toko.png" 
      alt="latihan2" 
      width={500} 
      height={300}
      className="opacity-0 transition-opacity duration-1000" 
      onLoadingComplete={(img) =>
        img.classList.remove("opacity-0")
      }
      />
      )}
    </>
  );
}
export default About;