import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TopNavbar from "./Component/TopNavbar/TopNavbar";
// import Aside from "./Component/Aside/Aside";
import VideosList from "./Component/VideosList/VideosList";
import BottomNav from "./Component/BottomNav/BottomNav";
import Aside from "./Component/Aside/Aside";

function App() {
  return (
    <>
    <div className="flex">
   <Aside/>
    <div className="flex-1">
    <TopNavbar/>
        <BottomNav />
        <VideosList />
    </div>
    </div>
    </>
  );
}

export default App;
