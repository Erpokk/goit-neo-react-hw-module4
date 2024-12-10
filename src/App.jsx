import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import Loader from "./components/Loader/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";

const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

function App() {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPhotos() {
      if (query === "") return;
      try {
        setError(false);
        setLoad(true);
        const response = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: { query, per_page: 12, page },
            headers: {
              Authorization: `Client-ID ${apiKey}`,
            },
          }
        );
        setPhotos((prevPhotos) => [...prevPhotos, ...response.data.results]);
        console.log(response.data.results);
      } catch (error) {
        setError(true);
        console.error("Error fetching photos:", error);
      } finally {
        setLoad(false);
      }
    }

    fetchPhotos();
  }, [query, page]);

  const handleSearchSubmit = (searchValue) => {
    setQuery(searchValue);
    setPhotos([]);
    setPage(1);
  };

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };
  return (
    <div>
      <SearchBar
        value={search}
        onSearchChange={setSearch}
        onSearchSubmit={handleSearchSubmit}
      />
      {error && <ErrorMessage />}
      {photos != 0 && !error && (
        <ImageGallery data={photos} onImageClick={openModal} />
      )}
      {load && <Loader />}
      {photos.length > 0 && !error ? (
        <LoadMoreBtn onLoad={setPage}>Load more</LoadMoreBtn>
      ) : null}
      {!error && (
        <ImageModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          selectedImage={selectedImage}
        />
      )}
    </div>
  );
}

export default App;
