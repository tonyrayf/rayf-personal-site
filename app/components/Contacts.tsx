import styles from "@/app/styles/Contacts.module.css";
import t_style from "@/app/styles/Transition.module.css";
import Image from "next/image";

const logo_width = 95;

export default function Contacts() {
  return (
    <div className={t_style.transition}>
      <div style={{fontWeight: "bold", fontSize: "25px", paddingBottom: "30px"}}>свэг.</div>

      <div className={styles.logos}>
        <a href="https://github.com/tonyrayf" className={styles.logo} style={{textAlign: "center"}}>
          <Image src="github-mark-white.svg" width={logo_width} alt="GitHub" />
          tonyrayf
        </a>

        <a href="https://t.me/ToonyTon" className={styles.logo} style={{textAlign: "center"}}>
          <Image src="telegram-mark.png" width={logo_width} alt="Telegram" />
          @ToonyTon
        </a>

        <a href="https://steamcommunity.com/id/ARF-paradox/" className={styles.logo} style={{textAlign: "center"}}>
          <Image src="steam_logo.png" width={logo_width} alt="Steam" />
          ARF-paradox
        </a>
      </div>

      <div style={{textAlign: "center"}}>Личная: <a className={styles.mail} href="mailto:n3r12acc@gmail.com">n3r12acc@gmail.com</a></div>
      <div style={{textAlign: "center"}}>Корпоративная: <a className={styles.mail} href="mailto:aiy13@tpu.ru">aiy13@tpu.ru</a></div>
    </div>
  );
}