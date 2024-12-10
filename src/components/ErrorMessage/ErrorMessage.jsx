import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return <h1 className={css.message}>ERROR during fetching photos</h1>;
};

export default ErrorMessage;
