import style from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Get in Touch</h1>
      <form className={style.form}>
        <input className={style.inputS} type="text" placeholder="Name" />
        <input className={style.inputS} type="text" placeholder="Phone" />
        <input className={style.inputL} type="text" placeholder="Email" />
        <input className={style.inputL} type="text" placeholder="Subject" />
        <textarea
          className={style.textArea}
          type="text"
          rows={6}
          placeholder="Message"
        />
        <button className={style.button}>SUBMIT</button>
      </form>
    </div>
  );
};

export default Contact;