import { Link } from "react-router-dom";

const VideoCard = ({info}) => {
const {snippet, statistics,contentDetails, id } = info;
const {thumbnails, channelTitle, title } = snippet;

function convertToInternationalCurrencySystem (labelValue) {
    return Math.abs(Number(labelValue)) >= 1.0e+9
    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6
    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+3
    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"
    : Math.abs(Number(labelValue));

}

    return(
        
         <div className="m-3 w-72 flex justify-between pb-2 flex-col shadow-md">
            <Link to={"/watch?v="+ id}>
            <img className="w-full rounded-md" src={thumbnails.medium.url} alt="thumbnail" />
            <p className="font-bold p-2">{title}</p>
            <p className="p-2">{channelTitle}</p>
            <div className="flex justify-between p-2">
            <span >{convertToInternationalCurrencySystem(statistics.viewCount)}</span>
            <span >{contentDetails.duration}</span></div>
            </Link>
         </div> 
         
    )
}

export default VideoCard;