import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./LoginForm";
import NewUserForm from "./NewUserForm";

function LandingPage({
  existingUsers,
  handleLogin,
  fetchUserFavoriteArtworks,
  postNewUser,
}) {
  const [show, setShow] = useState(false);
  const [images, setImages] = useState([]);
  const [loadImage, setLoadImage] = useState("");
  const [imageTitle, setImageTitle] = useState("");
  const [artistName, setArtistName] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:4200/artworks")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
        const imageNumber = Math.trunc(Math.random() * data.length);
        setLoadImage(data[imageNumber].img_link);
        setImageTitle(data[imageNumber].title);
        setArtistName(data[imageNumber].artist);
      });
  }, []);

  let loadImageUrl = `https://www.artic.edu/iiif/2/${loadImage}/full/843,/0/default.jpg`;

  return (
    <>
      <div className="lg:px-6 xl:px-8">
        <div className="mx-auto container relative z-0 px-4 xl:px-8">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="md:w-3/5 md:pt-24 pb-10 lg:pb-20 xl:pb-48">
              <h1 className="text-3xl lg:text-6xl xl:text-8xl font-black text-gray-900 text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color ">
                The Art Institute of Chicago
              </h1>
              <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-6 text-primary font-medium text-lg lg:text-2xl">
                Assemble your virtual gallery.
              </h2>
              <div className="w-full flex justify-center md:justify-start">
                <Switch>
                  <Route path="/signup">
                    <NewUserForm
                      existingUsers={existingUsers}
                      postNewUser={postNewUser}
                      handleLogin={handleLogin}
                    />
                  </Route>
                  <Route exact path="/">
                    <LoginForm
                      existingUsers={existingUsers}
                      handleLogin={handleLogin}
                      fetchUserFavoriteArtworks={fetchUserFavoriteArtworks}
                    />
                  </Route>
                </Switch>
              </div>
            </div>
            <div className="w-1/2 sm:w-2/5 h-64 md:h-auto m-auto flex items-center overflow-hidden">
              <img
                width="500"
                className="md:absolute md:w-1/2 md:-ml-28"
                src={loadImageUrl}
                alt="Art from our collection"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
