import React from "react";
import "./App.css";
import Header from "./components/header";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
