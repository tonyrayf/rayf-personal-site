import styles from "@/app/styles/ClickableImage.module.css";

export default function ClickableImage({source, desc} : {source : string, desc : string}) {
    return (
        <a href={source}>
            <img src={source} className={styles.image} alt={desc} />
        </a>
    );
}