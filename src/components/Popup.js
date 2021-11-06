import React, { useState } from "react";
import PropTypes from "prop-types";
import Description from "./Description";

const Popup = (props) => {
  const [mangaData, setMangaData] = useState(null);
  const fetchFromAniList = () =>
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
          tags {
            name
          }
          title {
            romaji
          }
        }
      }`,
        variables: { search: props.title },
      }),
    })
      .then((r) => r.json())
      .then((responseData) =>
        setMangaData({
          ...responseData.data.Media,
          tags: responseData.data.Media.tags.map((tag) => tag.name),
        })
      );

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
      <h1 className="sky-fish">
        {mangaData ? mangaData.title.romaji : props.title}
      </h1>
      {mangaData ? (
        <Description data={mangaData} />
      ) : (
        <button className="sky-fish search" onClick={fetchFromAniList}>
          Search on Anilist
        </button>
      )}
    </div>
  );
};

export default Popup;

Popup.propTypes = {
  title: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  position: PropTypes.object.isRequired,
};
