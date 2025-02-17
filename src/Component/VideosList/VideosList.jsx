import { useState } from "react";
import Video from "../Video/Video";

export default function VideosList() {
  const [videos, seteAllVideos] = useState([
    {
      title: `React Level 1 - Part 1 :ReactJS Hooks 2023  `,
      channel: "kimz-codes",
      views: " 27K views",
      channelImage: "http://127.0.0.1:5500/dist/img/hq720%20(1).jpg",
      imageIcon: "https://yt3.ggpht.com/lwoqnst1EoguIdFK35nSHrN0hIWieJvRHGSc4AYStd74MLNT42-4K6S-9P4PIRWQaQNz2xHDbA=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      title: ` React JS 1- Intro & Course`,
      channel: "Mo-tahawy",
      views: " 22K views",
      channelImage: "http://127.0.0.1:5500/dist/img/hq720%20(5).jpg",
      imageIcon:
        "http://127.0.0.1:5500/dist/img/gOviR4aRKwn5cWMikNsoxfVep3hlzv3uwrOvZ_yQnmM9P_-s9_uZT-4XrmXd.jpeg",
    },
    {
      title: `مشترياتي لتجديد النفسيه والمطبخ قبل رمضان`,
      channel: "shimaa fouda",
      views: "8K views",
      channelImage: "http://127.0.0.1:5500/dist/img/hq720%20(3).jpg",
      imageIcon:
        "http://127.0.0.1:5500/dist/img/9wWwue3IsHkJ_nQpvPS5D5f4vJNkyVoxC4B77qpWtZXE9zi3ykWcO2hFQDOP.jpeg",
    },
    {
      title: ` افضل 5 كتب قريتها هتغير حياتك في 2025`,
      channel: "ahmed abdelhady",
      views: "25K views ",
      channelImage: "http://127.0.0.1:5500/dist/img/hq720%20(9).jpg",
      imageIcon:
        "http://127.0.0.1:5500/dist/img/Rs13V1xb67JJ4R642NOi58lH6qsQL16SwyDgWKYowxMKB0hKhwtS7Uu_oKWj.jpeg",
    },
    {
      title: ` خارطه تعلم البرمجه`,
      channel: "mohamed abohahoud",
      views: "25K views",
      channelImage: "http://127.0.0.1:5500/dist/img/hq720%20(4).jpg",
      imageIcon:
        "http://127.0.0.1:5500/dist/img/q3PilZ2e7enLTBdKbMmMoBxyuwtfVull13jiFuY3RKky0f4iw-VrAjOEh3oj.jpeg",
    },
    {
      title: ` رتب مشاعرك وارفع وعيك وتخلص من كرهك لذاتك والاخرين  بهذه الممارسات`,
      channel: "sara",
      views: "1.M views",
      channelImage: "http://127.0.0.1:5500/dist/img/hq720%20(13).jpg",
      "imageIcon":"http://127.0.0.1:5500/dist/img/channels4_profile%20(2).jpg"
    },
  ]);
  return (
    <div className="container px-5 mx-auto ">
      <div className=" flex gap-4 mt-7  mx-auto  flex-wrap">
        {videos.map((video, index) => {
          return <Video key={index} vid={video} />;
        })}
      </div>
    </div>
  );
}
