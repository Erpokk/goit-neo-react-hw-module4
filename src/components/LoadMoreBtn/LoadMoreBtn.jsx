import css from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({ onLoad, children }) => {
    return (
        <button className={css.btn} onClick={() => onLoad(prevPage => prevPage + 1)}>{children}</button>
    )
}

export default LoadMoreBtn;