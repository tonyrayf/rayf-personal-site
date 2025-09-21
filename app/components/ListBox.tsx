import styles from "@/app/styles/ListBox.module.css";
import Image from "next/image";

export default function ListBox({text, logo, alt} : {text : string, logo : string, alt : string}) {
    return (
        <div className={styles.listbox}>
            {logo != '' && <Image src={logo} width={40} alt={alt} /> }
            <div style={{alignSelf: "center"}}>{text}</div>
        </div>
    );
}