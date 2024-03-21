import { useState } from "react";

import Header from "./components/Header";
import BookMarkManager from "./features/BookMarkManager";
import Features from "./features/Features";
import "./index.css";
import DownloadExtension from "./features/DownloadExtension";
import Extensions from "./components/Extensions";
import FrequentlyQuestion from "./features/FrequentlyQuestion";
import Contact from "./features/Contact";
import Footer from "./components/Footer";

function App() {
  const [showNav, setShowNav] = useState(false);
  const [simpleBookMark, setSimpleBookMark] = useState(true);
  const [speedySearch, setSpeedySearch] = useState(false);
  const [easyShare, setEasyShare] = useState(false);

  function handleSimpleBookMark() {
    setSimpleBookMark(true);
    setSpeedySearch(false);
    setEasyShare(false);
  }

  function handleSpeedySearch() {
    setSpeedySearch(true);
    setSimpleBookMark(false);
    setEasyShare(false);
  }

  function handleEasyShare() {
    setEasyShare(true);
    setSpeedySearch(false);
    setSimpleBookMark(false);
  }

  function handleShowNav() {
    setShowNav((prevNav) => !prevNav);
    console.log("hello");
    console.log(showNav);
  }
  return (
    <div>
      <Header showNav={showNav} onShowNav={handleShowNav} />
      <BookMarkManager />
      <Features
        onSimpleBookMark={handleSimpleBookMark}
        onEasyShare={handleEasyShare}
        onSpeedySearch={handleSpeedySearch}
        simpleBookMark={simpleBookMark}
        easyShare={easyShare}
        speedySearch={speedySearch}
      />
      <DownloadExtension />
      <Extensions />
      <FrequentlyQuestion />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
