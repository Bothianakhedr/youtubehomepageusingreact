import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TopNavbar from "./Component/TopNavbar/TopNavbar";
import Aside from "./Component/Aside/Aside";
import Video from "./Component/Video/Video";
import VideosList from "./Component/VideosList/VideosList";
import BottomNav from "./Component/BottomNav/BottomNav";

function App() {
  return (
    <>
      <TopNavbar />
      <div className="flex ">
        <Aside />
        <div>
        <BottomNav/>
        <VideosList/> 


        </div>
      </div>
    </>
  );
}

export default App;
