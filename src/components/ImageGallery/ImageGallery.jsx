import ImageCard from "../ImageCard/ImageCard.jsx";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ data, onImageClick }) => {
  return (
    <>
      <ul className={css.galleryList}>
        {data.map((url) => (
          <li key={url.id} className={css.galleryItem}>
            <ImageCard
              src={url.urls.small}
              onClick={() => onImageClick(url.urls.regular)}
            ></ImageCard>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
