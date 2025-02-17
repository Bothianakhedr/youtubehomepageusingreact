import { useState } from "react";
import Video from "../Video/Video";

export default function VideosList() {
  const [videos, seteAllVideos] = useState([
    {
      title: `React Level 1 - Part 1 :ReactJS Hooks 2023  `,
      channel: "kimz-codes",
      views: " 27K views",
      channelImage:
        "https://i.ytimg.com/vi/p8nOfP2fw24/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAqES7yWle_EWKXi_zhFwvSRkWU6w",
      imageIcon:
        "https://yt3.ggpht.com/lwoqnst1EoguIdFK35nSHrN0hIWieJvRHGSc4AYStd74MLNT42-4K6S-9P4PIRWQaQNz2xHDbA=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      title: ` React JS 1- Intro & Course`,
      channel: "Mo-tahawy",
      views: " 22K views",
      channelImage:
        "https://i.ytimg.com/vi/JwhyBUuVYbI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDbaAQ91pNuXh5xOzLBQARSFvZNOg",
      imageIcon:
        "https://yt3.ggpht.com/gOviR4aRKwn5cWMikNsoxfVep3hlzv3uwrOvZ_yQnmM9P_-s9_uZT-4XrmXdt-Ni6vCXySBC=s48-c-k-c0x00ffffff-no-rj",
    },
    {
      title: `مشترياتي لتجديد النفسيه والمطبخ قبل رمضان`,
      channel: "shimaa fouda",
      views: "8K views",
      channelImage:
        "https://i.ytimg.com/vi/4E-HcFEgDFg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBV0_teNTyUBndI5D18imu6Xuj8Og",
      imageIcon:
        "https://yt3.ggpht.com/9wWwue3IsHkJ_nQpvPS5D5f4vJNkyVoxC4B77qpWtZXE9zi3ykWcO2hFQDOPZjGtVTMlRhL-=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      title: ` افضل 5 كتب قريتها هتغير حياتك في 2025`,
      channel: "ahmed abdelhady",
      views: "25K views ",
      channelImage:
        "https://i.ytimg.com/vi/pQZIBllJGgQ/hqdefault_6166.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCNUbF5e_IB3jcybdvrLWwZbyfG0g",
      imageIcon:
        "https://yt3.googleusercontent.com/UGcuE6niVr5GTJ6W_bqKltzDd2WYI041p5bXufQSionkuquqpE1_w22ZmfMmhFvyjTBe1YKi9A=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      title: ` خارطه تعلم البرمجه`,
      channel: "mohamed abohahoud",
      views: "25K views",
      "channelImage":
        "https://i.ytimg.com/an_webp/ItIjFNIj5ng/mqdefault_6s.webp?du=3000&sqp=CJDu1r0G&rs=AOn4CLDP7CUdXj6bfHJPBNoWT85KcrhopQ",
      "imageIcon":
        "https://yt3.googleusercontent.com/q3PilZ2e7enLTBdKbMmMoBxyuwtfVull13jiFuY3RKky0f4iw-VrAjOEh3ojMjRqHl6YusxwI8w=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      title: ` رتب مشاعرك وارفع وعيك وتخلص من كرهك لذاتك والاخرين  بهذه الممارسات`,
      channel: "sara",
      views: "1.M views",
      channelImage: "https://i.ytimg.com/vi/IRVTv6ZYzG0/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDX18Hl2Ggh97uiIMHAOG3c9rBEdA",
      imageIcon: "https://yt3.ggpht.com/ytc/AIdro_nAv5Yz5b0p3HlRQe_A7jquqHOzxhzJT6MpupXVL8XhLcQ=s68-c-k-c0x00ffffff-no-rj",
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
