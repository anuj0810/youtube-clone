import { Outlet } from "react-router-dom";
import Aside from "./Aside"
import VideoContainer from "./VideoContainer"

const Body = () => {
  return (
    <div className="flex">
        <Aside/>
        <Outlet/>
    </div>
  )
}

export default Body;