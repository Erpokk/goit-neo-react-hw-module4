import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = ({ value, onSearchChange, onSearchSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value == 0) {
      toast.error("Cant be empty");
    }
    onSearchSubmit(value);
  };

  return (
    <header className={css.header}>
      <div>
        <Toaster />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            className={css.headerInput}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <button className={css.headerBtn} type="submit">
            <IoSearchOutline size="15" />
          </button>
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
