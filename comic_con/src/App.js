import React from "react";
import "./resources/styles.css"
import Footer from "./components/header footer/Footer"
import Header from "./components/header footer/Header"
import Featured from "./components/featured";

const App = () => {
  return (
    <div className="App">
      <Header />

      <>
        <Featured />
      </>

      <div style={{ height: "1000px" }}>
      </div>

      <Footer />
    </div>
  );
}

export default App;
