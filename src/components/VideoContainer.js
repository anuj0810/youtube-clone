import React, {useEffect, useState} from 'react'
import { YOUTUBE_VIDEOS_API } from '../constant'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import AdVideocard from './AdVideoCard'

const VideoContainer = () => {
 const [videosCollection, setVideosCollection] = useState()
  useEffect(
    () =>{
      getvideos()
    },[]
  )
   const  getvideos = async() =>{
      const data = (await fetch( YOUTUBE_VIDEOS_API));
      const json = await data.json()
       setVideosCollection(json)
  }

  return videosCollection == undefined ? null :  (
    <div className='p-8 flex flex-wrap justify-around '>
      {
      videosCollection.items.map( (item,index) => {
        if(index==0){
          return(
            <AdVideocard key={item.id} info = {item} />
          )
        }else{
        return(  
          <VideoCard key={item.id} info = {item} />
        )}
      })
      }
      
    </div>
  )
}

export default VideoContainer