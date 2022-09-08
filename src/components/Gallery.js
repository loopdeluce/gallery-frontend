import React from "react";
import Card from "./Card";

function Gallery({ favorites, addToFavorites, getArtworkDetails }) {
  let deck;

  if (favorites.length === 0) {
    deck = <h1>You have don't have any favorites yet!</h1>;
  } else {
    deck = favorites.map((piece) => {
      return (
        <div className="self-stretch">
          <Card
            key={piece.id}
            piece={piece}
            getArtworkDetails={getArtworkDetails}
            addToFavorites={addToFavorites}
            favorites={favorites}
          />
        </div>
      );
    });
  }
  return <div className="wrapper">{deck}</div>;
}

export default Gallery;
