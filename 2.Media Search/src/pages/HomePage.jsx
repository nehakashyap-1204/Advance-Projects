import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";
import Searchbar from "../components/SearchBar";

function HomePage() {
  const { query } = useSelector((store) => store.search);
  return (
    <div>
      <Searchbar />
      {query != "" ? (
        <div>
          <Tabs />
          <ResultGrid />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default HomePage;
