import css from "./ImageCard.module.css";

const ImageCard = ({ src, onClick }) => {
  return (
    <>
      <img src={src} alt="" className={css.galleryImage} onClick={onClick} />
    </>
  );
};

export default ImageCard;
