const API_KEY = "AIzaSyAqmpAIFVKnDY45mykLAmxpTIErj9GqaC4"

export const YOUTUBE_VIDEOS_API =  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+ API_KEY 

export const YOUTUBE_VIDEO_WATCH = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key="+API_KEY+"&id="

export const YOUTUBE_SEARCH_SUGGESTION = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="



