import ListBox from "./ListBox";
import t_style from "@/app/styles/Transition.module.css";

export default function About() {
  return (
    <div className={t_style.transition}>
      <div style={{fontWeight: "bold", fontSize: "25px", paddingBottom: "30px"}}>Ну обо мне.</div>

      Меня зовут Ядреев Антон Иванович. Псевдоним - RayF.<br />
      Родился 19 марта 2007 года в Республике Саха в городе Якутске. <br />
      Учусь в Томском Политехническом Университете цифровому дизайну.<br />
      Во многом самоучка. Во многом по немногу.<br /><br />

      <div style={{fontSize: 19}}>Любимая фраза:</div> <div style={{fontSize: "17px", fontStyle: "italic"}}>{"I'll never gonna comeback, but when I comeback I'll be the knifemaster"}</div>

      <br />
      {/* Навыки */}
      <div style={{fontSize: "1.3rem", fontWeight: "bold", paddingBottom: 15}}>Мои навыки:</div>

      <div style={{display: "flex", flexDirection: "row", gap: "1px", paddingBottom: "50px"}}>
        <div style={{display: "flex", flexDirection: "column", gap: "1px", width: "50%"}}>
          <ListBox text="HTML, CSS" logo="/html_logo.png" alt="HTML logo" />
          <ListBox text="NextJS" logo="/next_logo.png" alt="NextJS logo" />
          <ListBox text="Python" logo="/python_logo.png" alt="Python logo" />
        </div>
        <div style={{display: "flex", flexDirection: "column", gap: "1px", width: "50%"}}>
          <ListBox text="Барабаны" logo="/drums_emoji.png" alt="Drum emoji" />
          <ListBox text="GameMaker" logo="/gms_logo.png" alt="GameMaker logo" />
          <ListBox text="Прокрастинация" logo="/angel_emoji.png" alt="Angel emoji" />
        </div>
      </div>
    </div>
  );
}