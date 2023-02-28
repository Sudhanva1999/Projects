import React from "react";
import "./resources/styles.css";
import Footer from "./components/header footer/Footer";
import Header from "./components/header footer/Header";
import Featured from "./components/featured";
import VenueInfo from "./components/venueInfo";
import Highlights from './components/highlights';
import Pricing from "./components/pricing";
import Location from "./components/location";
import { Element } from "react-scroll";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Element name="featured">
        <Featured />
      </Element>
      <Element name="venueInfo">
        <VenueInfo />
      </Element>
      <Element name="highlights">
        <Highlights />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
