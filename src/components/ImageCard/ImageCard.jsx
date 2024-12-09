import css from './ImageCard.module.css'

const ImageCard = ({ src }) => {
    return (
        <>
            <img src={src} alt="" className={css.galleryImage} />
        </>
    );
};

export default ImageCard;

