import VideoCard from "./VideoCard";
const AdVideocard = ({info}) =>{

return(
        <div className="border border-pink-400">
        <VideoCard info={info}/>
        <p className="font-bold ">AD.</p>
        </div>
)

}

export default AdVideocard;