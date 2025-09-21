'use client';

import Button from "@/app/components/Button";
import Main from "@/app/components/Main";
import About from "@/app/components/About";
import Hobby from "@/app/components/Hobby";
import Contacts from "@/app/components/Contacts";

import styles from "@/app/styles/HomePage.module.css";
import hStyles from "@/app/styles/Header.module.css";

import localFont from "next/font/local";

const font = localFont({ src: "../fonts/Manrope.ttf" });

const avatars = [
    "avatar1.jpg",
    "avatar2.jpg",
    "avatar3.jpg",
    "avatar4.jpg",
];
import { useEffect, useState } from "react";


export default function Home() {
  const [currentPage, setPage] = useState<number>(1); // 1 - main, 2 - contacts, 3 - about, 4 - hobby
  const [displayPage, setDisplayPage] = useState<number>(1);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    if (currentPage === displayPage) return;

    setVisible(false);

    const timeout = setTimeout(() => {
      setDisplayPage(currentPage);
      setVisible(true);
    }, 200); // время совпадает с длительностью CSS transition

    return () => clearTimeout(timeout);
  }, [currentPage, displayPage]);


  return (
    <html lang="en">
      <head>
        <title>RayF</title>
        <meta name="description" content="Персональный сайт RayF" />
      </head>
      <body>
        <div className={`${styles.general} ${font.className}`}>
          {/* Bubbles */}
          <iframe
              src="/bubbles_bg/index.html"
              style={{ width: '100vw', height: '100vh', border: 'none', position: 'absolute', top: '0px', zIndex: -1, overflow: "hidden"}}
              scrolling="no"
          />
          
          {/* Header */}
          <div className={hStyles.header}>
                <img alt="Avatar" className={hStyles.avatar} src={avatars[currentPage-1]} onClick={() => setPage(1)} style={{scale: visible ? 1 : 0.95}} />

                <a href="/lolololol">
                    <img alt="Definetly not a Rickroll button" width={62} src="rayf.png" style={{marginLeft: "40px", marginRight: "45px"}} />
                </a>

                <div className={hStyles.buttons}>
                    { currentPage === 3 ? <div style={{fontSize: "24px"}}>Обо мне</div>  : <div onClick={() => setPage(3)}><Button name="Обо мне" /></div> }
                    { currentPage === 4 ? <div style={{fontSize: "24px"}}>Интересы</div> : <div onClick={() => setPage(4)}><Button name="Интересы" /></div> }
                    { currentPage === 2 ? <div style={{fontSize: "24px"}}>Контакты</div> : <div onClick={() => setPage(2)}><Button name="Контакты" /></div> }
                </div>
            </div>

          {/* Content */}
          <main className={styles.main}>
            <div style={{ display: currentPage === 1 ? 'block' : 'none' }}>
              <Main />
            </div>
            <div style={{ display: currentPage === 3 ? 'block' : 'none' }}>
              <About />
            </div>
            <div style={{ display: currentPage === 4 ? 'block' : 'none' }}>
              <Hobby />
            </div>
            <div style={{ display: currentPage === 2 ? 'block' : 'none' }}>
              <Contacts />
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}