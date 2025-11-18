import { useLang } from "./LangProvider";
const LangApp = () => {
  const { lang, toggleLang, text } = useLang();
  return (
    <div       style={{
        background:    "#333",
        color:  "#fff",
        height: "100vh",
        textAlign: "center",
        paddingTop: "100px",
        width:"100vw",
      }}>
      <h2>{text}</h2>
      <button onClick={toggleLang}>
        Switch to {lang === "en" ? "Arabic" : "English"}
      </button>
    </div>
  );
};

export default LangApp;