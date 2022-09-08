import Card from "./Card";

function Discover({
  artCollection,
  getArtworkDetails,
  addToFavorites,
  favorites,
  fetchArtwork,
}) {
  let deck = artCollection.map((piece) => {
    return (
      <Card
        key={piece.id}
        piece={piece}
        getArtworkDetails={getArtworkDetails}
        addToFavorites={addToFavorites}
        favorites={favorites}
      />
    );
  });

  function handleMoreArtwork() {
    window.scrollTo(0, 0);
    fetchArtwork();
  }
  return (
    <>
      <div>
        <div className="wrapper justify-center mx-6">{deck}</div>
      </div>
      <div className="flex justify-center my-8">
        <button
          onClick={handleMoreArtwork}
          className="hover:bg-orange-500 bg-orange-400 pt-2 pb-3 px-6 lg:py-3 lg:px-40 rounded-full text-white text-sm md:text-lg f-f-p "
        >
          View More Artwork
        </button>
      </div>
    </>
  );
}

export default Discover;
