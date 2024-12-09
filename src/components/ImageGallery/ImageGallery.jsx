import ImageCard from "../ImageCard/ImageCard.jsx";
import css from "./ImageGallery.module.css";
import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";

const ImageGallery = ({ data }) => {
  const openLightbox = (url) => {
    const instance = basicLightbox.create(`
        <img src="${url.urls.regular}" width='800' height='800'>
       
        `);
    instance.show();
  };
  console.log(basicLightbox);
  return (
    <>
      <ul className={css.galleryList}>
        {data.map((url) => (
          <li
            key={url.id}
            className={css.galleryItem}
            onClick={() => openLightbox(url)}
          >
            <ImageCard src={url.urls.small}></ImageCard>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
