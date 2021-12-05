import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";
import Pictures from "./Pictures";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [definition, setDefinition] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setDefinition(response.data[0]);
  }

  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(url).then(handleResponse);

    let pexelApiKey =
      "563492ad6f917000010000012573eaac151f40acb248400680d9fe72";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=5`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelApiKey}` },
      })
      .then(handlePexelResponse);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>Search for any word:</h1>
        <form onSubmit={search}>
          <input type="search" autoFocus={true} onChange={updateKeyword} />
        </form>
      </section>
      <Results data={definition} />

      <Pictures photos={photos} />
    </div>
  );
}
