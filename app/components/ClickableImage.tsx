import styles from "@/app/styles/ClickableImage.module.css";
import Image from "next/image";

export default function ClickableImage({source, desc} : {source : string, desc : string}) {
    return (
        <a href={source}>
            <Image src={source} className={styles.image} alt={desc} />
        </a>
    );
}