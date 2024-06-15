import classes from "./TextBased.module.css";
const Textbased = () => {
  return (
    <section className={classes.section} >
      <iframe
        className={classes.textPrompt}
        src="https://www.chatbase.co/chatbot-iframe/wz001WPHNDcEpFq5ULchw"
      ></iframe>
    </section>
  );
};

export default Textbased;
