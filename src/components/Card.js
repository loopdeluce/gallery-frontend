import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Card({ piece, getArtworkDetails, favorites, addToFavorites }) {
  const [cardFavorited, setCardFavorited] = useState(false);
  const history = useHistory();

  const { title, img_link, artist, key } = piece;
  const url = `https://www.artic.edu/iiif/2/${img_link}/full/843,/0/default.jpg`;

  const tog = favorites.find((c) => {
    return c.id === piece.id;
  });

  function showArtworkDetails(event) {
    if (
      event.target.innerText !== "♥ Favorited" &&
      event.target.innerText !== "♡ Favorite"
    ) {
      getArtworkDetails(key, piece.id).then(() =>
        history.push("/home/details")
      );
    }
  }

  return (
    <div
      className="h-fit max-w rounded-lg overflow-hidden shadow-lg my-6"
      onClick={showArtworkDetails}
    >
      <img className="w-full" src={url} alt="Sunset in the mountains"></img>
      <div className="pt-4 px-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {artist != null ? artist : "Unknown"}
        </p>
      </div>
      <div
        onClick={(event) => {
          addToFavorites(piece, event);
        }}
        className="px-6 pb-2 flex justify-end"
        id="favorite"
      >
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">
          {tog ? "♥ Favorited" : "♡ Favorite"}
        </span>
      </div>
    </div>
  );
}

export default Card;
