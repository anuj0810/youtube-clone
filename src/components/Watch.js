import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_WATCH } from "../constant";
import { useEffect } from "react";
import CommentSection from "./CommentSection";
const Watch = () => {
  const [searchParam] = useSearchParams();
  const ID = searchParam.get("v");
  useEffect(() => {
    getVideo();
  });
  const getVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_WATCH + ID);
    const json = await data.json();
  };
  return (
    <div className="flex flex-col">
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/" + ID}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p className="font-bold text-2xl p-2 mt-3">Commnet</p>

      <CommentSection />
    </div>
  );
};

export default Watch;
