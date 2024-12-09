import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Blocks } from "react-loader-spinner";
import toast from "react-hot-toast";
const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

function App() {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    async function fetchPhotos() {
      if (query === "") return;
      try {
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
      } catch (error) {
        toast.error("Error during HTTP-request");
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
  return (
    <div>
      <SearchBar
        value={search}
        onSearchChange={setSearch}
        onSearchSubmit={handleSearchSubmit}
      />
      {photos != 0 && <ImageGallery data={photos} />}
      {load && (
        <Blocks
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          visible={true}
        />
      )}
      {photos.length > 0 ? (
        <LoadMoreBtn onLoad={setPage}>Load more</LoadMoreBtn>
      ) : null}
    </div>
  );
}

export default App;
