import React, { useState, useEffect } from "react";

// new custom hook
function useGiphy(query) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData(query) {
      setLoading(true);
      const response = await fetch("url");
      const json = await response.json();
      setResults(
        json.data.map((item) => {
          return item.images.preview.mp4;
        })
      );
      setLoading(false);
    }
    if (query !== "") {
      fetchData();
    }
  }, [query]);

  return [results, loading];
}

export default function asynchooks() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  // abstract the fetch request functionality
  const [results, loading] = useGiphy(query);

  return (
    <div>
      <h1>React Hooks Async</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setQuery(search);
        }}
      >
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="search GIFs"
        />
        <button type="submit">Search</button>
      </form>
      <br />
      {loading ? (
        <h1>GIVE ME GIFS</h1>
      ) : (
        results.map((item) => <video autoPlay loop key={item} src={item} />)
      )}
    </div>
  );
}
