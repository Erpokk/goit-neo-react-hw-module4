import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick, children }) => {
  return (
    <button className={css.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default LoadMoreBtn;
