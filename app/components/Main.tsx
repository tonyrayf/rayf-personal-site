import styles from "@/app/styles/Main.module.css";
import ClickableImage from "./ClickableImage";
import t_style from "@/app/styles/Transition.module.css";

export default function Main() {
    return (
        <div className={t_style.transition}>
            <div style={{fontWeight: "bold", fontSize: "25px", paddingBottom: "30px"}}>Дарова. Меня Антон.</div>

            Немного разработчик. Немного музыкант. Немного дизайнер. <div style={{color: "#1b1b1b", fontSize: "12px"}}>Много дебил.</div>
            <br />

            <div style={{fontWeight: "bold"}}>Моя роль - Разработчик 💻</div>
            <div style={{fontSize: "18px"}}>
                🥇1 место - Хакатон {'"Моя Профессия ИТ"'}, Республиканский этап, ГеймДев<br />
                🥈Призёр - Хакатон {'"Моя Профессия ИТ"'}, Закл. этап, Предиктивная аналитика <br />
                🥉Призёр - Республиканский НПК {'"Шаг в будущее"'}<br />
            </div>
            <br />

            Мой текущий хобби-проект - игра Shapes:
            <div className={styles.images}>
                <ClickableImage source="shapes1.jpg" desc="Shapes 1" />
                <ClickableImage source="shapes2.png" desc="Shapes 2" />
                <ClickableImage source="shapes3.png" desc="Shapes 3" />
            </div>
            <br /><br />

            <div style={{fontWeight: "bold"}}>Мои зоны роста и ожидание от курса:</div>
            <ul className={styles.list}>
                <li>Научиться вовремя закрывать дедлайны</li>
                <li>Укрепить навыки работы с командой</li>
                <li>Усвоить ораторские навыки</li>
            </ul>
        </div>
    );
}