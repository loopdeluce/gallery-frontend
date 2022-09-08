import React from "react";
import HomeNav from "./HomeNav";
import Content from "./Content";

function HomePage({
  artCollection,
  favorites,
  authenticatedUser,
  updateAuthenticatedUser,
  addToFavorites,
  fetchArtwork,
}) {
  return (
    <>
      <div className="sticky top-0 bottom-20 z-50 mb-5">
        <HomeNav handleLogout={updateAuthenticatedUser} />
      </div>
      <div className="relative">
        <Content
          artCollection={artCollection}
          favorites={favorites}
          authenticatedUser={authenticatedUser}
          updateAuthenticatedUser={updateAuthenticatedUser}
          addToFavorites={addToFavorites}
          fetchArtwork={fetchArtwork}
        />
      </div>
    </>
  );
}

export default HomePage;
