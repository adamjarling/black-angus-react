import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import PressKitContainer from "./containers/PressKitContainer";
import ShowsContainer from "./containers/ShowsContainer";
import PhotosContainer from "./containers/PhotosContainer";
import BookingContainer from "./containers/BookingContainer";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomeContainer />} />
        <Route path="/press-kit" element={<PressKitContainer />} />
        <Route path="/shows" element={<ShowsContainer />} />
        <Route path="/photos" element={<PhotosContainer />} />
        <Route path="/booking" element={<BookingContainer />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
