import React, { useState } from "react";
import PropTypes from "prop-types";
import Description from "./Description";

const Popup = (props) => {
  const [mangaData, setMangaData] = useState(null);
  const fetchFromAniList = (searchString) =>
    fetch("https://graphql.anilist.co/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: `query getMangaFromName($search: String) {
        Media (search: $search, type: MANGA) {
          status
          description
          volumes
          chapters
          genres
          siteUrl
          tags {
            name
          }
          title {
            native
            romaji
            english
          }
        }
      }`,
        variables: { search: searchString },
      }),
    })
      .then((r) => r.json())
      .then((responseData) =>
        setMangaData(
          responseData?.data?.Media
            ? {
                ...responseData.data.Media,
                tags: responseData.data.Media.tags.map((tag) => tag.name),
              }
            : -1
        )
      );

  let child;
  if (mangaData == -1) {
    child = <h3 className="skyfish">Manga not Found</h3>;
  } else if (mangaData) {
    child = <Description data={mangaData} />;
  } else {
    child = props.title.map((str, i) => (
      <div key={i} className="search sky-fish">
        <button
          className="sky-fish search"
          onClick={() => fetchFromAniList(str)}
        >
          Search
        </button>
        <span className="sky-fish search">{str}</span>
      </div>
    ));
  }

  return (
    <div
      className="sky-fish-popup"
      style={{
        top: props.position.y,
        left: props.position.x,
      }}
    >
      <button className="sky-fish close" onClick={props.close}>
        <div></div>
        <div></div>
      </button>
      <h1 className="sky-fish">{mangaData?.title?.native ?? null}</h1>
      <h1 className="sky-fish">{mangaData?.title?.romaji ?? null}</h1>
      <h1 className="sky-fish">{mangaData?.title?.english ?? null}</h1>
      {mangaData?.siteUrl ? (
        <a
          className="sky-fish"
          onClick={() => window.open(mangaData.siteUrl, "_blank")}
        >
          Open in AniList
        </a>
      ) : null}
      {child}
    </div>
  );
};

export default Popup;

Popup.propTypes = {
  title: PropTypes.array.isRequired,
  close: PropTypes.func.isRequired,
  position: PropTypes.object.isRequired,
};
