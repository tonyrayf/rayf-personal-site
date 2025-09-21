import styles from "@/app/styles/Hobby.module.css";
import t_style from "@/app/styles/Transition.module.css";

export default function Hobby() {
  return (
    <div className={t_style.transition}>
      <div style={{fontWeight: "bold", fontSize: "25px", paddingBottom: "30px"}}>Развлекаюсь как могу.</div>

      <div className={styles.title}>🧪Наука</div>
      <ul className={styles.list}>
        <li>⚛️ Любимая наука - Физика</li>
        <li>🧑🏻‍🔬 Любимый учёный - Ричард Фейнман</li>
        <li>🟰 Любимая формула - <img src="euler_identity.png" style={{height: "38px", display: "inline"}} alt="Euler's identity" /> (хочу себе татуху набить с ней)</li>
      </ul>

      <div className={styles.title}>🎼Музыка</div>
      <ul className={styles.list}>
        <li>🎧 Любимый жанр - Хеви-метал</li>
        <li>🤘 Любимая группа - Avenged Sevenfold</li>
        <li>🥁 Любимый инструмент - Барабанная установка</li>
      </ul>

      <div className={styles.title}>🕹️Игры</div>
      
      <ul className={styles.list}>
        Любимые игры:
        <li>💀 Kimi ga Shine: Tasuketsu Death Game</li>
        <li>🥛 Milk outside a bag of milk</li>
        <li>🏔️ PEAK</li>
        <li></li>
      </ul>
    </div>
  );
}